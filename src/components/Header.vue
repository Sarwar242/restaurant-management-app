<template>
    <div class="header">
        <a href="home">Home</a>
        <a href="add">Add</a>
        <a href="update">Update</a>
        <a href="#" v-on:click="logOut">Logout</a>
    </div>
</template>
<script>

import axios from 'axios';
export default{
    name: "HeadeR",

    methods:{
        async logOut(){
            const user = JSON.parse(localStorage.getItem("user")); 
            // console.log(user.token);
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://127.0.0.1:8000/api/logout',
                headers: { 
                    'Accept': 'application/json', 
                    'Authorization': `Bearer ${user.token}`
                }
                };

            let res2= await axios(config).then(r => r.data).catch(e => e.response);
            console.log(res2);
            if(res2.success){
                localStorage.clear();
                this.$router.push({name:'login'});
            }else{
                console.log("Response", res2);
                localStorage.clear();
                // this.$router.push({name:'login'});
            }
        }
    }
}
</script>

<style scoped>
.header {
    background-color: #333;
    overflow: hidden;
}
.header a{
    float: left;
    color: #ddfcdd;
    text-align: center;
    padding: 16px 14px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 4px;
}
.header a:hover{
    background-color: #ddd;
    color: #222;
}
</style>