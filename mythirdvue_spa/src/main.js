import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import Home from "./components/Home"
import AddBlog from "./components/AddBlog"
import ShowBlogs from "./components/ShowBlogs"


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
      }
  ],
  mode:'history'
})

new Vue({
  router: spaRoutes,
  render: h => h(App),
}).$mount('#app')
