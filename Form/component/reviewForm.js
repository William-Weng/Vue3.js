myApp.component("review-form", {
    template: /*html*/
    `
    <form class="review-form" @submit.prevent="refresh">
        <h3>意見箱：</h3>
        <label for="name">姓名：</label>
        <input id="name" v-model="name">

        <label for="review">評論:</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">評比：</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <input class="button" type="submit" value="送出" />
    </form>
    `,
    data() {
        return {
            name: "",
            review: "",
            rating: null,
        }
    },
    methods: {
        refresh() {
        
            if (this.name === "") { alert("請輸入姓名"); return; }
            if (this.review === "") { alert("請填入評論"); return; }
            if (this.rating === null) { alert("請選擇評比"); return; }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
            }

            this.$emit('review-submitted', productReview)
            this.clearData()
        },
        clearData() {
            this.name = ""
            this.review = ""
            this.rating = null
        },
    }
})