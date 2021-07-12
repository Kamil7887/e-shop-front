<template>
  <section class="container">
    <h1 class="display">Корзина</h1>
    <div id="preview" class="row my-2">
      <ul class="list-group">
        <li
          class="list-group-item row"
          v-for="item in productIndexes"
          :key="item"
        >
          <CartProductPreview :product="cartObject[item]"></CartProductPreview>
        </li>
      </ul>
    </div>
    <div id="total" class="row">
      <h3 class="offset-8 col-4">Итого: {{ total }}</h3>
    </div>
    <div id="control" class="row">
      <div class="col-4">
        <button @click="clearCart" class="btn btn-outline-primary col-12">
          Очистить корзину
        </button>
      </div>
      <div class="col-8">
        <button @click="buy" class="btn btn-primary col-12">Купить</button>
      </div>
    </div>
  </section>
</template>

<script>
import CartProductPreview from "@/components/feautures/cart/CartProductPreview";
export default {
  components: { CartProductPreview },
  computed: {
    cartObject() {
      return this.$store.state.cart.cart;
    },
    productIndexes() {
      console.log(this.$store.state.cart.productIndexes);
      return this.$store.state.cart.productIndexes;
    },
    total() {
      let total = 0;
      this.productIndexes.forEach((index) => {
        const price = this.cartObject[index].price;
        const amount = this.cartObject[index].amount;
        total += price * amount;
      });
      return total;
    },
  },
  methods: {
    clearCart() {
      this.$store.commit("cart/clearCart");
    },
    buy() {
      if (!this.$store.getters["auth/isAuthenticated"]) {
        alert("Войдите в аккаунт");
      }
    },
  },
};
</script>

<style>
</style>
