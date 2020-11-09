<template>
    <div>
        <h1>{{message}}</h1>
        <h4>@ {{year}} &nbsp;<button v-on:click="updateYear">Update</button> </h4>

     
    </div>
</template>
<script>

export default{
    
    data:function(){
        return {
            message:"App Footer!!!!",
            year:2020
        }
    },
    methods:{
        updateYear: function(){
            this.year = this.year + 1
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
    },
    beforeUpdate: function(){
        console.log("in beforeUpdate lifecycle hook: " + this.year)
        alert()

    },
    updated: function(){
         console.log('in updated lifecycle hook: ' + this.year)
        //alert("mounted")
    },
}

</script>
<style scoped>
    h1{
        color: pink;
    }
</style>