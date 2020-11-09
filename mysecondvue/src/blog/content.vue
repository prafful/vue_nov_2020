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
        <div>Users:</div>
        <ol>
            <li v-for="user in users" v-bind:key="user.id">
                {{user.name}}
            </li>
        </ol>
        <div>Blogs:</div>
        <br>
         <div>
            <button>Add Blog</button>
         
        </div>
        <ol class="blogs">
            <li class="blogitem" v-for="blog in blogs" v-bind:key="blog.id">
                {{blog.title}}
                <br>
                <span class="blogbody">
                    {{blog.body}}
                </span>
                <div>
                    <button>Edit</button>
                    &nbsp;
                    <button>Delete</button>
                </div>
             
            </li>
        </ol>
        
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

            ],
            users:[],
            blogs:[]
        }
    },
    mounted: function(){
        this.$http.get("https://jsonplaceholder.typicode.com/users")
                    .then(response=>{
                        console.log(response)
                        console.log(response.body)
                        console.log(response.data)
                        this.users = response.data
                    })
                    .catch(error=>{
                        console.log(error)
                    })
        this.$http.get("http://localhost:1234/blogs")
                .then(response=>{
                    console.log(response)
                    console.log(response.body)
                    console.log(response.data)
                    this.blogs = response.data
                })
                .catch(error=>{
                    console.log(error)
                })            
    }
}

</script>
<style scoped>
    h1{
        color: brown;
    }
.blogs{
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    color: red;
}

.blogitem{
    text-align: center;
    border: 1px dashed darksalmon;
    flex-basis: 200px;
    font-weight: bold;
    font-size: 22px;
    margin: 10px;
}

.blogbody{
    color: teal;
    font-weight: normal;
    font-size: 18px;
    padding: 10px ;
    margin: 10px;
}


</style>