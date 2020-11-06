<template>
    <div>
        <h1>{{message}}</h1>
     
    </div>
</template>
<script>

export default{
    
    data:function(){
        return {
            message:"App Footer!!!!"
        }
    },
    beforeCreate: function(){
        console.log('in beforeCreate lifecycle hook')
        //alert('beforeCreate')
    },
    created: function(){
        console.log('in created lifecycle hook')
        //alert('created')
    },
    beforeMount: function(){
         console.log('in beforeMount lifecycle hook')
        //alert('beforeMount')
    },
    mounted: function(){
         console.log('in mounted lifecycle hook')
        //alert("mounted")
    }
}

</script>
<style scoped>
    h1{
        color: pink;
    }
</style>