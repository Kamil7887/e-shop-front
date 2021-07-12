import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { createApp } from "vue";
import { store } from "@/store/index";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faShoppingCart);

const app = createApp(App);
app.component("FA", FontAwesomeIcon);
app.use(router);
app.use(store);
app.mount("#app");

export default app;
