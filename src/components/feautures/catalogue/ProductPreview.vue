<template>
  <div
    @click="onPreviewClick"
    @mouseover="isActive = true"
    @mouseleave="isActive = false"
    class="card h-100"
    :class="{ active: isActive }"
  >
    <div class="card-header">{{ this.product.title }}</div>
    <div class="card-body d-flex">
      <img
        class="img-fluid align-self-center"
        :src="this.product.image"
        alt="product image"
      />
    </div>
    <div class="card-footer">
      <p>Цена: {{ this.product.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { isActive: false };
  },
  props: {
    product: Object,
  },
  methods: {
    onPreviewClick: function () {
      this.$store.commit("product/setSelectedProduct", this.product);
      this.$emit("clicked");
    },
  },
};
</script>

<style>
img {
  filter: grayscale(0%);
  -webkit-filter: grayscale(0%);
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
}

.active img {
  filter: grayscale(60%);
  -webkit-filter: grayscale(60%);
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
}

.modal img {
  filter: grayscale(0%);
  -webkit-filter: grayscale(0%);
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
}
</style>
