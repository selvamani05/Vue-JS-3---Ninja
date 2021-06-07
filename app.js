const app = Vue.createApp({
    data() {
        return {
            title: "The Final Empire",
            author: "Brandon",
            age: "45"
        }
    },

    methods: {
        changeTitle(abc) {
            //this.title = "Words of Radiance!",
            this.title = abc
        }
    }

})



app.mount("#app")