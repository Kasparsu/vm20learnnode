<template>
  <div class="modal" :class="{'is-active': active}">
        <div class="modal-background" @click="$emit('close')"></div>
        <div class="modal-content">
            <p class="image is-4by3">
                <img :src="url" alt="">
            </p>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
</template>

<script>
export default {
    props: ['active', 'url']
}
</script>

<style>

</style>