import Vue from 'vue/dist/vue.common.dev';

new Vue({
    el: "#app",
    data: {
        message: "hello vue!",
        clicks: 0,
        items: [
            {name:"Piim", isDone: false},
            {name:"Viin", isDone: true},
            {name:"Happukurk", isDone: false},
        ],
        newItem: ''
    },
    methods: {
        empty(){
            this.message = '';
        },
        addItem(){
            if(this.newItem.trim() != '') {
                this.items.push({name:this.newItem, isDone:false});
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
        }
    }
});