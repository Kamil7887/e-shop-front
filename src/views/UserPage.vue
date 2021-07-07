<template>
  <div>
    <section class="container mt-5">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <Card class="m-2">
            <UserDetails></UserDetails>
          </Card>
          <Card class="m-2">
            <UserForm></UserForm>
          </Card>
        </div>
        <div class="col-3"></div>
      </div>
    </section>
  </div>
</template>

<script>
import Card from "@/components/core/base/Card";
import UserForm from "@/components/feautures/auth/UserForm";
import UserDetails from "@/components/feautures/auth/UserDetails";
export default {
  name: "userPage",
  components: { Card, UserForm, UserDetails },
};
</script>

<style lang="scss" scoped>
</style>
