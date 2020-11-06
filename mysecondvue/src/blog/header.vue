<template>
    <div>
        <h1>{{message}}</h1>
     
    </div>
</template>
<script>

export default{
    
    data:function(){
        return {
            message:"App Header!!!!"
        }
    }
}

</script>
<style scoped>
    h1{
        color: red;
    }
</style>