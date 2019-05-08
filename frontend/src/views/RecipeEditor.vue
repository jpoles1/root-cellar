<template>
	<div>
		<div v-if="recipeData">
			<input type="text" placeholder="Recipe Name" v-model="recipeData.name" class="recipe-title-input" @blur="saveRecipe"/>
			<div style="display: flex; justify-content: space-around;">
				<div class="recipe-section">
					<h2>Ingredients</h2>
					<div v-for="(ingred, ingredIndex) in recipeData.ingredients" :key="ingredIndex" class="ingredient-entry">
						<input type="number" v-model.number="ingred.quantity" class="ingredient-quantity-input" placeholder="Amount" @blur="saveRecipe">
						<input v-model="ingred.unit" class="ingredient-unit-input" placeholder="Unit" @blur="saveRecipe">
						<input v-model="ingred.ingredient" class="ingredient-ingredient-input" placeholder="Ingredient Name" @blur="saveRecipe">
						<br>
						<input v-model="ingred.notes" class="ingredient-notes-input" placeholder="Notes" @blur="saveRecipe">
					</div>
				</div>
				<div class="recipe-section">
					<h2>Instructions</h2>
					<div v-for="(instruction, instructionIndex) in recipeData.instructions" :key="instructionIndex" class="ingredient-entry">
						{{instruction}}
						<textarea v-model="instruction.instruction" class="instruction-instruction-textarea" placeholder="Instructions..." @blur="saveRecipe"/>
					</div>

				</div>
			</div>
			<div>
				<button @click="saveRecipe">Save</button>
			</div>
		</div>
		<div v-else>
			<h2>Error fetching recipe data!</h2>
		</div>
	</div>
</template>
<script lang="ts">
import Vue from "vue"
import * as jajax from "@/jajax"
import * as iparser from "@/components/ingredient-parser"

export default Vue.extend({
	props: {
		recipeID: {
			type: String,
		},
	},
	data() {
		return {
			recipeData: undefined,
		}
	},
	methods: {
		saveRecipe() {
			let url = this.$store.state.apiURL + "/recipe/" + this.recipeID + "/update"
			jajax.postJSON(url, this.recipeData, this.$store.state.jwtToken)
				.then(function (resp) {
					if (resp.recipeID) {
						window.location.href = "/recipe/" + resp.recipeID + "/edit"
					}
				})
		},
	},
	computed: {

	},
	mounted() {
		this.$nextTick(() => {
			let url = this.$store.state.apiURL + "/recipe/" + this.recipeID
			jajax.getJSON(url, this.$store.state.jwtToken)
				.then((resp) => {
					this.recipeData = resp
				})
				.catch((err) => {
					console.log(err)
				})
		})
	},
})
</script>

<style>
	.recipe-title-input{
		font-size: 28pt;
		text-align: center;
		margin-bottom: 20px;
	}
	.recipe-section{
		width: 45%;
	}
	.ingredient-entry{
		margin: 2px 0;
		padding: 12px;
	}
	.ingredient-quantity-input{
		width: 60px;
		text-align: center;
	}
	.ingredient-unit-input{
		width: 100px;
		text-align: center;
	}
	.ingredient-ingredient-input{
		width: 240px;
		text-align: center;
	}
	.ingredient-notes-input{
		width: calc(60px + 100px + 240px);
		text-align: center;
		font-style: italic;
		margin-top: 6px;
	}
	input[type=number]::-webkit-inner-spin-button,
	input[type=number]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	.instruction-instruction-textarea {
		width: 100%;
		height: 100px;
	}
</style>
