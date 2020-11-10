<template>
    <div>
       <ol>
           <li>
               <router-link to='/' exact>Home</router-link>
           </li>
             <li>
               <router-link to='/addblog' exact>Add Blog</router-link>
           </li>
             <li>
               <router-link to='/showblogs' exact>Show Blogs</router-link>
           </li>
       </ol>
    </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>

</style>