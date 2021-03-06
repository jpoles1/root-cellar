import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Authorize from "@/views/Authorize.vue";
import Logout from "@/views/Logout.vue";
import RecipeViewer from "@/views/RecipeViewer.vue";
import RecipeEditor from "@/views/RecipeEditor.vue";
import RecipeImporter from "@/views/RecipeImporter.vue";
import Error404 from "./components/404.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			component: Home,
		},
		{
			path: "/login",
			component: Login,
		},
		{
			path: "/logout",
			component: Logout,
		},
		{
			path: "/auth/:provider",
			component: Authorize,
			props: true,
		},
		{
			path: "/recipe/import",
			component: RecipeImporter,
		},
		{
			path: "/recipe/:recipeID/",
			component: RecipeViewer,
			props: true,
		},

		{
			path: "/recipe/:recipeID/edit",
			component: RecipeEditor,
			props: true,
		},
		{
			path: "*",
			component: Error404,
		},
	],
});
