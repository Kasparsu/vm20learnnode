import Vue from 'vue/dist/vue.common.dev';

new Vue({
    el: "#app",
    data: {
        message: "hello vue!"
    },
    methods: {
        empty(){
            this.message = '';
            alert('Deleted message!');
        }
    }
});