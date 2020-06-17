<template>
    <div>
		<h1>
			{{recipe.name}}
		</h1>
		<div v-if="recipe.uid == $store.state.jwt_claims.id">
			<v-btn @click="$router.push(`/recipe/${recipe.id}/edit`)" class="primary">
				<v-icon>edit</v-icon>&nbsp;&nbsp; Edit
			</v-btn>
		</div>
		<hr style="margin: 20px 0;">
		<RecipeDisplay :recipe="recipe"/>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import * as jajax from "@/jajax"
import RecipeDisplay from "@/components/RecipeDisplay.vue"
export default Vue.extend({
	components: {
		RecipeDisplay,
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
		fetch_recipe() {
			let url = this.$store.state.api_url + "/recipe/" + this.recipeID
			jajax.getJSON(url, this.$store.state.jwt_token)
				.then((resp) => {
					if (resp!.uid! !== this.$store.state.jwt_claims["id"]) {
						window.location.href = "/"
						return
					}
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
