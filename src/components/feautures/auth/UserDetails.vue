<template>
  <div>
    <h1>Данные пользователя</h1>
    <p v-if="userEmail != ''">Email: {{ userEmail }}</p>
    <p v-if="userFirstName != ''">Имя пользователя:{{ userFirstName }}</p>
    <p v-if="userLastName != ''">Фамилия пользователя:{{ userLastName }}</p>
    <p v-if="userBirthday != null">День рождения:{{ userBirthday }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userEmail: function () {
      const user = this.$store.getters["auth/user"];
      return user.email;
    },
    userFirstName: function () {
      const user = this.$store.getters["auth/user"];
      return user.first_name;
    },
    userLastName: function () {
      const user = this.$store.getters["auth/user"];
      return user.last_name;
    },
    userBirthday: function () {
      const user = this.$store.getters["auth/user"];
      return user.date_birthday;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
