<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Counter />
    <Sqaured />

    <CounterBtn />
    <Colorcode />
  </div>
</template>

<script>
import { Colorcode, Counter, CounterBtn, Squared } from "../components";

export default {
  name: "HomeView",
  components: {
    Colorcode,
    Counter,
    CounterBtn,
    Squared,
  },
  
};
</script>

<style>
div {
  margin: 10px;
}

button {
  font-size: 2em;
  padding: 10px 30px;
  margin: 0 20px;
}
</style>
