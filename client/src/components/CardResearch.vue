<template>
    <div class="card col-4 m-2" style="width: 18rem">
        <!-- <img src="https://cdn.dribbble.com/users/1282645/screenshots/6599535/2019-06-08_08.53.57_1.jpg?compress=1&resize=800x600" class="card-img-top" /> -->
        <div class="card-body text-left">
            <h5 class="card-title">{{ research.title }}</h5>
            <h5 class="card-title">{{ research.title }}</h5>
            <h5 class="card-title">{{ research.title }}</h5>
            <a href="#" class="btn btn-primary"><i class="fa fa-search"></i></a>
            <a href="#" class="btn btn-primary" v-if="roleUser === 'admin' || research.UserId === idUser"><i class="fa fa-edit"></i></a>
        </div>
    </div>
</template>

<script>
import {mapState} from 'pinia'
import {userStore} from '../stores/user'
export default {
    name: "CardResearch",
    props: ["research"],
    computed:{
...mapState(userStore, ["roleUser", "idUser"])
    }
};
</script>

<style></style>
