<template>
    <div>
        <h1>{{message}}</h1>
        <appNews 
            newsitem="Today is day 06 with Vue!"
            v-bind:somedetails="details">
        </appNews>
    </div>
</template>

<script>
import News from './News'

export default {
    components:{
        appNews: News
    },
    data: function(){
        return {
            message: "Home",
            details:[
                {
                    id:1,
                    name:'OBB',
                    location:'Chennai'
                },
                {
                    id:2,
                    name: "CAS",
                    location:"Chennai"
                },
                {
                    id:3,
                    name:"OWIOH",
                    location:"Japan"
                },
                {
                    id:4,
                    name:"BNP",
                    location:"Mumbai"
                }

        ]
        }
    }
}
</script>

<style scoped>

</style>