import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are using css-loader
//TODO: should I delete the css for font-awesome from index.html now?

import Vue from "vue";
import Vuetify, { VSnackbar, VBtn, VIcon } from "vuetify/lib";

Vue.use(Vuetify, {
	components: {
		VSnackbar,
		VBtn,
		VIcon,
	},
});

export default new Vuetify({
	icons: {
		iconfont: "fa",
	},
});
