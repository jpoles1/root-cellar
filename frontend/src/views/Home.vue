<template>
	<div class="home">
		<h1>Welcome to Root Cellar</h1>
		<hr style="margin: 20px 0;">
		<RecipeCreator/>
	</div>
</template>

<script lang="ts">
import Vue from "vue"
import RecipeCreator from "@/components/RecipeCreator.vue"

export default Vue.extend({
	name: "home",
	components: {
		RecipeCreator,
	},
})
</script>
