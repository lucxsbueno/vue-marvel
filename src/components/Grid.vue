<template>
  <div class="container flex-center mt-5 mb-5">
    <div class="row">
      <div class="column-12">
        <div class="grid">

          <!-- GRID ITEM -->
          <div class="grid-item" v-for="item in items" v-bind:key="item.id">

            <div class="grid-item-image">
              <img v-bind:src="item.image" alt="">
            </div>

            <div class="grid-item-title">
              <span>{{ item.name }}</span>
            </div>

          </div>
          <!-- END GRID ITEM -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Grid",
  data: function() {
    return {
      items: [
        {
          id: 0,
          name: "A-BOMB",
          image: "https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/standard_incredible.jpg"
        },
        {
          id: 1,
          name: "THOR",
          image: "https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/standard_incredible.jpg"
        },
        {
          id: 2,
          name: "HULK",
          image: "https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/standard_incredible.jpg"
        },
        {
          id: 3,
          name: "SPIDER-MAN",
          image: "https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/standard_incredible.jpg"
        },
        {
          id: 4,
          name: "A-BOMB",
          image: "https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/standard_incredible.jpg"
        },
        {
          id: 5,
          name: "THOR",
          image: "https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/standard_incredible.jpg"
        },
        {
          id: 6,
          name: "HULK",
          image: "https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/standard_incredible.jpg"
        },
        {
          id: 7,
          name: "SPIDER-MAN",
          image: "https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/standard_incredible.jpg"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(252px, auto));
  grid-gap: 4px;

  & > .grid-item {
    color: var(--white-01);

    transition: all .2s ease-in-out;

    cursor: pointer;

    display: flex;
    flex-direction: column;

    .grid-item-image {
      img {
        width: 100%;
        height: 100%;
      }
    }

    .grid-item-title {
      padding: 10px;

      span {
        display: block;

        font-family: "Roboto";
        font-weight: 900;
        font-size: 20px;
        line-height: 35px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        text-align: center;

        color: var(--white-01);
      }
    }

    &:hover {
      transform: scale(1.2);

      background: var(--white-01);

      padding: 10px;

      &>.grid-item-title {

        span {
          color: var(--grey-02);
        }
      }
    }
  }
}
</style>