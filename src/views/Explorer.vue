<template>
  <div class="home">
    <app-header/>

    <div class="cite mt-3 mb-5 flex-center">
      <p>“Com grandes poderes, vêm grandes responsabilidades.” — Tio Ben</p>
    </div>

    <app-grid/>
  </div>
</template>

<script>
import Grid from "@/components/Grid.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Explorer",
  components: {
    "app-grid": Grid,
    "app-header": Header
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
}
</style>
