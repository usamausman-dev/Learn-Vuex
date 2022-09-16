<template>
  <div>
    <input type="text" placeholder="enter color code..." v-model="colorCode" />
  </div>
</template>

<script>
export default {
  name: "Colorcode",
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newVal) {
        this.$store.dispatch("setColorCode", newVal);
      },
    },
  },
};
</script>

<style>
</style>