<template>
  <div class="about">
    <app-grid/>
  </div>
</template>

<script>
import Grid from "@/components/Grid.vue";

export default {
  name: "Favorites",
  components: {
    "app-grid": Grid
  }
}
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
}
</style>