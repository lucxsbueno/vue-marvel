<template>
  <div id="app" class="app">
    <app-logo/>
    <app-menu/>
    <router-view/>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "App",
  components: {
    "app-logo": Logo,
    "app-menu": Menu
  }
}</script>

<style lang="scss">

</style>
