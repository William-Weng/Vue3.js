myApp.component('review-list', {
    props: {
        reviewsProp: { type: Array, required: true }
    },
    template: /*html*/
    `
    <div class="review-container">
        <h3>評論：</h3>
        <ul>
            <li v-for="(review, index) in reviewsProp" :key="index">
                {{ review.name }} 給了 {{ review.rating }} 顆星的評價 <br>
                - {{ review.review }}
            </li>
        </ul>
    </div>
    `
})