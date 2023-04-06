<template>
    <div v-if="loading" class="loader_bg">
        <div class="loader"><img src="../assets/images/loading.gif" alt="#" /></div>
    </div>
    <HeadeR />   
    <div class="content">
        <h1>Welcome to the quiz app!</h1>
    </div>
 
 
    <!-- <HomePage /> -->
</template>
<script>
import HeadeR from "./Header.vue";
// import HomePage from "./HomePage.vue";
export default{
    name: "HomE",
    components:{
        HeadeR,
        // HomePage
    },
    data(){
        return {
            loading: true,
        }
    },
    mounted(){
        setTimeout(() => this.loading=false, 2000); 
    }
}
</script>
<style scoped>
.loader_bg {
    position: fixed;
    z-index: 9999999;
    background: #fff;
    width: 100%;
    height: 100%;
}

.loader {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>