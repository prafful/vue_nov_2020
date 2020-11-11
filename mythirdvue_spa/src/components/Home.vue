<template>
    <div>
        <h1>{{message}}</h1>
        <appNews 
            v-bind:newsitem="newsitem"
            v-bind:somedetails="details"
            v-on:updatedNewsItem="newsItemUpdated($event)">
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
            newsitem:"Today is day 06 with Vue!",
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
    },
    methods:{ 
        newsItemUpdated: function(e){
            console.log(e)
            this.newsitem = e
        }
    }

}
</script>

<style scoped>

</style>