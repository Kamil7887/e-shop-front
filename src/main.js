import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { createApp } from "vue";
import { store } from "@/store/index";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");

export default app;
