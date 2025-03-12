import { createApp } from "vue";
import App from "~/App.vue";
import { router } from "./router";

// reset css
import "@kirklin/reset-css/kirklin.css";
import "~/styles/main.css";
import "uno.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
