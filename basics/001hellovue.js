var one = new Vue({
    el:"#vueapp",
    data:{
        name:"Prafful Daga",
        location:"Chennai",
        friendname:'CAS',
        friendlocation:''
    },
    methods:{
        welcome: function(){
            return this.name + ", Hello from Vue!!!! It is super easy!!!! I am from " + this.location  
        },
        message(msg){
            return "Day 01 Message: " + msg
        },
        getFriendLocation: function(){
            return "My friend is from " + this.friendlocation
        }
    }
})


var two = new Vue({
    el:"#anothervue",
    data:{
        name:"OBB"
    }
})


/* alert()
one.name="DDD"
alert()
two.name="Updated Name!!!!" */