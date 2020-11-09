import Vue from "vue"
import VueResource from "vue-resource"
import RootC from "./rootcomponent/approot.vue"

//Initialize Vue Instance to use VueResource for consuming response from REST API
Vue.use(VueResource)

new Vue({
    el:"#vueapp",
    render: p=>p(RootC)
})