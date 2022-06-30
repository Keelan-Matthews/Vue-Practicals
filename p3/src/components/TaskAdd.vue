<!-- Keelan Matthews 21549967 -->
<template>
    <div class="task-add">
        <div class="form">
            <p>Adding task to <span>{{getCategory}}</span></p>
            <input type="text" v-model="inputTask" class="input-el" placeholder="Add something..."/>
        </div>
        <div class="buttons">
            <button @click="addCategory(inputTask)" class="category-button">Add Category</button>
            <button @click="addTask(inputTask)" class="task-button">Add Task</button>
        </div>
        <small>* hover over tasks to edit</small>
        <small>* delete updates data.js, but doesn't reflect on the UI for some reason</small>
    </div>
</template>

<script>
    import { store } from '../store.js'

export default {
    name: 'TaskAdd',
    methods: {
       addTask(task) {
           store.addTask(task);
           this.inputTask = '';
       },  
       addCategory(category) {
           store.addCategory(category);
       }
    },
    computed:{
        getCategory(){
            return store.getActiveCategory().title;
        }
    },
    data() {
        return {
            inputTask: ''
        }
    }
}
</script>

<style scope>
    .task-add {
        background-color: #ebebeb;
        width: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        padding: 30px;
        margin-bottom: 30px;
    }

    .task-add button {
        width: 150px;
        height: 40px;
        border-radius: 7px;
        border: 0;
        margin: 10px;
        font-weight: bold;
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    .task-add button:hover {
        transform: scale(1.1);
    }

    .input-el {
        width: 420px;
        height: 50px;
        border-radius: 10px;
        border: 0;
        font-size: 19px;
        padding-left: 20px;
    }

    .form {
        text-align: center;
    }

    .form span {
        background-color: #9bb9bd;
        color: #495a5c;
        border-radius: 7px;
        padding: 5px;
    }

    .category-button {
        background-color: #9bb9bd;
        color: #495a5c;
    }

    .task-button {
        background-color: #42c982;
        color: #236e46;
    }
</style>