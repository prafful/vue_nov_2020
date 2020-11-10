<template>
  <div id="app">
    {{message}}
    <navbar></navbar>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>

import MyNav from "./components/Navigation";

export default {
  name: 'App',
  components:{
    navbar: MyNav
  },
  data: function(){
    return {
      message: "Root Component!!!!"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
