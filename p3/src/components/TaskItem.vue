<!-- Keelan Matthews 21549967 -->
<template>
    <div class="task">
        <input ref="details" type="text" :class="editing ? 'task-input edit' : 'task-input'" :value="this.taskDescription"/>
        <div :class="editing ? 'edit-buttons hide' : 'edit-buttons'">
            <span id="edit" @click="editTask()">Edit</span>
            <span id="delete" @click="deleteTask(task)">Delete</span>
        </div>
        <span id="update" :class="editing ? '' : 'update-hide'" @click="updateTask()">Done</span>
    </div>
</template>

<script>
    import { store } from '../store.js'
    console.log(store.state.data);

export default {
    name: 'TaskItem',
    props: ['task','categoryIndex'],
    methods:{
        deleteTask(task){
            store.setActiveCategory(this.categoryIndex);
            store.deleteTask(task);
            console.log(store.state.data);
        },
        editTask(){
            store.setActiveCategory(this.categoryIndex);
            this.taskIndex = store.getIndex(this.task.details);
            console.log(this.taskIndex);
            this.editing = true;
        },
        updateTask() {
            this.editing = false;
            const task = this.$refs.details.value;
            this.taskDescription = task;
            store.updateTask(task, this.taskIndex);
            console.log(store.state.data);
        }
    },
    data() {
        return {
            taskDescription: this.task.details,
            editing: false,
            taskIndex: 0
        }
    }
}
</script>

<style scope>
    .task {
        display: flex;
        width: 400px;
        background-color: white;
        justify-content: space-between;
        padding: 20px;
        margin: 10px 0;
        align-items: center;
        border-radius: 10px;
        animation: entrance 1s ease;
    }

    @keyframes entrance {
        from { 
            opacity: 0;
            transform: translateX(-150px) scale(0.5);
        }
        to { 
            opacity: 1; 
            transform: translateX(0) scale(1);
        } 
    }

    .task-input {
        height: 30px;
        font-size: 19px;
        border: 0;
        pointer-events: none;
        width: 70%;
    }

    .task-input.edit {
        border-bottom: 1px solid grey;
        pointer-events: all;
    }

    .task div {
        width: 80px;
        display: flex;
        justify-content: space-between;
    }

    .edit-buttons {
        opacity: 0;
        transition: opacity 0.3s ease;
        cursor: pointer;
    }

    .edit-buttons.hide {
        display: none;
    }

    .update-hide {
        display: none;
    }

    .task:hover .edit-buttons {
        opacity: 1;
    }

    #edit:hover {
        color: #9bb9bd;
    }

    #delete:hover {
        color: #db5a5a;
    }

    #update:hover {
        color: #42c982;
    }
</style>