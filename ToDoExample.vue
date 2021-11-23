<template>
<div>
      <input type="text" v-model="newItem" @keyup.enter="addItem">
        <button @click="addItem">Add Item</button>
        <item-list :items="items" title="All Items"></item-list>
        <item-list :items="doneItems" title="Done Items"></item-list>
        <item-list :items="notDoneItems" title="Not Done Items"></item-list>
</div>
</template>

<script>
import ItemList from './ItemList.vue';
export default {
  components: { ItemList },
    data() { 
        return {
            items: [
                {name:"Piim", isDone: false, id: 0},
                {name:"Viin", isDone: true, id: 1},
                {name:"Happukurk", isDone: false, id: 2},
            ],
            newItem: ''
        }
    },
    methods: {
        addItem(){
            if(this.newItem.trim() != '') {
                this.items.push({name:this.newItem, isDone:false, id: this.items.length});
            }
            this.newItem = '';
        }
    },
    computed: {
        doneItems(){
            return this.items.filter(item => item.isDone);
        },
        notDoneItems(){
            return this.items.filter(item => !item.isDone);
        }
    }
}
</script>

<style>

</style>