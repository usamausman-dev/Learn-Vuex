<template>
  <h3 class="squared">
    {{ $store.state.counter }} <sup>2</sup> = {{ $store.getters.squared }}
  </h3>
</template>

<script>
export default {};
</script>

<style>
</style>