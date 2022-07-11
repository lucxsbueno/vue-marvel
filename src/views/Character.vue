<template>
  <div class="container flex-center mt-5 mb-5">

    <div v-for="c in character" class="d-flex flex-row align-center">

      <div class="column pd-20 mr-40">
        <span class="c-name">{{ c.name }}</span>
        <p class="c-description">{{ c.description }}</p>

        <div class="c-button">
          <router-link class="back default" v-bind:to="{ name: 'explorer' }">
            BACK
          </router-link>
        </div>
      </div>

      <div class="column">
        <img v-bind:src="c.thumbnail.path + '/portrait_uncanny.' + c.thumbnail.extension" alt=""
          style="{backgroundColor: white}">
      </div>

    </div>
  </div>
</template>

<script>
//Vuex
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Character",
  mounted: function () {
    this.fetchCharacterById(this.$route.params.id);
  },
  computed: {
    ...mapGetters(["character"])
  },
  methods: {
    ...mapActions(["fetchCharacterById"])
  },
}
</script>

<style lang="scss" scoped>
.character {
  width: 100%;
  padding-top: 50px;
}

.c-button {
  max-width: 160px;
}

.mr-40 {
  margin-right: 40px;
}

.pd-20 {
  padding: 20px;
}

.d-flex {
  display: flex;
}

.flex-row {
  flex-direction: row;
}

.align-center {
  align-items: center;
}

.column {
  width: 50%;
}

.c-name {
  display: block;

  font-family: "Roboto";
  font-weight: 900;
  font-size: 18px;
  line-height: 35px;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: var(--white-01);
}

.c-description {
  font-size: 14px;
  font-size: 18px;

  max-width: 400px;

  color: var(--white-01);

  margin-top: 10px;
  margin-bottom: 20px;
}

.back {
  width: 100%;
  height: 50px;

  font-family: "Roboto";
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.2em;

  border: none;

  cursor: pointer;

  text-decoration: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.default {
  color: var(--white-01);
  background: linear-gradient(315deg, transparent 7%, var(--grey-02) 7%);

  &:hover {
    background: linear-gradient(315deg, transparent 7%, var(--red) 7%);
  }
}
</style>