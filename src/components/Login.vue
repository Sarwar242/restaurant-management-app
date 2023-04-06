<template>
    <img class="logo" src="../assets/logo.png">
    <h1>Login Page</h1>
    <div class="login">
        <input type="email" placeholder="Enter Email ..." v-model="form.email" >
        <input type="password" placeholder="Enter Password ..." v-model="form.password" >
        <button v-on:click="logIn">Login</button>
        <p>
            <router-link to="/signup">SignUp</router-link>
        </p>
    </div>
</template>
<script>

import axios from "axios";
export default{
    name : "LogIn",
    data(){
        return {
            "form":{
                "email": "",
                "password": ""
            } 
        }
    },mounted(){
        if (localStorage.getItem("user")) {
            this.$router.push({name:'home'});
        }
    },
    methods:{
        async logIn(){
            let res= await axios.post("http://127.0.0.1:8000/api/login",{
                email:this.form.email,
                password:this.form.password
            });

            if (res.status==200) {
                alert("Login Success!");
                localStorage.setItem("user",JSON.stringify(res.data.data));
                this.$router.push({name:'home'});
            }
            else{
                alert("Login Failure!");
                console.warn("Error:",res.errors);
            }
        }
    }
}
</script>
<style scoped>
</style>