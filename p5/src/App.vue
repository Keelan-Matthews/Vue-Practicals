<template>
  <div class="wrapper">
    <Post></Post>
    <Todos></Todos>
    <Users></Users>
  </div>
</template>

<script>
import Post from './components/PostComp';
import Todos from './components/TodosComp';
import Users from './components/UsersComp';

export default {
  name: 'App',
  components: {
    Post,
    Todos,
    Users
  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
  }
</style>

