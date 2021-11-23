import Vue from 'vue/dist/vue.common.dev';

import VueRouter from 'vue-router'

Vue.use(VueRouter)


import ItemList from './ItemList.vue';
import App from './App.vue';
import ModalExample from './ModalExample.vue';
import ToDoExample from './ToDoExample.vue';
Vue.component('item-list', ItemList);
Vue.component('app', App);

let router = new VueRouter({
    routes: [
        {path: '/', component: ModalExample },
        {path: '/todo', component: ToDoExample },
    ]
})

new Vue({
    el: "#app",
    router
});