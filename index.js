import Vue from 'vue/dist/vue.common.dev';

import ItemList from './ItemList.vue';
import App from './App.vue';
Vue.component('item-list', ItemList);
Vue.component('app', App);
new Vue({
    el: "#app",
    data: {
        message: "hello vue!",
        clicks: 0,
        items: [
            {name:"Piim", isDone: false, id: 0},
            {name:"Viin", isDone: true, id: 1},
            {name:"Happukurk", isDone: false, id: 2},
        ],
        newItem: ''
    },
    methods: {
        empty(){
            this.message = '';
        },
        addItem(){
            if(this.newItem.trim() != '') {
                this.items.push({name:this.newItem, isDone:false, id: this.items.length});
            }
            this.newItem = '';
        }
    },
    computed: {
        reverseMessage(){
            return this.message.split('').reverse().join('');
        },
        doneItems(){
            return this.items.filter(item => item.isDone);
        },
        notDoneItems(){
            return this.items.filter(item => !item.isDone);
        }
    }
});