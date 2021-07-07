<template>
  <div>
    <h1>Обновить данные</h1>
    <div class="form-group">
      <label for="firstname-input">Имя пользователя</label>
      <input
        v-model="first_name"
        type="text"
        class="form-control"
        id="firstname-input"
        aria-describedby="firstnameHelp"
      />
    </div>
    <div class="form-group">
      <label for="lastname-input">Фамилия пользователя</label>
      <input
        v-model="last_name"
        type="text"
        class="form-control"
        id="lastname-input"
        aria-describedby="lastnameHelp"
      />
    </div>
    <div class="form-group">
      <label for="birthday-input">День рождения</label>
      <input
        v-model="date_birthday"
        type="date"
        class="form-control"
        id="birthday-input"
        aria-describedby="birthdayHelp"
      />
    </div>
    <div class="form-group">
      <label for="password-input">Новый пароль</label>
      <div
        v-if="validationProblems.password != null"
        class="font-weight-light text-danger"
      >
        Валидация для поля
      </div>
      <input
        v-model="password"
        type="password"
        class="form-control"
        id="password-input"
        aria-describedby="passwordHelp"
        placeholder="Введите новый пароль"
      />
    </div>
    <input
      @click="updateUserData"
      :disabled="buttonDisabled"
      class="btn btn-outline-primary m-1"
      type="button"
      value="Обновить"
    />
    <p v-if="showError">{{ this.$store.state.error }}</p>
    <p>{{ $store.state.auth.token }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      date_birthday: "",
      password: "",
      showError: false,
      validationProblems: {},
    };
  },
  computed: {
    buttonDisabled: function () {
      return (
        this.first_name == "" &&
        this.last_name == "" &&
        this.date_birthday == "" &&
        this.password == ""
      );
    },
  },
  methods: {
    isValid: function () {
      let passwordIsValid;
      if (this.password == "") return true;
      if (this.password.length > 7) {
        passwordIsValid = true;
      } else {
        passwordIsValid = false;
        this.validationProblems.password =
          "Пароль должен быть не меньше 8 символов";
      }
      return passwordIsValid;
    },
    updateUserData: async function () {
      if (this.isValid()) {
        try {
          this.showError = false;
          const payload = {
            first_name: this.first_name,
            last_name: this.last_name,
            date_birthday: this.date_birthday,
            password: this.password,
          };
          Object.keys(payload).forEach((key) => {
            if (payload[key] == "") delete payload[key];
          });
          const token = this.$store.state.auth.token;
          console.log(token);
          await this.$store.dispatch("auth/updateUser", {
            payload: payload,
            token: token,
          });
        } catch (e) {
          this.showError = true;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
