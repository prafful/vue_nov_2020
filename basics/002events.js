var one = new Vue({
    el:"#vueapp",
    data:{
        score: 0
    },
    methods:{
        increment: function(event){
            console.log(event)
            this.score++
        },
        decrement: function(event){
            console.log(event)
            this.score--
        }
    }
})