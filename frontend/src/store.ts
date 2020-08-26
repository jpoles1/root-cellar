import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import jwtDecode from "jwt-decode";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		api_url: "/api",
		jwt_token: undefined,
		jwt_claims: {},
	},
	mutations: {
		set_local_api(state) {
			state.api_url = "http://127.0.0.1:3005/api";
		},
		set_JWT_token(state, new_token) {
			state.jwt_token = new_token;
			try {
				state.jwt_claims = jwtDecode(new_token);
			} catch {
				state.jwt_claims = {};
			}
		},
	},
	actions: {},
	plugins: [createPersistedState()],
});
