import { defineStore } from "pinia";
import axios from "axios";

export const researchStore = defineStore({
    id: "researchStore",
    state: () => ({
        serverUrl: "http://localhost:3000",
        researchs: [],
        research: {},
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
        thirdAPI() {
            axios({
                method: "get",
                url: "https://share.osf.io/api/v2/normalizeddata/",
            })
                .then(({ data }) => {
                    console.log(data);
                    // this.researchs = data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getDetails(id) {
            // console.log(id, "ini stores");
            axios({
                method: "get",
                url: `${this.serverUrl}/research/read/${id}`,
                headers: {
                    access_token: localStorage.access_token,
                },
            })
                .then(({ data }) => {
                    // console.log(data);
                    this.research = data;
                    this.router.push(`/detailResearch/${data.id}`);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        postResearch(data) {
            axios({
                method: "post",
                url: this.serverUrl + "/research",
                headers: {
                    access_token: localStorage.access_token,
                },
                data,
            })
                .then(({ data }) => {
                    console.log(data);
                    this.router.push("/");
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getFile(file) {
            // this.router.push(`/detailResearch/${file.id}`);
            // this.router = this.serverUrl+`/${file.document}`
            console.log("ini get File");

            axios({
                url: this.serverUrl + `/${file.document}`,
            })
                .then(({ data }) => {
                    console.log(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
});
