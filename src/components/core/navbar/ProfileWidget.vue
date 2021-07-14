<template>
  <div class="dropdown">
    <button
      class="btn btn-outline-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ userEmail }}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li>
        <router-link class="dropdown-item" to="userPage"> Профиль</router-link>
      </li>
      <li>
        <router-link class="dropdown-item" to="orderPage"> Заказы</router-link>
      </li>
      <li>
        <router-link @click="logout" class="dropdown-item" to="/">
          Выход</router-link
        >
      </li>
    </ul>
  </div>
</template>


<script>
export default {
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
      this.$store.commit("order/clearOrders");
    },
  },
};
</script>

<style>
</style>
