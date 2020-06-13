<template>
	<div>
		<div v-if="recipe">
			<input type="text" placeholder="Recipe Name" v-model="recipe.name" class="recipe-title-input"/>
			<br>
			<!--Active Time: <DurationInput v-model="recipe.active_time" />
			<input type="text" placeholder="Active Time" v-model="recipe.active_time" style="width: 140px; padding-left: 10px; font-size: 80%;"/>-->
			<div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
				<div class="recipe-section">
					<h2>Ingredients</h2>
					<div v-for="(ingred, ingredIndex) in recipe.ingredients" :key="ingredIndex" class="ingredient-entry">
						<input type="number" v-model.number="ingred.quantity" class="ingredient-quantity-input" placeholder="Amount">
						<input v-model="ingred.unit" class="ingredient-unit-input" placeholder="Unit">
						<input v-model="ingred.ingredient" class="ingredient-ingredient-input" placeholder="Ingredient Name (backspace to clear)" v-on:keyup.delete="(e) => check_empty_ingredient(e, ingredIndex)">
						<br>
						<input v-model="ingred.notes" class="ingredient-notes-input" placeholder="Notes">
					</div>
					<v-btn @click="add_ingredient" class="raised">
						Add Ingredient
					</v-btn>
				</div>
				<div class="recipe-section">
					<h2>Instructions</h2>
					<div v-for="(instruction, instructionIndex) in recipe.instructions" :key="instructionIndex" class="ingredient-entry">
						<div class="instruction-order">
							<b>#</b>
							<input type="number" min=1 :value="instructionIndex + 1" class="instruction-order-input"
							@input="rearrange_instructions(instructionIndex, $event)" v-on:keyup.delete="(e) => check_empty_instruction(e, instructionIndex)">
						</div>
						<textarea v-model="instruction.instruction" class="instruction-instruction-textarea" placeholder="Instructions..."/>
					</div>
					<v-btn @click="add_instruction" class="raised">
						Add Instruction
					</v-btn>

				</div>
			</div>
			<div>
				<v-btn @click="save_recipe" color="teal darker-4" dark>Save</v-btn>
			</div>
		</div>
		<div v-else>
			<h2>Error fetching recipe data!</h2>
		</div>
	</div>
</template>
<script lang="ts">
import Vue from "vue"
import DurationInput from "@/components/DurationInput.vue"
import * as jajax from "@/jajax"
import * as iparser from "@/components/ingredient-parser"
import moment from "moment"
import parse_duration from "parse-duration"

export default Vue.extend({
	components: {
		DurationInput,
	},
	props: {
		recipeID: {
			type: String,
		},
	},
	data() {
		return {
			recipe: undefined as any,
			saveTimeout: undefined as any,
		}
	},
	methods: {
		add_ingredient() {
			this.recipe.ingredients.push({
				ingredient: "",
				quantity: 0,
				unit: "",
				notes: "",
			})
		},
		add_instruction() {
			this.recipe.Instructions.push({
				instruction: "",
				optional: false,
			})
		},
		check_empty_ingredient(e: any, ingredientIndex: number) {
			if (e.target.value === "") {
				this.recipe.ingredients.splice(ingredientIndex, 1)
			}
		},
		check_empty_instruction(e: any, instructionIndex: number) {
			if (e.target.value === "") {
				this.recipe.instructions.splice(instructionIndex, 1)
			}
		},
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
		rearrange_instructions(oldIndex: number, event: any) {
			let newIndex = parseInt(event.target.value)
			if (isNaN(newIndex)) return
			newIndex--
			if (this.recipe === undefined) return
			// Blur input
			event.target.blur()
			// Rearranges instruction array
			this.recipe!.instructions.splice(newIndex, 0, this.recipe!.instructions.splice(oldIndex, 1)[0])
			// Save updates
			this.recipe_update()
		},
		recipe_update() {
			clearTimeout(this.saveTimeout)
			this.saveTimeout = setTimeout(this.save_recipe, 5 * 1000)
		},
		save_recipe() {
			let url = this.$store.state.api_url + "/recipe/" + this.recipeID + "/update"
			jajax.postJSON(url, this.recipe, this.$store.state.jwt_token)
				.then((resp) => {
					this.$toast("Recipe Saved!")
				}).catch((err) => {
					this.$toast(`Failed to save recipe (Err Code: ${err.respCode})`, { color: "#d98303" })
				})
		},
	},
	watch: {
		recipe: {
			handler() {
				this.recipe_update()
			},
			deep: true,
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.fetch_recipe()
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
		min-width: 450px;
		margin-bottom: 20px;
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
		width: 280px;
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
		width: calc(60px + 100px + 280px);
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
