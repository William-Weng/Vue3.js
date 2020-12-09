// [vue3 Composition API 學習手冊-13 生命週期](https://ithelp.ithome.com.tw/articles/10242633)
// [Vue3 的新特性（三） —— LifeCycle Hooks](https://www.jianshu.com/p/0c41ec727513)
// [008 天絕對看不完的 Vue.js 3.0 指南](https://book.vue.tw/)
// [使用DocumentFragment來加快DOM操作速度](http://fstoke.me/blog/?p=2487)
// [How to Use Lifecycle Hooks in Vue3 – LearnVue](https://learnvue.co/2020/03/how-to-use-lifecycle-hooks-in-vue3/)
// [[筆記] 透過 Composition Events 增強非拉丁語系輸入法對輸入框的支援](https://kuro.tw/posts/2016/10/11/筆記-透過-Composition-Events-增強非拉丁語系輸入法對輸入框的支援/)
// [Day 14 - 二周目 - 從Promise 昇華到 async/await - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10201420?sc=iThelpR)
// [我知道你懂 hoisting，可是你了解到多深？](https://blog.techbridge.cc/2018/11/10/javascript-hoisting/)
// [Arrow function 解決了什麼問題？](https://askie.today/this-arrow-function-in-javascript/)
// [卡斯伯 Blog - 前端，沒有極限](https://wcc723.github.io/)
// [VSCode JS 註解就是你的文件](https://wcc723.github.io/development/2020/10/13/vscode-intellisense/)
// [pjax 和 ajax 的區別](https://www.itread01.com/content/1541151385.html)
// [Destructuring - 解構賦值 - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
// [Day 08: ES6篇 - Destructuring Assignment(解構賦值)](https://ithelp.ithome.com.tw/articles/10185430)
// [named import - import - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/import)
// [模組化 (1) - Export / Import](https://medium.com/@jedy05097952/模組化-1-es6-export-import-2df769cbd81b)
// [初探 Vue 3.0 Function-based API](https://kuro.tw/posts/2019/08/06/初探-Vue-3-0-Function-based-API/)
// import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onErrorCaptured } from `vue`
const { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onErrorCaptured } = Vue;

const myApp = Vue.createApp({
    data() {
        return {
            imageIndex: 0,
            images: [
                "./assets/images/airpods-max-select-green-202011.png",
                "./assets/images/airpods-max-select-pink-202011.png",
                "./assets/images/airpods-max-select-skyblue-202011.png",
            ],
            reviews: [],
        }
    },
    methods: {
        addReview(review) { this.reviews.push(review) }
    },
    computed: {
        image() { return this.images[this.imageIndex] }
    },
    beforeCreate: function () { console.log('(舊) beforeCreate => 元件實體剛被建立，屬性計算之前') },
    created: function () { console.log('(舊) created => 元件實體已建立，屬性已綁定，但 DOM 還沒生成') },
    beforeMount: function () {console.log('(舊) beforeMount => 模板 (template) 編譯或掛載至 HTML 之前') },
    mounted: function () { console.log('(舊) mounted => 模板 (template) 編譯或掛載至 HTML 之後') },
    beforeUpdate: function () { console.log('(舊) beforeUpdate => 元件被更新之前') },
    updated: function () { console.log('(舊) updated => 元件被更新之後') },
    beforeUnmount: function () { console.log('(舊) beforeUnmount => 移除 vue instance 之前') },
    unmounted: function () { console.log('(舊) unmounted => 移除 vue instance 之後') },
    setup(props, context) {
        onBeforeMount(() => console.log(`setup() => (新) onBeforeMount`)),
        onMounted(() => {
            console.log(`setup() => (新) onMounted`)

            // console.log(props)
            // console.log(context.attrs)
            // console.log(context.slots)
            // console.log(context.emit)
        }),
        onBeforeUpdate(() => console.log(`setup() => (新) onBeforeUpdate`)),
        onUpdated(() => { console.log(`setup() => (新) onUpdated`) }),
        onBeforeUnmount(() => console.log(`setup() => (新) onBeforeUnmount`)),
        onUnmounted(() => console.log(`setup() => (新) onUnmounted`)),
        onActivated(() => console.log(`setup() => (新) onActivated`)),
        onDeactivated(() => console.log(`setup() => (新) onDeactivated`)),
        onErrorCaptured(() => console.log(`setup() => (新) onErrorCaptured`))
    },
})



