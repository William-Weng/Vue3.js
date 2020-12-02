// index.js
const myApp = Vue.createApp({
    data() {
        return {
            cart: 0,
            isPremium: true,
        }
    },
    methods: {
        updateCart() { this.cart +=1; },
    },
    computed: {
    },
})
