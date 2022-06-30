<!-- Keelan Matthews 21549967-->
<template>
  <p :class="[clicked ? 'green' : 'red']">{{countDisplay}}</p>
</template>

<script>
export default {
  name: 'CountDisplay',
  props: {
    countDisplay: Number,
    colour: String,
    clicked: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .green {
    color: #32bf84;
  }
  .red {
    color: #fc5364;
  }

  p {
    font-size: 200px;
    font-family: "Helvetica", sans-serif;
    font-weight: bold;
    margin: 0;
  }
</style>