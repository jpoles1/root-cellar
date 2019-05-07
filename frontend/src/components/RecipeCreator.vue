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
			jajax.getJSON("http://127.0.0.1:5555/api/recipe/new", this.$store.state.jwtToken)
				.then((resp) => {
					if (resp.recipeID) {
						window.location.href = "/recipe/" + resp.recipeID
					}
				})
				.catch((err) => {
					console.log(err)
				})
		},
	},
})
</script>
