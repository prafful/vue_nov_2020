<template>
    <div>
        <h1>{{message}}</h1>
        <p>{{newsitem}}</p>
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
            message: "News"
        }
    }
}
</script>

<style scoped>

</style>