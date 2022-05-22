<template>
    <div>
       <h3>ini details</h3>
    </div>
</template>

<script>
import { mapState } from "pinia";
import { researchStore } from "../stores/research.js";
export default {
    name: "DetailResearch",
    computed: {
        ...mapState(researchStore, ["research"]),
    },
};
</script>

<style></style>
