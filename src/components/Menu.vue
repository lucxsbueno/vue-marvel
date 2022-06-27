<template>
  <menu class="menu flex-center">
    <ul>
      <li>
        <router-link to="/" exact active-class="active">
          Explorer
        </router-link>
      </li>
      <li>
        <router-link to="/favorites" active-class="active">
          My Favorites
        </router-link>
      </li>
    </ul>
  </menu>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style lang="scss" scoped>
.menu {
  ul {
    list-style: none;

    display: flex;
    flex-direction: row;

    li {
      margin-right: 10px;

      &:last-child {
        margin-right: 0px;
      }

      a {
        display: block;
        color: var(--white-01);
        text-decoration: none;

        padding: 5px 10px;

        border-bottom: 5px solid var(--grey-01);

        &:hover {
          text-decoration: underline;
        }
      }

      .active {
        background: var(--grey-02);
        border-bottom: 5px solid var(--red);
      }
    }
  }
}
</style>