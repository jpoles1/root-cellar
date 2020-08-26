<template>
	<center class="home">
		<h1>Welcome to Root Cellar</h1>
		<div v-if="$store.state.jwt_token">
			<hr style="margin: 20px 0;" />
			<RecipeCreator />
			<hr style="margin: 20px 0;" />
			<RecipeList />
		</div>
		<div v-else>
			<Login />
		</div>
	</center>
</template>

<script lang="ts">
import Vue from "vue";
import Login from "@/views/Login.vue";
import RecipeCreator from "@/components/RecipeCreator.vue";
import RecipeList from "@/components/RecipeList.vue";

export default Vue.extend({
	name: "home",
	components: {
		RecipeCreator,
		RecipeList,
		Login,
	},
});
</script>
