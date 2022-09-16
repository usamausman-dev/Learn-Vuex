<template>
  <h1 class="counter" :style="{ color: $store.state.colorCode }">
    {{ $store.state.counter }}
  </h1>
</template>

<script>
export default {};
</script>

<style>
</style>