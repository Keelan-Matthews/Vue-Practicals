<!-- Keelan Matthews 21549967 -->
<template>
    <div @click="setActive(category.id)" class="category">
        <h2>{{category.title}} Tasks</h2>
        <div class="all-tasks">
            <TaskItem v-for="(task,index) in category.task"
                      :key="index"
                      :task="task"
                      :categoryIndex="category.id" />
        </div>
    </div>
</template>

<script>
    import TaskItem from './TaskItem.vue'
    import { store } from '../store.js'

export default {
    name: 'TaskCategory',
    components: {
        TaskItem
    },
    props: ['category'],
    methods: {
        setActive(categoryId){
            store.setActiveCategory(categoryId);
        }
    }
}
</script>

<style scope>
    .category {
        background-color: #ebebeb;
        width: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px 0;
        margin: 20px 10px;
        border-radius: 10px;
        cursor: pointer;
    }

    .category:hover {
        border: 2px solid black;
    }
</style>