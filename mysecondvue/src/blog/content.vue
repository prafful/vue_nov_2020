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
            <button v-on:click="toggleDisplayAddBlog">Add Blog</button>
            {{displayAddBlog}}
        </div>
        <br>
        <!--Add blog -->
        <div v-if="displayAddBlog">
            <div>
                <form >
                    <label >Title: </label>
                    <input type="text" v-model="blog.title">
                    <br>
                    <label >Body:</label>
                    <textarea cols="30" rows="10" v-model="blog.body"></textarea>
                    <br>
                    <button v-on:click.prevent="addBlog">Add</button>
                </form>
            </div>
            <div>
                <b>Title: </b><p>{{blog.title}}</p>
                <b>Body: </b><p>{{blog.body}}</p>
            </div>
        </div>
        <!--Edit blog -->
         <div v-if="displayEditBlog">
            <div>
                <form >
                    <label>Id: </label>
                    <input type="text" v-model="editblog.id" readonly>
                    <br>
                    <label >Title: </label>
                    <input type="text" v-model="editblog.title">
                    <br>
                    <label >Body:</label>
                    <textarea cols="30" rows="10" v-model="editblog.body"></textarea>
                    <br>
                    <button v-on:click.prevent="editBlog">Update</button>
                </form>
            </div>
            <div>
                <b>Title: </b><p>{{editblog.title}}</p>
                <b>Body: </b><p>{{editblog.body}}</p>
            </div>
        </div>
        <ol class="blogs">
            <li class="blogitem" v-for="blog in blogs" v-bind:key="blog.id">
                {{blog.id}}#{{blog.title}}
                <br>
                <span class="blogbody">
                    {{blog.body}}
                </span>
                <div>
                    <button v-on:click="toggleDisplayEditForm(blog.id)">Edit</button>
                    &nbsp;
                    <button v-on:click="deleteBlog(blog.id)">Delete</button>
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
            blogs:[],
            displayAddBlog: false,
            displayEditBlog: false,
            blog:{
                id:0,
                title:'',
                body:''
            },
            editblog:{
                id:0,
                title:'',
                body:''
            }
        }
    },
    methods:{
        toggleDisplayAddBlog: function(){
            this.displayAddBlog = !this.displayAddBlog
        },
        addBlog: function(){
            console.log("Add blog by making call to rest api!!!!")
            this.$http.post("http://localhost:1234/blogs", this.blog)
                    .then(response=>{
                        console.log(response)
                        this.displayAddBlog = false
                        this.blog={
                                id: 0,
                                title:'',
                                body:''
                            }
                        this.getAllBlogs()
                    })
                    .catch(error=>{
                        console.log(error)
                    })
        },
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
        deleteBlog: function(id){
            console.log("Delete blog with id: " + id)
            this.$http.delete("http://localhost:1234/blogs" + "/" + id)
                        .then(response=>{
                            console.log(response)
                            this.getAllBlogs()
                        })
                        .catch(error =>{
                            console.log(error)
                        })
        },
        toggleDisplayEditForm: function(id){
            if(!this.displayEditBlog){
                this.displayEditBlog = !this.displayEditBlog
            }
            
            console.log("Edit blog is " + this.displayEditBlog + " for id: " + id)
            this.$http.get("http://localhost:1234/blogs" + "/" + id)
                        .then(response =>{
                            console.log(response)
                            this.editblog = response.body
                        })
                        .catch(error=>{
                            console.log(error)
                        })
            
        },
        editBlog: function(){
            var tempBlogItem = {
                "title": this.editblog.title,
                "body": this.editblog.body
            }
            console.log("Edit blog with id: " + this.editblog.id)
            this.$http.put("http://localhost:1234/blogs" + "/" + this.editblog.id, tempBlogItem)
                        .then(response =>{
                            console.log(response)
                            this.editblog={
                                id: 0,
                                title:'',
                                body:''
                            }
                            this.displayEditBlog = false
                            this.getAllBlogs()
                        })
                        .catch(error=>{
                            console.log(error)
                        })
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