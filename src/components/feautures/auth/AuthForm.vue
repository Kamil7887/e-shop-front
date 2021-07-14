<template>
  <h1 class="display-3">Авторизация</h1>
  <div class="form-group">
    <label for="email-input">Email</label>
    <div class="font-weight-light text-danger">
      {{ this.validationProblems.email }}
    </div>
    <input
      v-model="emailField"
      type="email"
      class="form-control"
      id="email-input"
      aria-describedby="emailHelp"
      placeholder="Enter email"
    />
  </div>
  <div class="form-group">
    <label for="password-input">Пароль</label>
    <div class="font-weight-light text-danger">
      {{ this.validationProblems.password }}
    </div>

    <input
      v-model="passwordField"
      type="password"
      class="form-control"
      id="exampleInputPassword1"
      placeholder="Password"
    />
  </div>
  <button v-on:click="login" class="btn btn-outline-primary m-2">Вход</button>
  <button v-on:click="register" class="btn btn-outline-primary m-2">
    Регистрация
  </button>
  <p v-if="showError">{{ this.$store.state.auth.error }}</p>
</template>

<script>
import router from "@/router";
export default {
  name: "AuthForm",
  data() {
    return {
      emailField: "",
      passwordField: "",
      validationProblems: {},
      showError: false,
    };
  },
  methods: {
    isValid: function () {
      this.validationProblems = {};
      let emailIsValid;
      let passwordIsValid;
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(this.emailField.toLowerCase())) {
        emailIsValid = true;
      } else {
        this.validationProblems.email = "Некорректный email";
      }
      if (this.passwordField.length > 7) {
        passwordIsValid = true;
      } else {
        passwordIsValid = false;
        this.validationProblems.password =
          "Пароль должен быть не меньше 8 символов";
      }

      return emailIsValid && passwordIsValid;
    },
    register: async function () {
      if (this.isValid()) {
        try {
          this.showError = false;
          await this.$store.dispatch("auth/register", {
            email: this.emailField,
            password: this.passwordField,
          });
          await this.$store.dispatch("auth/login", {
            email: this.emailField,
            password: this.passwordField,
          });
          this.emailField = "";
          this.passwordField = "";
          this.$store.commit("auth/resetError");
          router.replace("/");
        } catch (e) {
          this.showError = true;
        }
      }
    },
    login: async function () {
      if (this.isValid()) {
        try {
          this.showError = false;
          await this.$store.dispatch("auth/login", {
            email: this.emailField,
            password: this.passwordField,
          });
          this.emailField = "";
          this.passwordField = "";
          this.$store.commit("auth/resetError");
          router.replace("/");
        } catch (e) {
          this.showError = true;
        }
      }
    },
  },
};
</script>
<style></style>;
