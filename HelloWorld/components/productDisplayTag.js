myApp.component("product-display-tag", {
    props: {
        premiumProps: { type: Boolean, required: true, }
    },
    template:
    /*html*/
    `
    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <!--<img v-bind:src="image"/>-->
                <img :src="image"/>
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                
                <!--style="display: none;"-->
                <p v-show="inventory > 10">✔真的有現貨</p>
                <p>運費：{{ shipping }}</p>

                <!--if else-->
                <p v-if="inventory > 10">有現貨 x {{ inventory }}</p>
                <p v-else-if="inventory <= 10 && inventory > 10">沒現貨</p>
                <p v-else>賣完了</p>

                <!--for in-->
                <ul><li v-for="detail in details">{{ detail }}</li></ul>

                <!--<div class="color-circle" v-for="variant in variants" :key="variant.id" :style="{ backgroundColor: variant.color }" @mouseover="updateImage(variant.image)"></div>-->
                <div class="color-circle" v-for="(variant, index) in variants" :key="variant.id" :style="{ backgroundColor: variant.color }" @mouseover="updateVariant(index)"></div>

                <!--<button class="button" v-on:click="cart += 1">加入購物車</button>-->
                <button class="button" :class="{ disabledButton: !inStock }" @click="addToCart">加入購物車</button>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            // 變數放這裡
            // image: "./assets/images/ipad-air-select-wifi-blue-202009.png",
            // title: "Apple iPad Air 2020",
            // inStock: false,
            // inventory: 20,
            product: "Apple iPad Air 2020",
            cart: 0,
            selectedIndex: 0,
            details: [
                "10.9 吋 Liquid Retina 顯示器",
                "64 位元 A14 仿生晶片",
                "256GB",
            ],
            variants: [
                { id: 20200901, title: "天藍色", color: "#DDE9F3", image: "./assets/images/ipad-air-select-wifi-blue-202009.png", quantity: 50, },
                { id: 20200902, title: "玫瑰金色", color: "#F6CFC7", image: "./assets/images/ipad-air-select-wifi-gold-202009.png", quantity: 10, },
                { id: 20200903, title: "綠色",  color: "#D2D9CF", image: "./assets/images/ipad-air-select-wifi-green-202009.png", quantity: 30, },
            ],
        }
    },
    methods: {
        addToCart() {
            // 產生 => @add-to-cart => 廣播 => $emit()
            this.$emit("add-to-cart")
        },
        updateVariant(index) { this.selectedIndex = index; },
    },
    computed: {
        image() { return this.variants[this.selectedIndex].image },
        inStock() { return this.variants[this.selectedIndex].quantity > 10 },
        title() { return `${this.product} - ${this.variants[this.selectedIndex].title}` },
        inventory() { return this.variants[this.selectedIndex].quantity },
        shipping() {
            /// ∵ HTML TAG裡面不能寫成 {{}}，而且isPremium不在這裡 ∴ 要自訂Attribute
            if (this.premiumProps) { return "免錢" }
            return 2.99
        },
    },
})