<template>
    <div>
        <h1>{{message}}</h1>
        <h2>{{score}}</h2>
        <appheader></appheader>
        <appcontent></appcontent>
        <appfooter></appfooter>
   
    </div>
</template>
<script>

import Content from "../blog/content.vue";
import Footer from "../blog/footer.vue";
import Header from "../blog/header.vue";


export default{
    components:{
        appheader: Header,
        appfooter: Footer,
        appcontent: Content
    },
    data:function(){
        return {
            message:"Welcome to root Component in Vue!!!!",
            score: 80
        }
    }
}

</script>
<style>

</style>