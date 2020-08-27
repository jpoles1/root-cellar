import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import vuetify from "./plugins/vuetify";
import VuetifyToast from "vuetify-toast-snackbar-ng";
import headful from "vue-headful";

Vue.use(VuetifyToast, {
	x: "left",
	timeout: 2000,
	color: "#004D40", // teal darken-4
});
Vue.component("headful", headful);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App),
}).$mount("#app");
