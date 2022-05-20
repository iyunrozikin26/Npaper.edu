import { defineStore } from "pinia";
import axios from "axios";

export const researchStore = defineStore({
    id: "researchStore",
    state: () => ({
        researchs: [],
        serverUrl: "http://localhost:3000",
    }),
    actions: {
        findAllResearch() {
            axios({
                method: "get",
                url: this.serverUrl + "/research",
                headers: {
                    access_token: localStorage.access_token,
                },
            })
                .then(({ data }) => {
                    console.log(data);
                    // this.count = Math.ceil(data.count / 6);
                    this.researchs = data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
});
