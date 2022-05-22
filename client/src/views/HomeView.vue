<template>
    <div class="row m-2 my-2" id="home-page">
        <div class="row d-flex justify-content-center" style="height: 200px">
            <CardResearch v-for="(el, i) in researchs" :key="i" :research="el"></CardResearch>
            <div class="col m-2 my-5 d-flex justify-content-left aligh-item-center">
                <!-- <a href="#" class="btn btn-primary"><i class="fa-solid fa-circle-plus"></i></a> -->
            </div>
        </div>
    </div>
</template>

<script>
import CardResearch from "../components/CardResearch.vue";
import { mapActions, mapState } from "pinia";
import { researchStore } from "../stores/research";


export default {
    name: "HomeView",
    components: {
        CardResearch,
    },
    computed: {
        ...mapState(researchStore, ["researchs"]),
    },
    methods: {
        ...mapActions(researchStore, ["findAllResearch", "thirdAPI"]),
    },
    created() {
        this.findAllResearch();
        // this.thirdAPI();
    },
};
</script>

<style></style>
