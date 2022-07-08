<template>
  <div class="container flex-center mt-5 mb-5">
    <div class="row">
      <div class="column-12">
        <div class="grid">

          <!-- GRID ITEM -->
          <div class="grid-item" v-for="character in characters" v-bind:key="character.id">

            <div class="grid-item-image">
              <img v-bind:src="character.thumbnail.path + '/portrait_uncanny.' + character.thumbnail.extension" alt="" style="{backgroundColor: white}">
            </div>

            <div class="grid-item-title">
              <span>{{ character.name }}</span>
            </div>

            <div class="grid-item-buttons">
              <app-button name="READ MORE" type="simple" />
              <div v-bind:style="{display: 'block', width: '60px', paddingLeft: '10px'}">
                <app-rounded-button type="simple" />
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
import Button from "@/components/Button.vue";
import RoundedButton from "@/components/RoundedButton.vue";

//Http
import axios from "axios";

export default {
  name: "Grid",
  components: {
    "app-button": Button,
    "app-rounded-button": RoundedButton,
  },
  mounted() {
    this.fetchCharacters();
  },
  data: function () {
    return {
      characters: []
    }
  },
  methods: {
    fetchCharacters: function () {
      axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${process.env.VUE_APP_TIMESTAMP}&apikey=${process.env.VUE_APP_PUBLIC_API_KEY}&hash=${process.env.VUE_APP_HASH_API_KEY}`)
        .then(result => {
          console.log(result);
          result.data.data.results.forEach(item => {
            this.characters.push(item);
          })
        })
        .catch(error => console.log(error));
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
</style>