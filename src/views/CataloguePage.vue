<template class="container">
  <ul class="row" v-for="i in Math.ceil(this.listLength / 3)" :key="i">
    <div
      class="col-4"
      v-for="product in this.productsList.slice((i - 1) * 3, i * 3)"
      :key="product.id"
    >
      <ProductPreview :product="product"></ProductPreview>
    </div>
  </ul>
</template>

<script>
import ProductPreview from "@/components/feautures/catalogue/ProductPreview";
export default {
  async mounted() {
    try {
      await this.$store.dispatch("product/getProductsList");
    } catch {
      this.showError = true;
    }
  },
  data() {
    return { showError: false };
  },
  computed: {
    productsList: function () {
      return this.$store.state.product.productsList;
    },
    listLength: function () {
      return this.productsList.length;
    },
  },
  components: { ProductPreview },
};
</script>

<style>
.row-flex {
  display: flex;
  flex-wrap: wrap;
}

[class*="col-"] {
  margin-bottom: 30px;
}
</style>
