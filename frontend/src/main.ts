import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./registerServiceWorker"

import "vuetify/dist/vuetify.min.css"

import Vuetify from "vuetify"
import VuetifyToast from "vuetify-toast-snackbar"

Vue.use(Vuetify)
Vue.use(VuetifyToast, {
	x: "left",
	timeout: 1500,
	color: "#004D40", // teal darken-4
})

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app")
