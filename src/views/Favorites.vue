<template>
  <div class="about">
    <app-grid v-bind:characters="favorites"/>
  </div>
</template>

<script>
import Grid from "@/components/Grid.vue";

//Vuex
import { mapGetters } from "vuex";

export default {
  name: "Favorites",
  components: {
    "app-grid": Grid
  },
  computed: {
    ...mapGetters(["favorites"])
  }
}
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
}
</style>