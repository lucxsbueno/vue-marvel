<template>
  <header class="header flex-center">
    <div class="mt-3">
      <input type="text" placeholder="Enter your favorite hero" v-model="search" />
      <button v-on:click="searchCharacter()">SEARCH</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: function() {
    return{
      search: ""
    }
  },
  methods: {
    searchCharacter() {
      this.$store.dispatch("fetchCharacterByName", this.search);
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
}

input {
  width: 320px;
  height: 60px;

  background: linear-gradient(135deg, transparent 5%, var(--grey-02) 5%);

  border: none;
  outline: none;

  color: var(--white-01);
  font-size: 16px;

  padding: 0px 25px;

  margin-right: 4px;

  &::placeholder {
    color: var(--white-01);
  }
}

/* Button */
button {
  height: 60px;

  background: linear-gradient(315deg, transparent 10%, var(--white-01) 10%);

  border: none;
  outline: none;

  color: var(--grey-02);
  font-size: 16px;
  font-weight: 600;

  padding: 0px 25px;
  letter-spacing: 2px;

  cursor: pointer;

  &:hover {
    background: linear-gradient(315deg, transparent 10%, var(--red) 10%);

    color: var(--white-01);
  }
}
</style>