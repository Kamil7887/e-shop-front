<template>
  <section class="container mt-5">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <Card>
          <AuthForm></AuthForm>
        </Card>
      </div>
      <div class="col-3"></div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/core/base/Card.vue";
import AuthForm from "@/components/feautures/auth/AuthForm";
export default {
  name: "auth",
  components: { Card, AuthForm },
};
</script>

<style>
</style>
