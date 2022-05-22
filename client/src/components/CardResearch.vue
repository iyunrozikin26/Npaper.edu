<template>
    <div class="card row-4 m-2" style="width: 15rem">
        <figure>
            <blockquote class="blockquote row d-flex justify-content-center">
                <p>{{ research.title }}</p>
                <img :src="research.User.Profile.image" class="card-img-top" style="width: 5rem" />
            </blockquote>
            <figcaption class="blockquote-footer">
                <cite title="Source Title">by. {{ research.User.Profile.firstName + research.User.Profile.lastName }} - {{ research.User.Profile.university }}</cite>
            </figcaption>
            <figcaption class="blockquote-footer">abstract: {{ research.abstract }} <cite title="Source Title"></cite></figcaption>
        </figure>
        <a href="#" class="btn btn-primary mb-2" @click.prevent="details(research)"><i class="fa fa-search"></i></a>
        <!-- <a href="#" class="btn btn-primary" ><i class="fa fa-edit"></i></a> -->
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { userStore } from "../stores/user";
import { researchStore } from "../stores/research";
export default {
    name: "CardResearch",
    props: ["research"],
    computed: {
        ...mapState(userStore, ["role_user", "id_user"]),
    },
    methods: {
        ...mapActions(researchStore, ["getDetails"]),
        details(research) {
            // console.log(research);
            this.getDetails(research)
        },
    },
};
</script>

<style></style>
