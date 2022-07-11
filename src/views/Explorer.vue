<template>
  <div class="home">
    <app-header />

    <div class="cite mt-3 mb-5 flex-center">
      <p>“Com grandes poderes, vêm grandes responsabilidades.”</p>
    </div>

    <app-grid
      v-bind:add="true"
      v-bind:characters="characters"/>
  </div>
</template>

<script>
import Grid from "@/components/Grid.vue";
import Header from "@/components/Header.vue";

//Vuex
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Explorer",
  components: {
    "app-grid": Grid,
    "app-header": Header
  },
  computed: {
    ...mapGetters(["characters"])
  },
  mounted() {
    this.fetchCharacters();
  },
  methods: {
    ...mapActions(["fetchCharacters", "addFavorite"]),
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
}
</style>
