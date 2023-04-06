<template>
<router-view></router-view>

</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
body{
  padding:0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo{
  width: 100px;
}
.login input, .register input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}
.login button, .register button{
  width: 320px;
  height: 40px;
  color: #fff;
  border: 1px solid skyblue;
  background-color: skyblue;
  cursor: pointer;
}
</style>
