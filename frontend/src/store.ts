import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"
import jwtDecode from "jwt-decode"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		apiURL: "",
		jwtToken: undefined,
		jwtClaims: {},
	},
	mutations: {
		setLocalAPI (state) {
			state.apiURL = "http://127.0.0.1:5555/api"
		},
		setJWTToken (state, newToken) {
			state.jwtToken = newToken
			try {
				state.jwtClaims = jwtDecode(newToken)
			} catch {
				state.jwtClaims = {}
			}
		},
	},
	actions: {

	},
	plugins: [createPersistedState()],
})
