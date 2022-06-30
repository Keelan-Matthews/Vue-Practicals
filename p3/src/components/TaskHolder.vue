<!-- Keelan Matthews 21549967 -->
<template>
    <div class="container">
        <TaskCategory v-for="category in shareData.data" 
                      :key="category.id"
                      :category="category" />
    </div>
</template>

<script>
    import TaskCategory from './TaskCategory.vue'
    import { store } from '../store.js'

export default {
    name: 'TaskHolder',
    components: {
        TaskCategory
    },
    data(){
        return { 
            shareData: store.state
        }
    }
}
</script>

<style scope>
    .container {
        display: flex;
    }
</style>