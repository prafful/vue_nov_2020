import Vue from "vue"
import RootC from "./rootcomponent/approot.vue";

new Vue({
    el:"#vueapp",
    render: p=>p(RootC)
})