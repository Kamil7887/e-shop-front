<template>
  <h1 class="display-3">Заказы</h1>
  <ul>
    <li
      class="list-unstyled"
      v-for="order_id in this.ordersIndexes"
      :key="order_id"
    >
      <OrderItem
        :orderId="order_id"
        :productList="this.orders[order_id]"
      ></OrderItem>
    </li>
  </ul>
</template>

<script>
import OrderItem from "@/components/feautures/order/OrderItem";
import { getOrderProductItems } from "@/repository/orders/orders_repository.js";
export default {
  computed: {
    token() {
      return this.$store.state.auth.token;
    },
    orders() {
      return this.$store.state.order.ordersList;
    },
    ordersIndexes() {
      return Object.keys(this.orders);
    },
  },
  components: { OrderItem },
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
