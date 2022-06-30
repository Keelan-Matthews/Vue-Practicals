<!-- Keelan Matthews 21549967-->
<template>
  <div class="main">
    <div class="container">
      <CountDisplay :countDisplay="counter" :clicked="clicked"/>
      <div class="buttons">
        <IncrementButton :counter="counter" :incFunc="increment" :clicked="clicked"/>
        <DecrementButton :counter="counter" :decFunc="decrement" :clicked="clicked"/>
      </div>
    </div>
  </div>
</template>

<script>
import CountDisplay from './components/CountDisplay.vue'
import IncrementButton from './components/IncrementButton.vue'
import DecrementButton from './components/DecrementButton.vue'

export default {
  name: 'App',
  components: {
    IncrementButton,
    DecrementButton,
    CountDisplay
  },
  data(){
    return{
      counter: 0,
      clicked: true
    }
  },
  methods:{
    increment(){
      this.counter++;
      this.clicked = true;
    },
    decrement(){
      this.counter--;
      this.clicked = false;
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .main {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
