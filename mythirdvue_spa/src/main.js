import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import Home from "./components/Home"
import AddBlog from "./components/AddBlog"
import ShowBlogs from "./components/ShowBlogs"
import EditBlog from "./components/EditBlog"

import VueResource from "vue-resource"

//Initialize Vue Instance to use VueResource for consuming response from REST API
Vue.use(VueResource)

Vue.use(VueRouter)

const spaRoutes = new VueRouter({
  routes:[
      {
          path:'/',
          component: Home
      },
      {
          path:'/addblog',
          component: AddBlog
      },
      {
          path: '/showblogs',
          component: ShowBlogs
      },
      {
        path: '/editblog/:blogid',
        component: EditBlog
      }
  ],
  mode:'history'
})

new Vue({
  router: spaRoutes,
  render: h => h(App),
}).$mount('#app')
