<template>
  <button v-bind:class="type">{{ name }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    name: String,
    type: String
  }
}
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  height: 50px;

  font-family: "Roboto";
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.2em;

  border: none;

  cursor: pointer;
}

.simple {
  color: var(--grey-02);
  background: linear-gradient(315deg, transparent 7%, var(--color-simple) 7%);

  &:hover {
    color: var(--white-01);
    background: linear-gradient(315deg, transparent 7%, var(--grey-02) 7%);
  }
}
</style>