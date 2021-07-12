<template>
  <button
    ref="showModalButton"
    hidden="true"
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#modal"
  ></button>

  <div
    class="modal fade container-fluid"
    id="modal"
    tabindex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="my-2">
            <p>{{ this.product.title }}</p>
          </div>
          <div class="my-2">
            <img
              class="img-fluid"
              :src="this.product.image"
              alt="Product image"
            />
          </div>
          <div class="my-1">
            <p>{{ this.product.description.repeat(10) }}</p>
          </div>
        </div>
        <div class="modal-footer">
          <span class="col-6">Количество: </span>
          <input
            v-model="this.amount"
            class="col-5 primary"
            min="1"
            type="number"
          />
          <button
            type="button"
            class="btn btn-outline-info btn-block col-5"
            data-bs-dismiss="modal"
          >
            {{ this.product.price }} УЕ
          </button>
          <button
            @click="addToCart"
            type="button"
            class="btn btn-primary col-6"
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    product: function () {
      return this.$store.state.product.selectedProduct;
    },
  },
  data: function () {
    return { amount: 1 };
  },
  methods: {
    showModal() {
      this.$refs.showModalButton.click();
    },
    addToCart() {
      let productPayload = this.product;
      productPayload["amount"] = parseInt(this.amount);
      this.$store.commit("cart/addToCart", productPayload);
    },
  },
};
</script>

<style>
</style>
