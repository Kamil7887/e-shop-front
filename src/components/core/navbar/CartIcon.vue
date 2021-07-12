<template  >
  <button @click="toCart" class="btn btn-outline-primary">
    <div class="position-relative">
      <FA icon="shopping-cart" />
      <span
        v-if="this.haveItems"
        class="
          position-absolute
          top-100
          start-100
          translate-middle
          badge
          border border-light
          rounded-circle
          bg-danger
          p-1
        "
      >
        !</span
      >
    </div>
  </button>
</template>

<script>
import "vue-awesome/icons/flag";
export default {
  computed: {
    haveItems() {
      const size = this.$store.getters["cart/cartSize"];
      return size > 0 ? true : false;
    },
  },
  methods: {
    toCart() {
      this.$router.push("cartPage");
    },
  },
};
</script>

<style>
</style>
