import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./registerServiceWorker"

import "vuetify/dist/vuetify.min.css"

import Vuetify from "vuetify" // Import Vuetify to your project

Vue.use(Vuetify) // Add Vuetify as a plugin

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app")
