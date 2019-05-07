<template>
	<div>
		<button @click="createRecipe">Create New Recipe</button>
			{{$store.state.jwtClaims}}
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
					console.log(err)
				})
		},
	},
})
</script>
