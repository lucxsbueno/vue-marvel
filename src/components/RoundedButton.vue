<template>
  <button v-bind:class="type">
    <star-icon/>
  </button>
</template>

<script>
import StarIcon from "vue-feather-icons/icons/StarIcon";

export default {
  name: "RoundedButton",
  components: {
    "star-icon": StarIcon
  },
  props: {
    type: String
  }
}
</script>

<style lang="scss" scoped>
button {
  width: 50px;
  height: 50px;
  border-radius: 50px;

  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
}

.simple {
  color: var(--grey-02);
  background: var(--color-simple);

  &:hover {
    color: var(--white-01);
    background: var(--grey-02);
  }
}
</style>