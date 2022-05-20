<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #e3f2fd">
            <div class="container-fluid">
                <h2>Npaper.edu</h2>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" v-if="access_token" @click.prevent="toHome">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" v-if="access_token" @click.prevent="toLogOut">LogOut</a>
                            <!-- <a class="nav-link" href="#" @click.prevent="toLogOut">LogOut</a> -->
                        </li>
                    </ul>
                    <a class="nav-link" href="#" v-if="!access_token" @click.prevent="toLogin"> Login</a>

                    <nav class="navbar navbar-light bg-light">
                        <div class="container-fluid" v-if="access_token">
                            <form class="d-flex" @submit.prevent="handleSearch">
                                <input class="form-control me-2" v-model="byName" type="search" placeholder="search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import { userStore } from "../stores/user";
import { mapActions, mapState } from "pinia";
export default {
    name: "NavBar",
    components: {
        HomeView,
        LoginView,
        RegisterView,
    },
    computed: {
        ...mapState(userStore, ["access_token"]),
    },
    methods: {
        ...mapActions(userStore, ["logOut"]),
        toHome() {
            this.$router.push("/");
        },
        toLogin() {
            this.$router.push("/login");
        },
        toLogOut() {
            this.logOut();
        },
    },
};
</script>

<style></style>
