var one = new Vue({
    el: "#vueapp",
    data:{
        friends:['obb','cas','bnp','owioh'],
        details:[
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

        ]
    },
    methods:{
        whoAmI: function(index, id){
            console.log("Edit friend with id: " + id + " and index: " + index) 
        }
    }
})