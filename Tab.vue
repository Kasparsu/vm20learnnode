<template>
    <div class="tabs is-centered">
        <ul>
            <li 
            v-for="(item,index) in items" :key="index"
            :class="{'is-active': active == index}" @click="$emit('changed', index)">
                <router-link :to="item.link">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['active', 'items']
}
</script>

<style>

</style>