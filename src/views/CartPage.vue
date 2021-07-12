<template>
  <EmptyCart v-if="this.$store.getters['cart/cartSize'] == 0"></EmptyCart>
  <FilledCart v-else></FilledCart>
</template>

<script>
import EmptyCart from "@/components/feautures/cart/EmptyCart";
import FilledCart from "@/components/feautures/cart/FilledCart";
export default {
  components: {
    EmptyCart,
    FilledCart,
  },
};
</script>

<style>
</style>
