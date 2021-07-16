<template class="container">
  <Card>
    <div class="row d-flex align-items-center">
      <div class="col-2 h3">№{{ orderId }}</div>
      <div class="col-4 h3">{{ orderObject.order_date }}</div>
      <div class="col-3 h3">Сумма: {{ total }}</div>
      <div class="col-3">
        <h3 v-if="orderObject.was_paid">Статус: оплачен</h3>
        <h3 v-else>Статус: не оплачен</h3>
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <button
        class="btn btn-outline-primary mx-2"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#collapseDetails${orderObject.id}`"
        aria-expanded="false"
        aria-controls="collapseDetails"
      >
        Подробнее
      </button>
      <button
        v-if="orderObject.was_paid === false"
        class="btn btn-outline-primary me-3"
        @click="pay"
      >
        Оплатить
      </button>
    </div>
    <div class="collapse mt-2" :id="`collapseDetails${orderObject.id}`">
      <ul class="list-unstyled">
        <li v-for="item in productObjectsList" :key="item.id">
          <ProductItem :title="item.title" :price="item.price"></ProductItem>
        </li>
      </ul>
    </div>
  </Card>
</template>

<script>
import Card from "@/components/core/base/Card";
import ProductItem from "@/components/feautures/order/ProductItem";
import { getOrderById } from "@/repository/orders/orders_repository";
import { getProductById } from "@/repository/products/products_repository";
export default {
  computed: {
    total() {
      var sum = 0;
      for (var prod of this.productObjectsList) {
        sum += prod.price;
      }
      return sum;
    },
  },
  components: { Card, ProductItem },
  data() {
    return { orderObject: {}, productObjectsList: [] };
  },
  props: {
    orderId: String,
    productList: Array,
  },
  methods: {
    pay: async function () {
      this.$store.dispatch("order/payOrder", {
        orderId: this.orderId,
        token: this.$store.state.auth.token,
      });
    },
  },
  async mounted() {
    const orderRes = await getOrderById(
      this.orderId,
      this.$store.state.auth.token
    );
    this.orderObject = orderRes.data;
    for (var product of this.productList) {
      var productObject = await getProductById(product.product_id);
      console.log(productObject.data);
      this.productObjectsList.push(productObject.data);
    }
  },
};
</script>

<style>
</style>
