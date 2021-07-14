<template>
  <h1 class="display-3">Заказы</h1>
</template>

<script>
import { getOrderProductItems } from "@/repository/orders/orders_repository.js";
export default {
  computed: {
    token() {
      return this.$store.state.auth.token;
    },
    orders() {
      return this.$store.state.order.ordersList;
    },
  },
  mounted() {
    this.$store.dispatch("order/getOrders", { token: this.token });
  },
  methods: {
    async showOrders() {
      const res = await getOrderProductItems(this.token);
      const organisedOrders = this.generateOrganisedOrders(res.data);
      console.log(organisedOrders);
    },
  },
};
</script>

<style>
</style>
