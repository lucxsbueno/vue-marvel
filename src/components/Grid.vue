<template>
  <div class="container flex-center mt-5 mb-5">
    <div class="row">
      <div class="column-12">
        <div v-if="!characters.length" class="cite mt-3 mb-5 flex-center">
          <p>Nenhum herói encontrado.</p>
        </div>

        <div class="grid">

          <!-- GRID ITEM -->
          <div class="grid-item" v-for="character in characters" v-bind:key="character.id">

            <div class="grid-item-image">
              <img v-bind:src="character.thumbnail.path + '/portrait_uncanny.' + character.thumbnail.extension" alt=""
                style="{backgroundColor: white}">
            </div>

            <div class="grid-item-title">
              <span>{{ character.name }}</span>
            </div>

            <div class="grid-item-buttons">
              <router-link class="read-more default"
                v-bind:to="{name: 'character', params: { id: character.id } }">
                  READ MORE
              </router-link>

              <div class="button-wrapper" v-if="add">
                <button class="grid-button rounded" v-on:click="addFavorite(character)">
                  <star-icon />
                </button>
              </div>

              <div class="button-wrapper" v-else>
                <button class="grid-button rounded" v-on:click="removeFavorite(character)">
                  <trash-icon />
                </button>
              </div>
            </div>

          </div>
          <!-- END GRID ITEM -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
//icons
import StarIcon from "vue-feather-icons/icons/StarIcon";
import TrashIcon from "vue-feather-icons/icons/TrashIcon";

export default {
  name: "Grid",
  components: {
    "star-icon": StarIcon,
    "trash-icon": TrashIcon
  },
  props: {
    characters: Array,
    add: Boolean,
    remove: Boolean
  },
  methods: {
    addFavorite(character) {
      this.$store.dispatch("addFavorite", character);
    },
    removeFavorite(character) {
      this.$store.dispatch("removeFavorite", character);
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(252px, auto));
  grid-gap: 4px;

  &>.grid-item {
    color: var(--white-01);

    transition: all .2s ease-in-out;

    cursor: pointer;

    display: flex;
    flex-direction: column;

    .grid-item-image {
      img {
        width: 100%;
        height: 100%;

        background-color: #FFF;
      }
    }

    .grid-item-title {
      padding: 10px;

      span {
        display: block;

        font-family: "Roboto";
        font-weight: 900;
        font-size: 18px;
        line-height: 35px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        text-align: center;

        max-width: 210px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        color: var(--white-01);
      }
    }

    .grid-item-buttons {
      display: none;
    }

    &:hover {
      transform: scale(1.2);

      background: var(--white-01);

      padding: 10px;

      .grid-item-buttons {
        display: flex;
        flex-direction: row;
      }

      &>.grid-item-title {

        span {
          color: var(--grey-02);
        }
      }
    }
  }
}

.button-wrapper {
  display: block;
  width: 60px;
  padding-left: 10px;
}

.read-more {
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
  color: var(--grey-02);
  background: linear-gradient(315deg, transparent 7%, var(--color-simple) 7%);

  &:hover {
    color: var(--white-01);
    background: linear-gradient(315deg, transparent 7%, var(--grey-02) 7%);
  }
}

.grid-button {
  width: 50px;
  height: 50px;
  border-radius: 50px;

  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
}

.rounded {
  color: var(--grey-02);
  background: var(--color-simple);

  &:hover {
    color: var(--white-01);
    background: var(--grey-02);
  }
}
</style>