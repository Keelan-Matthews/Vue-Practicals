<!-- Keelan Matthews 21549967-->
<template>
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="416" height="383.9" viewBox="0 0 416 383.9" @click="decFunc()">
    <path class="cls-1" d="M266,0H94c-15.7,0-28.6,9.6-34.2,23.4L2.6,158.8c-1.7,4.4-2.6,9-2.6,14v38.6c0,21.1,17,44.6,37.8,44.6h119.3l-18,81.5-.6,6c0,7.9,3.2,15.1,8.3,20.3l20,20.1,126.2-127.2c6.8-6.9,11-16.5,11-27.1V37.6c0-21.1-17.2-37.6-38-37.6Zm86,0h64V224h-64V0Z"/>
  </svg>
</template>

<script>
export default {
  name: 'DecrementButton',
  props: {
    counter: Number,
    decFunc: Function,
    clicked: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  svg {
    width: 200px;
    transform: translateY(57px);
    transition: 1s ease;
  }

  svg:hover {
    transform: scale(1.07) translateY(57px);
  }

  svg:hover path {
    fill: #708079;
  }

  .cls-1 {
    fill: #999;
  }
</style>