<template>
    <form @submit.prevent="upload" enctype="multipart/form-data" class="row g-3 m-2" style="width: 700px">
        <div class="col-12">
            <label class="form-label">Research Title</label>
            <input v-model="title" type="text" class="form-control" placeholder="Pengaruh ..." />
        </div>
        <div class="col-12">
            <label class="form-label">Abstract</label>
            <textarea v-model="abstract" cols="30" rows="10" placeholder="some text ..."></textarea>
        </div>
        <div class="col-md-6">
            <label class="form-label">Year</label>
            <input v-model="year" type="text" class="form-control" placeholder="2020" />
        </div>
        <div class="col-md-6">
            <label class="form-label">Category</label>
            <select class="form-select" v-model="CategoryId">
                <option selected>Choose...</option>
                <option v-for="(el, i) in categories" :key="i" :value="el.id">{{ el.name }}</option>
            </select>
        </div>
        <div class="col-12">
            <label class="form-label">Location</label>
            <input v-model="location" type="text" class="form-control" placeholder="1234 Main St" />
        </div>
        <div class="col-md-6">
            <label class="form-label">Upload</label>
            <!-- document adalah nama column di DB -->
            <input @change="(e) => (document = e.target.files[0])" type="file" name="pdf" accept="pdf/*" />
        </div>
        <div class="col-12 text-end me-5">
            <button type="submit" class="btn btn-primary">save</button>
        </div>
    </form>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { researchStore } from "../stores/research.js";
import { categoryStore } from "../stores/category.js";

export default {
    name: "FormCreate",
    data() {
        return {
            title: "",
            abstract: "",
            year: "",
            document: "",
            location: "",
            status: "pending",
            CategoryId: "",
        };
    },
    methods: {
        ...mapActions(researchStore, ["postResearch"]),
        ...mapActions(categoryStore, ["getAllCategory"]),
        upload() {
            let formData = new FormData();
            const newResearch = {
                title: this.title,
                abstract: this.abstract,
                year: this.year,
                document: this.document,
                location: this.location,
                status: this.status,
                CategoryId: this.CategoryId,
            };

            formData.append("title", newResearch.title);
            formData.append("abstract", newResearch.abstract);
            formData.append("year", newResearch.year);
            formData.append("document", newResearch.document);
            formData.append("location", newResearch.location);
            formData.append("status", newResearch.status);
            formData.append("CategoryId", newResearch.CategoryId);
            // console.log(newResearch);
            this.postResearch(formData)
        },
    },
    computed: {
        ...mapState(categoryStore, ["categories"]),
    },
    created() {
        this.getAllCategory();
    },
};
</script>

<style scoped>
body {
    display: flex;
}
body form {
    transform: translate(20%, 0%);
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
