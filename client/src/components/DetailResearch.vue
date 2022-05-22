<template>
    <div>
        <table class="table m-3" style="width: 800px">
            <tbody>
                <tr>
                    <th scope="row">
                        <img src="https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg" class="card-img-top" style="width: 5rem" />
                    </th>
                    <th scope="row m-2">
                        <h3>
                            <i> {{ research.title }}</i>
                        </h3>
                    </th>
                </tr>
                <tr>
                    <td>
                        <figcaption class="blockquote-footer mt-1">by<cite title="Source Title"></cite></figcaption>
                        <figcaption class="blockquote-footer mt-1">location<cite title="Source Title"></cite></figcaption>
                        <figcaption class="blockquote-footer mt-1">abstract<cite title="Source Title"></cite></figcaption>
                    </td>
                    <td>
                        <p>
                            <!-- <i> {{ research.User.Profile.firstName }} {{ research.User.Profile.lastName }} </i> -->
                            <i> {{ research.User.username }} </i>
                        </p>
                        <p>
                            <i> {{ research.location }} </i>
                        </p>
                        <p>
                            <i> {{ research.abstract }} </i>
                        </p>
                        <a href="#" class="btn btn-primary me-2"><i class="fa fa-edit" @click.prevent="show"> Edit</i></a>
                        <a href="#" class="btn btn-success me-2" @click.prevent="download(research)"><i class="fa fa-edit"> Download Revisi</i></a>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- FORM EDIT -->
        <form v-if="showEdit === true" @submit.prevent="upload" enctype="multipart/form-data" class="row g-3 m-2" style="width: 700px">
            <div class="col-12">
                <label class="form-label">Research Title</label>
                <input v-model="research.title" type="text" class="form-control" placeholder="Pengaruh ..." />
            </div>
            <div class="col-12">
                <label class="form-label">Abstract</label>
                <textarea v-model="research.abstract" cols="30" rows="10" placeholder="some text ..."></textarea>
            </div>
            <div class="col-md-6">
                <label class="form-label">Year</label>
                <input v-model="research.year" type="text" class="form-control" placeholder="2020" />
            </div>
            <div class="col-md-6">
                <label class="form-label">Category</label>
                <select class="form-select" v-model="research.CategoryId">
                    <option selected>Choose...</option>
                    <option v-for="(el, i) in categories" :key="i" :value="el.id">{{ el.name }}</option>
                </select>
            </div>
            <div class="col-12">
                <label class="form-label">Location</label>
                <input v-model="research.location" type="text" class="form-control" placeholder="1234 Main St" />
            </div>
            <div class="col-md-6">
                <label class="form-label">Upload</label>
                <!-- document adalah nama column di DB -->
                <input @change="(e) => (document = e.target.files[0])" type="file" name="pdf" accept="pdf/*" />
            </div>
            <button type="submit" class="btn btn-primary">save</button>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { categoryStore } from "../stores/category";
import { researchStore } from "../stores/research.js";

export default {
    name: "DetailResearch",
    data() {
        return {
            showEdit: false,
        };
    },
    computed: {
        ...mapState(researchStore, ["serverUrl", "research"]),
        ...mapState(categoryStore, ["categories"]),
    },
    methods: {
        ...mapActions(researchStore, ["getFile", "getDetails", "postResearch"]),
        ...mapActions(categoryStore, ["getAllCategory"]),
        download(file) {
            this.getFile(file);
        },
        show() {
            this.showEdit = true;
        },
        upload() {
            let formData = new FormData();
            const newResearch = {
                title: this.research.title,
                abstract: this.research.abstract,
                year: this.research.year,
                document: this.document,
                location: this.research.location,
                status: this.research.status,
                CategoryId: this.research.CategoryId,
            };
            // console.log(newResearch);
            formData.append("title", newResearch.title);
            formData.append("abstract", newResearch.abstract);
            formData.append("year", newResearch.year);
            formData.append("document", newResearch.document);
            formData.append("location", newResearch.location);
            formData.append("status", newResearch.status);
            formData.append("CategoryId", newResearch.CategoryId);
            // console.log(formData);
            this.postResearch(formData);
        },
    },
    created() {
        this.getDetails(this.$route.params.researchId);
        this.getAllCategory();
    },
};
</script>

<style scoped>
table {
    display: flex;
    justify-content: center;
}
</style>

<style scoped>
body {
    display: flex;
}
body form {
    transform: translate(28%, 0%);
    background: rgb(243, 239, 239);
}
textarea {
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    resize: none;
}
</style>
