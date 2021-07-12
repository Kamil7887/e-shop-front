<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-md">
      <router-link class="navbar-brand btn" to="/">Home</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              v-on:click="toCataloguePage"
              class="nav-link btn"
              to="/"
              >Каталог</router-link
            >
          </li>
          <li class="nav-item px-2 pt-2"><CartIcon></CartIcon></li>
          <li class="nav-item px-2">
            <router-link
              v-on:click="toUserPage"
              v-if="isAuthenticated"
              class="nav-link btn"
              to="/"
              ><p>{{ userEmail }}</p></router-link
            >
          </li>
          <li class="nav-item px-2">
            <router-link
              v-on:click="logout"
              v-if="isAuthenticated"
              class="nav-link btn btn"
              to="/"
              ><p>Выход</p></router-link
            >
            <router-link v-else class="nav-link btn btn" to="/auth"
              >Аутентификация</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import router from "@/router";
import CartIcon from "@/components/core/navbar/CartIcon.vue";
export default {
  name: "NavBar",
  data() {
    return { auth: false };
  },
  components: { CartIcon },
  computed: {
    isAuthenticated: function () {
      return this.$store.getters["auth/isAuthenticated"];
    },
    userEmail: function () {
      const user = this.$store.getters["auth/user"];
      return user.email;
    },
  },
  methods: {
    logout: function () {
      this.$store.dispatch("auth/logout");
      this.$store.commit("cart/clearCart");
    },
    toUserPage: function () {
      router.push("userPage");
    },
    toCataloguePage: function () {
      router.push("cataloguePage");
    },
  },
};
</script>

<style>
</style>
