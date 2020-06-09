<template>
	<div>
		<v-btn @click="createRecipe" color="blue-grey lighten-1" dark>
			Create New Recipe
		</v-btn>
	</div>
</template>
<script lang="ts">
import Vue from "vue"
import * as jajax from "@/jajax"

export default Vue.extend({
	methods: {
		createRecipe() {
			let url = this.$store.state.apiURL + "/recipe/new"
			jajax.getJSON(url, this.$store.state.jwtToken)
				.then((resp) => {
					if (resp.recipeID) {
						window.location.href = "/recipe/" + resp.recipeID + "/edit"
					}
				})
				.catch((err) => {
					this.$toast(`Failed to create recipe (Err Code: ${err.respCode})`, { color: "#d98303" })
				})
		},
	},
})
</script>
