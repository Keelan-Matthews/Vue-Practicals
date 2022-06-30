<template>
  <div id="main">
    <h1>What are your upcoming tasks?</h1>
    <TaskAdd />
    <TaskHolder />
  </div>
</template>

<script>
import TaskHolder from './components/TaskHolder.vue'
import TaskAdd from './components/TaskAdd.vue'

export default {
  name: 'App',
  components: {
    TaskHolder,
    TaskAdd
  }
}
</script>

<style>
  #main { 
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  * {
    font-family: Helvetica, Arial, sans-serif;
    box-sizing: border-box;
  }
</style>
