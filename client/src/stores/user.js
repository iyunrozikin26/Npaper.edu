import { defineStore } from "pinia";
import axios from "axios";

export const userStore = defineStore({
    id: "userStore",
    state: () => ({
        serverUrl: "http://localhost:3000",
        access_token: localStorage.getItem("access_token"),
        role_user: localStorage.getItem("role"),
        id_user: localStorage.getItem("id"),
    }),
    actions: {
        logOut() {
            localStorage.clear();
            this.router.push({ name: "login" });
            this.access_token = "";
        },
        login(user) {
            axios({
                method: "post",
                url: this.serverUrl + "/users/login",
                data: user,
            })
                .then(({ data }) => {
                    // console.log(data);
                    this.setLocalStorage(data);
                    // localStorage.setItem("access_token", data.access_token);
                    // localStorage.setItem("username", data.username);
                    // localStorage.setItem("role", data.role);
                    // localStorage.setItem("id", data.id);
                    // this.access_token = localStorage.access_token;
                    // this.role_user = localStorage.role;
                    // this.id_user = localStorage.id;
                    // this.router.push({ name: "home" });
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        setLocalStorage(user) {
            localStorage.setItem("access_token", user.access_token);
            localStorage.setItem("username", user.username);
            localStorage.setItem("role", user.role);
            localStorage.setItem("id", user.id);
            this.access_token = localStorage.access_token;
            this.role_user = localStorage.role;
            this.id_user = localStorage.id;
            this.router.push({ name: "home" });
        },
        async googleLogin(id_token) {
            try {
                const logUser = await axios({
                    method: "post",
                    url: this.serverUrl + "/users/google-login",
                    data: {
                        id_token,
                    },
                });
                this.setLocalStorage(logUser.data);
                // this.popUp(logUser.data);
            } catch (error) {
                console.log(error);
            }
        },
        register(newUser) {
            axios({
                method: "POST",
                url: this.serverUrl + "/users/register",
                data: newUser,
            })
                .then(({ data }) => {
                    console.log(data);
                    this.router.push({ name: "login" });
                    // const Toast = Swal.mixin({
                    //     toast: true,
                    //     position: "top-right",
                    //     iconColor: "white",
                    //     customClass: {
                    //         popup: "colored-toast",
                    //         color: "blue",
                    //     },
                    //     showConfirmButton: false,
                    //     timer: 3000,
                    //     timerProgressBar: true,
                    // });
                    // Toast.fire({
                    //     icon: "success",
                    //     title: `Success to Register`,
                    //     background: "rgb(110, 228, 120)",
                    // });
                })
                .catch((err) => {
                    console.log(err.response.data);
                    // Swal.fire({
                    //     icon: "error",
                    //     title: "Oops...",
                    //     text: err.response.data.map((el) => {
                    //         return el;
                    //     }),
                    // });
                });
        },
    },
});
