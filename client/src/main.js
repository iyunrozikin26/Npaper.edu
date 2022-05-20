import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import GAuth from "vue3-google-oauth2";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();
const gAuthOptions = { clientId: "258796798125-n8m52fs77lh7sihabm5j0u60485iilr7.apps.googleusercontent.com", scope: "email", prompt: "consent", fetch_basic_profile: false };

pinia.use(({ store }) => {
    store.router = markRaw(router);
});

app.use(GAuth, gAuthOptions);
app.use(pinia);
app.use(router);

app.mount("#app");
