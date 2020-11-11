<template>
    <div>
        <h1>{{message}}</h1>
        <p v-on:click="updateNews" >{{newsitem}}</p>
        <ol>
            <li v-for="detail in somedetails" v-bind:key="detail.id">
                {{detail.name}}
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    props:{
        newsitem: String,
        somedetails: Array
    },
    data: function(){
        return {
            message: "News",
          
        }
    },
    methods:{
        updateNews: function(){
            this.$emit('updatedNewsItem', "We will be concluding on day 07!!!!") 
        }
    }
}
</script>

<style scoped>

</style>