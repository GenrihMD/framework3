import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { ge } from "@/services/api";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");

(async () => {
  const d = await ge();
  console.log(d);
})();
