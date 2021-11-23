<template>
  <div class="container">
    <button class="button is-primary" @click="active=true">Click me for kitten</button>
    <button class="button is-primary" @click="active2=true">Click me for bear</button>
    <modal :active="active" @close="active=false" url="http://placekitten.com/1280/960"></modal>
    <modal :active="active2" @close="active2=false" url="http://placebear.com/1280/960"></modal>
  </div>
</template>

<script>
import Modal from './Modal.vue'
export default {
  components: { Modal },
    data(){
        return {
            active: false,
            active2: false,
        }
    }
}
</script>

<style>

</style>