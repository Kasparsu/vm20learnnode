import Vue from 'vue/dist/vue.common.dev';

new Vue({
    el: "#app",
    data: {
        message: "hello vue!",
        clicks: 0,
        items: [
            "Piim",
            "Viin",
            "Hapukurk",
        ],
        newItem: ''
    },
    methods: {
        empty(){
            this.message = '';
        }
    },
    computed: {
        reverseMessage(){
            return this.message.split('').reverse().join('');
        }
    }
});