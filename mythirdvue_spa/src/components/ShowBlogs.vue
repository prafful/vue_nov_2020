<template>
    <div>
        <div>
            <h1>{{message}}</h1>
        </div>
        <div>
            <ol class="blogs">
                <li class="blogitem" v-for="blog in blogs" v-bind:key="blog.id">
                    {{blog.id}}#{{blog.title}}
                    <br>
                    <span class="blogbody">
                        {{blog.body}}
                    </span>
                    <div>
                        <router-link v-bind:to="'/editblog/'+blog.id" exact>
                            <button>Edit</button>
                        </router-link>
                        &nbsp;
                        <button v-on:click="deleteBlog(blog.id)">Delete</button>
                        &nbsp;
                        <button v-on:click="navigateNow(blog.id)">Edit New</button>
                    </div>
                
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            message: "Show Blogsss....",
            blogs:[]
        }
    },
    methods:{
        getAllBlogs: function(){
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
        },
        navigateNow: function(id){
            console.log(id)
            console.log(this.$router)
            this.$router.push({
                path:'/editblog/'+id,
                params:{blogid: id}
            })
        }

    },
    mounted: function(){
        this.getAllBlogs()           
                
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