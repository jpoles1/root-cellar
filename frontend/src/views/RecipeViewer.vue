<template>
	<div v-if="recipe">
		<headful :title="'Root Cellar - ' + recipe.name" :description="'Root Cellar Recipes: Learn how to make ' + recipe.name" />
		<h1>
			{{ recipe.name }}
		</h1>
		<div style="margin-bottom: 8px;">
			<div v-if="recipe.servings != ''">Servings: {{ recipe.servings }}</div>
			<div v-if="recipe.active_time != ''">Active Time: {{ recipe.active_time }} min</div>
			<div v-if="recipe.total_time != ''">Total Time: {{ recipe.total_time }} min</div>
			<div v-if="recipe.url != ''"><a :href="recipe.url" target="_blank">Original Recipe</a></div>
		</div>
		<span v-if="recipe.id != recipe.parent_id">
			Forked from <a :href="`/recipe/${recipe.parent_id}/`">{{ recipe.parent_id.slice(0, 6) }}</a> at {{ when_created(recipe.id, "LT on l") }}
		</span>
		<div style="margin-top: 10px;">
			<v-btn @click="$router.push(`/recipe/${recipe.id}/edit`)" small v-if="recipe.uid == $store.state.jwt_claims.id">
				<i class="fas fa-pencil-alt" style="font-size: 18px;" />
				Edit
			</v-btn>
			<Fork :recipeID="recipe.id" style="margin-left: 20px;" />
		</div>
		<hr style="margin: 20px 0;" />
		<RecipeDisplay :recipe="recipe" />
	</div>
	<div v-else style="padding-top: 40px;">
		<h2>Cannot Find Recipe, It Either Never Existed Or Has Been Deleted.</h2>
		<div style="font-size: 110%; margin-top: 12px; font-style: italic">
			<span>Click <a href="/">here</a> to return to the recipe list. You will be <a href="/">automatically redirected in 5 seconds...</a></span>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import * as jajax from "@/jajax";
import moment from "moment";
import RecipeDisplay from "@/components/RecipeDisplay.vue";
import Fork from "@/components/ForkRecipe.vue";
import ObjectID from "bson-objectid";

export default Vue.extend({
	components: {
		RecipeDisplay,
		Fork,
	},
	props: {
		recipeID: {
			type: String,
		},
	},
	data() {
		return {
			recipe: undefined as any,
		};
	},
	methods: {
		when_created(id: string, formatter = "l"): string {
			return moment(new ObjectID(id).getTimestamp()).format(formatter);
		},
		fetch_recipe() {
			const url = this.$store.state.api_url + "/recipe/" + this.recipeID + "/view";
			jajax
				.get_json(url, this.$store.state.jwt_token)
				.then(resp => {
					this.recipe = resp;
				})
				.catch(err => {
					this.$toast(`Failed to fetch recipe data (Err Code: ${err.respCode})`, { color: "#d98303" });
					window.setTimeout(() => {
						window.location.href = "/";
					}, 5000);
				});
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.fetch_recipe();
		});
	},
});
</script>
