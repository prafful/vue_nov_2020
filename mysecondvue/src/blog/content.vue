<template>
    <div>
        <div>
            <h1>{{message}}</h1>
            <ol>
                <li v-for="friend in friends" v-bind:key="friend.id">
                    {{friend.name}}
                </li>
            </ol>
        </div>
        <div></div>
    </div>
</template>
<script>

export default{
    
    data:function(){
        return {
            message:"App Content!!!!",
            friends:[
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
    h1{
        color: brown;
    }
</style>