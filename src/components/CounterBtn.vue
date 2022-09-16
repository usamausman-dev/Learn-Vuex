<template>
  <div class="counterBtn">
    <button class="increment" @click="$store.dispatch('incrementCounter')">
      +
    </button>
    <button class="decrement" @click="$store.dispatch('decrementCounter')">
      -
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>