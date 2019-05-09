<template>
	<div>
		<div v-if="recipeData">
			<input type="text" placeholder="Recipe Name" v-model="recipeData.name" class="recipe-title-input" @blur="recipeUpdate"/>
			<div style="display: flex; justify-content: space-around;">
				<div class="recipe-section">
					<h2>Ingredients</h2>
					<div v-for="(ingred, ingredIndex) in recipeData.ingredients" :key="ingredIndex" class="ingredient-entry">
						<input type="number" v-model.number="ingred.quantity" class="ingredient-quantity-input" placeholder="Amount" @blur="recipeUpdate">
						<input v-model="ingred.unit" class="ingredient-unit-input" placeholder="Unit" @blur="recipeUpdate">
						<input v-model="ingred.ingredient" class="ingredient-ingredient-input" placeholder="Ingredient Name" @blur="recipeUpdate">
						<br>
						<input v-model="ingred.notes" class="ingredient-notes-input" placeholder="Notes" @blur="recipeUpdate">
					</div>
				</div>
				<div class="recipe-section">
					<h2>Instructions</h2>
					<div v-for="(instruction, instructionIndex) in recipeData.instructions" :key="instructionIndex" class="ingredient-entry">
						<div class="instruction-order">
							<b>#</b>
							<input type="number" min=1 :value="instructionIndex + 1" class="instruction-order-input"
							@input="rearrangeInstructions(instructionIndex, $event)">
						</div>
						<textarea v-model="instruction.instruction" class="instruction-instruction-textarea" placeholder="Instructions..." @blur="recipeUpdate"/>
					</div>
				</div>
			</div>
			<div>
				<v-btn @click="saveRecipe" color="teal darker-4" dark>Save</v-btn>
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
			recipeData: undefined as any,
			saveTimeout: undefined as any,
		}
	},
	methods: {
		rearrangeInstructions(oldIndex: number, event: any) {
			let newIndex = parseInt(event.target.value)
			if (isNaN(newIndex)) return
			newIndex--
			if (this.recipeData === undefined) return
			// Blur input
			event.target.blur()
			// Rearranges instruction array
			this.recipeData!.instructions.splice(newIndex, 0, this.recipeData!.instructions.splice(oldIndex, 1)[0])
			// Save updates
			this.recipeUpdate()
		},
		recipeUpdate() {
			clearTimeout(this.saveTimeout)
			this.saveTimeout = setTimeout(this.saveRecipe, 2 * 1000)
		},
		saveRecipe() {
			let url = this.$store.state.apiURL + "/recipe/" + this.recipeID + "/update"
			jajax.postJSON(url, this.recipeData, this.$store.state.jwtToken)
				.then((resp) => {
					this.$toast("Recipe Saved!")
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
					if (resp!.uid! !== this.$store.state.jwtClaims["id"]) {
						window.location.href = "/"
						return
					}
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
		width: 60px !important;
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
	.instruction-order{
		float: right;
		border: 1px solid #555;
		border-bottom: none;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		padding: 4px;
	}
	.instruction-order-input{
		width: 30px !important;
		text-align: center;
		border: none !important;
	}
	.ingredient-notes-input{
		width: calc(60px + 100px + 240px);
		text-align: center;
		font-style: italic;
		margin-top: 6px;
	}
	input {
		border: 1px solid #555 !important;
		padding: 3px 0;
		border-radius: 2px !important;
	}
	textarea {
		border: 1px solid #555 !important;
		padding: 6px;
		border-radius: 2px !important;
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
