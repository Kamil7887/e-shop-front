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
            <router-link class="nav-link btn" to="cataloguePage"
              >Каталог</router-link
            >
          </li>
          <li class="nav-item px-2 pt-2"><CartIcon></CartIcon></li>
          <li class="nav-item px-2 mt-2">
            <ProfileWidget v-if="isAuthenticated"></ProfileWidget>
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
import CartIcon from "@/components/core/navbar/CartIcon.vue";
import ProfileWidget from "@/components/core/navbar/ProfileWidget";
export default {
  name: "NavBar",
  data() {
    return { auth: false };
  },
  components: { CartIcon, ProfileWidget },
  computed: {
    isAuthenticated: function () {
      return this.$store.getters["auth/isAuthenticated"];
    },
    userEmail: function () {
      const user = this.$store.getters["auth/user"];
      return user.email;
    },
  },
};
</script>

<style>
</style>
