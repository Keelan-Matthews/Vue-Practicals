<!-- Keelan Matthews 21549967-->
<template>
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="415.9" height="384" viewBox="0 0 415.9 384" @click="incFunc()">
    <path class="cls-1" d="M150,384h172c15.7,0,28.6-9.6,34.2-23.4l57.1-135.4c1.7-4.4,2.6-9,2.6-14v-38.6c0-21.1-17-44.6-37.8-44.6h-119.2l18-81.5,.6-6c0-7.9-3.2-15.1-8.3-20.3L249,0,123,127.3c-6.8,6.9-11,16.5-11,27.1v192c0,21.1,17.2,37.6,38,37.6h0ZM0,160H64v224H0V160Z"/>
  </svg>
</template>

<script>
export default {
  name: 'IncrementButton',
  props: {
    counter: Number,
    incFunc: Function,
    clicked: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  svg {
    width: 200px;
    transition: 1s ease;
  }

  svg:hover {
    transform: scale(1.07);
  }

  svg:hover path {
    fill: #708079;
  }

  .cls-1 {
        fill: #999;
      }
</style>