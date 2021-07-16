<template >
  <div class="row">
    <div class="col-1"></div>
    <div class="col-7 d-flex justify-content-start">
      Название товара {{ title }}
    </div>
    <div class="col-4">Стоимость {{ price }} УЕ</div>
  </div>
</template>

<script>
export default {
  props: { title: String, price: Number },
};
</script>

<style>
</style>
