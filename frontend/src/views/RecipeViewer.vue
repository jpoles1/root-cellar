<template>
    <div v-if="recipe">
		<h1>
			{{recipe.name}}
		</h1>
		<div style="margin-bottom: 8px;">
			<div v-if="recipe.servings != ''">Servings: {{recipe.servings}}</div>
			<div v-if="recipe.active_time != ''">Active Time: {{recipe.active_time}} min</div>
			<div v-if="recipe.total_time != ''">Total Time: {{recipe.total_time}} min</div>
			<div v-if="recipe.url != ''"><a :href="recipe.url" target="_blank">Original Recipe</a></div>
		</div>
		<span v-if="recipe.id != recipe.parent_id">
			Forked from <a :href="`/recipe/${recipe.parent_id}/`">{{recipe.parent_id.slice(0, 6)}}</a> at {{when_created(recipe.id, "LT on l")}}
		</span>
		<div style="margin-top: 10px;">
			<v-btn @click="$router.push(`/recipe/${recipe.id}/edit`)" small v-if="recipe.uid == $store.state.jwt_claims.id">
				<v-icon style="font-size: 21px">edit</v-icon>
				&nbsp;&nbsp;Edit
			</v-btn>
			<Fork :recipeID="recipe.id"/>
		</div>
		<hr style="margin: 20px 0;">
		<RecipeDisplay :recipe="recipe"/>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import * as jajax from "@/jajax"
import moment from "moment"
import RecipeDisplay from "@/components/RecipeDisplay.vue"
import Fork from "@/components/ForkRecipe.vue"

const ObjectID = require("bson-objectid")

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
		}
	},
	methods: {
		when_created(id: string, formatter: string = "l"): string {
			return moment(new ObjectID(id).getTimestamp()).format(formatter)
		},
		fetch_recipe() {
			let url = this.$store.state.api_url + "/recipe/" + this.recipeID + "/view"
			jajax.getJSON(url, this.$store.state.jwt_token)
				.then((resp) => {
					this.recipe = resp
				}).catch((err) => {
					this.$toast(`Failed to fetch recipe data (Err Code: ${err.respCode})`, { color: "#d98303" })
				})
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.fetch_recipe()
		})
	},
})
</script>
