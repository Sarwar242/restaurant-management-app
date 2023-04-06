<template> 
<img class="logo" src="../assets/logo.png">
<h1>SignUp</h1>
<div class="register">
    <input type="text" placeholder="Enter Name ..." v-model="form.name" >
    <input type="email" placeholder="Enter Email ..." v-model="form.email" >
    <input type="password" placeholder="Enter Password ..." v-model="form.password" >
    <input type="password" placeholder="Confirm Password ..." v-model="form.c_password" >
    <button v-on:click="signUp">SignUp</button>
    <p>
        <router-link to="/login">Login</router-link>
    </p>
</div>
</template>
<script>
import axios from "axios";
export default{
    name : "SignUp",
    data(){
        return {
            "form":{
                "name": "",
                "email": "",
                "password": "",
                "c_password": "",
            } 
        }
    },mounted(){
        if (localStorage.getItem("user")) {
            this.$router.push({name:'home'});
        }
    },
    methods:{
        async signUp(){
            let res= await axios.post("http://127.0.0.1:8000/api/register",{
                name:this.form.name,
                email:this.form.email,
                password:this.form.password,
                c_password:this.form.c_password,
            });
            if (res.status==201) {
                alert("Signup Success!");
                localStorage.setItem("user",JSON.stringify(res.data));
                this.$router.push({name:'home'});
            }
            else{
                alert("Signup Failure!");
                console.warn("Error:",res.errors);
            }
        }
    }
}
</script>
<style scoped>
</style>