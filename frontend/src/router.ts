import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home.vue"
import Login from "@/views/Login.vue"
import Authorize from "@/views/Authorize.vue"
import Logout from "@/views/Logout.vue"
import RecipeEditor from "@/views/RecipeEditor.vue"

Vue.use(Router)

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/login",
			name: "login",
			component: Login,
		},
		{
			path: "/logout",
			name: "logout",
			component: Logout,
		},
		{
			path: "/auth/:provider",
			component: Authorize,
			props: true,
		},
		{
			path: "/editor/:recipeID",
			name: "editor",
			component: RecipeEditor,
		},
		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ "./views/About.vue"),
		},
	],
})
