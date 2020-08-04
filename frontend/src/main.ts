import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./registerServiceWorker"

import "vuetify/dist/vuetify.min.css"

import Vuetify from "vuetify"
import VuetifyToast from "vuetify-toast-snackbar"

import headful from "vue-headful"

Vue.use(Vuetify)
Vue.use(VuetifyToast, {
	x: "left",
	timeout: 2500,
	color: "#004D40", // teal darken-4
})
Vue.component("headful", headful)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app")
