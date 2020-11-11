<template>
    <div>
        <h1>{{message}} with Id: {{id}}</h1>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            message: "Edit Blog",
            id: this.$route.params.blogid
        }
    },
    created: function(){
        console.log(this.$route)
    }
}
</script>

<style scoped>

</style>