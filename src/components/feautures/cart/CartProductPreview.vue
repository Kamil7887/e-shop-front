<template class="d-flex ">
  <h4 class="col-4 d-inline-block">{{ product.title }}</h4>
  <img class="col-2" :src="product.image" alt="productImage" />
  <h3 class="col-3 d-inline-block">Цена: {{ product.price }}</h3>
  <h3 class="col-3 d-inline-block text-nowrap">
    Количество: {{ product.amount }}
  </h3>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style>
img {
  width: 100%;
}
</style>
