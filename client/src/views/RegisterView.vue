<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <form @submit.prevent="registerHandler" class="box">
                        <h1>Register</h1>
                        <p class="text-muted">Please enter your registration!</p>
                        <input type="text" v-model="username" placeholder="Username" />
                        <input type="text" v-model="email" placeholder="Email" />
                        <input type="password" v-model="password" placeholder="Password" />
                        <input type="text" v-model="firstName" placeholder="first name" />
                        <input type="text" v-model="lastName" placeholder="last name" />
                        <input type="text" v-model="studentID" placeholder="student ID" />
                        <input type="text" v-model="university" placeholder="University" />
                        <input type="text" v-model="studyProgram" placeholder="study program" />
                        <input type="text" v-model="image" placeholder="image url" />
                        <input type="text" v-model="phoneNumber" placeholder="phone number" />
                        <input type="text" v-model="address" placeholder="address" />
                        <input type="submit" name="" value="Register" href="#" />
                        <p>
                            Yey... you've an account, Let's <router-link to="/login"><a href="#">login</a></router-link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { userStore } from "../stores/user";
import { mapActions } from "pinia";

export default {
    name: "RegisterView",
    data() {
        return {
            username: "",
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            studentID: "",
            university: "",
            studyProgram: "",
            image: "",
            phoneNumber: "",
            address: "",
        };
    },
    methods: {
        ...mapActions(userStore, ["register"]),
        registerHandler() {
            const newUser = {
                username: this.username,
                email: this.email,
                password: this.password,
                firstName: this.firstName,
                lastName: this.lastName,
                studentID: this.studentID,
                university: this.university,
                studyProgram: this.studyProgram,
                image: this.image,
                phoneNumber: this.phoneNumber,
                address: this.address,
            };
            this.register(newUser);
        },
    },
};
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: linear-gradient(to right, #b92b27, #1565c0);
}

.card {
    margin-bottom: 20px;
    border: none;
    /* border-radius: 15px; */
}

.box {
    width: 400px;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    background: #363535;
    text-align: center;
    transition: 0.25s;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 15px;
    /* padding-bottom: 20px; */
}

.box input[type="text"],
.box input[type="password"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 10px 10px;
    width: 250px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
}

.box h1 {
    color: white;
    text-transform: uppercase;
    font-weight: 500;
}

.box input[type="text"]:focus,
.box input[type="password"]:focus {
    width: 300px;
    border-color: #2ecc71;
}

.box input[type="submit"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #2ecc71;
    padding: 14px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
}

.box input[type="submit"]:hover {
    background: #2ecc71;
}
p {
    color: #fff;
}
ul.social-network {
    list-style: none;
    display: inline;
    margin-left: 0 !important;
    padding: 0;
}

ul.social-network li {
    display: inline;
    margin: 0 5px;
}

.social-network a.icoFacebook:hover {
    background-color: #3b5998;
}

.social-network a.icoTwitter:hover {
    background-color: #33ccff;
}

.social-network a.icoGoogle:hover {
    background-color: #bd3518;
}

.social-network a.icoFacebook:hover i,
.social-network a.icoTwitter:hover i,
.social-network a.icoGoogle:hover i {
    color: #fff;
}

a.socialIcon:hover,
.socialHoverClass {
    color: #44bcdd;
}

.social-circle li a {
    display: inline-block;
    position: relative;
    margin: 0 auto 0 auto;
    border-radius: 50%;
    text-align: center;
    width: 50px;
    height: 50px;
    font-size: 20px;
}

.social-circle li i {
    margin: 0;
    line-height: 50px;
    text-align: center;
}

.social-circle li a:hover i,
.triggeredHover {
    transform: rotate(360deg);
    transition: all 0.2s;
}

.social-circle i {
    color: #fff;
    transition: all 0.8s;
    transition: all 0.8s;
}
</style>
