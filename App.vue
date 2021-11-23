<template>
  <div>
    <tab :items="items" :active="active" @changed="setActive"></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import Tab from './Tab.vue'
export default {
  components: { Tab },
  data(){
    return {
      active: 0,
      items: [
        {name:'To Do Example', link: '/todo'},
        {name:'Modal Example', link: '/'},
      ]
    }
  },
  methods: {
    setActive(index){
      this.active = index;
    }
  }
}
</script>

<style>

</style>