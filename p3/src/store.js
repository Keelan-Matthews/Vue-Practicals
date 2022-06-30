import { taskData } from './data.js';
import { reactive } from 'vue';

export const store = {
    state: {
        data: reactive(taskData),
    },
    getActiveCategory(){
        return this.state.data.find((category)=>category.active);
    },
    setActiveCategory(categoryId){
        this.state.data.map((category)=>{
            if (category.id === categoryId)
                category.active = true;
            else
                category.active = false;
        })
    },
    addTask(task){
        const currCategory = this.getActiveCategory();
        currCategory.task.push({"details":task});
    },
    addCategory(category){
        this.state.data.push({
            "id": this.state.data.length +1,
            "title": category,
            "task": [],
            "active": true
        });
    },
    deleteTask(task){
        const currCategory = this.getActiveCategory();
        const index = currCategory.task.indexOf(task);
        currCategory.task.splice(index,1);
    },
    updateTask(task, index){
        const currCategory = this.getActiveCategory();
        currCategory.task[index] = {"details:":task};
    },
    getIndex(task){
        const currCategory = this.getActiveCategory();
        
        const index = currCategory.task.findIndex(item => {
            return item.details === task;
        });

        return index;
    }
}