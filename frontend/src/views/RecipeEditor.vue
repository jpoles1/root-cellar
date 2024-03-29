<template>
	<div>
		<headful title="Root Cellar - Recipe Editor" />
		<div v-if="recipe">
			<input type="text" placeholder="Recipe Name" v-model="recipe.name" class="recipe-title-input" />
			<div class="recipe-header-inputs">
				<v-text-field v-model="recipe.servings" label="# of Servings" outline />
				<v-text-field v-model="recipe.active_time" label="Active Time" outline suffix="minutes" />
				<v-text-field v-model="recipe.total_time" label="Total Time" outline suffix="minutes" />
			</div>
			<div>
				<a @click="show_url_input = true" v-show="recipe.url == '' && !show_url_input">+ add recipe URL</a>
				<span v-if="recipe.url != '' || show_url_input"> URL: <input v-model="recipe.url" label="Recipe URL" style="border: 1px solid black; margin-left: 5px; font-size: 80%; padding: 2px;" /> </span>
			</div>
			<br />
			<span v-if="recipe.id != recipe.parent_id">
				Forked from <a :href="`/recipe/${recipe.parent_id}/`">{{ recipe.parent_id.slice(0, 6) }}</a> at {{ when_created(recipe.id, "LT on l") }}
			</span>
			<div style="margin-top: 10px">
				<span>
					<v-btn :href="`/recipe/${recipeID}/`" small>
						<i class="fas fa-search" style="font-size: 18px; margin-right: 10px;" />
						View
					</v-btn>
				</span>
				<span style="margin-left: 20px;" />
				<ForkRecipe :recipeID="recipeID" />
				<span style="margin-left: 20px;" />
				<v-btn @click="show_tree = !show_tree" small v-if="recipe.uid == $store.state.jwt_claims.id" style="margin-left: 20px;">
					<i class="fas fa-tree" style="font-size: 18px; margin-right: 10px;" />
					Tree
				</v-btn>
				<span style="margin-left: 20px;" />
				<DeleteRecipe :recipeID="recipeID" @delete="preventUpdate = true" />
			</div>
			<hr style="margin: 20px 0;" />
			<RecipeTree :recipeID="recipe.id" :ogID="recipe.og_id" v-show="show_tree" />
			<hr style="margin: 20px 0;" />
			<!--Active Time: <DurationInput v-model="recipe.active_time" />
			<input type="text" placeholder="Active Time" v-model="recipe.active_time" style="width: 140px; padding-left: 10px; font-size: 80%;"/>-->
			<div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
				<div class="recipe-section">
					<h2>Ingredients</h2>
					<div v-for="(ingred, ingredIndex) in recipe.ingredients" :key="ingredIndex" class="ingredient-entry">
						<input type="number" v-model.number="ingred.quantity" class="ingredient-quantity-input" placeholder="Amount" />
						<input v-model="ingred.unit" class="ingredient-unit-input" placeholder="Unit" />
						<input v-model="ingred.ingredient" class="ingredient-ingredient-input" placeholder="Ingredient Name (backspace to clear)" v-on:keyup.delete="e => check_empty_ingredient(e, ingredIndex)" />
						<br />
						<v-textarea v-model="ingred.notes" class="ingredient-notes-input" placeholder="Notes" rows="1" auto-grow style="padding: 0px" />
					</div>
					<v-btn @click="add_ingredient" class="raised">
						Add Ingredient
					</v-btn>
				</div>
				<div class="recipe-section">
					<h2>Instructions</h2>
					<div v-for="(instruction, instructionIndex) in recipe.instructions" :key="instructionIndex" class="intruction-entry">
						<div class="instruction-order">
							<b>#</b>
							<input type="number" min="1" :value="instructionIndex + 1" class="instruction-order-input" @input="rearrange_instructions(instructionIndex, $event)" />
						</div>
						<v-textarea v-model="instruction.instruction" auto-grow rows="2" class="instruction-instruction-textarea" placeholder="Instructions..." v-on:keyup.delete="e => check_empty_instruction(e, instructionIndex)" />
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
import Vue from "vue";
//import DurationInput from "@/components/DurationInput.vue";
import ForkRecipe from "@/components/ForkRecipe.vue";
import RecipeTree from "@/components/RecipeTree.vue";
import DeleteRecipe from "@/components/DeleteRecipe.vue";
import * as jajax from "@/jajax";
import moment from "moment";
//import parse_duration from "parse-duration";
import ObjectID from "bson-objectid";

export default Vue.extend({
	components: {
		ForkRecipe,
		RecipeTree,
		DeleteRecipe,
	},
	props: {
		recipeID: {
			type: String,
		},
	},
	data() {
		return {
			show_tree: false,
			recipe: undefined as any,
			saveTimeout: undefined as any,
			show_url_input: false,
			preventUpdate: false,
		};
	},
	methods: {
		when_created(id: string, formater = "l"): string {
			return moment(new ObjectID(id).getTimestamp()).format(formater);
		},
		add_ingredient() {
			this.recipe.ingredients.push({
				ingredient: "",
				quantity: 0,
				unit: "",
				notes: "",
			});
		},
		add_instruction() {
			this.recipe.instructions.push({
				instruction: "",
				optional: false,
			});
		},
		check_empty_ingredient(e: any, ingredientIndex: number) {
			if (e.target.value === "") {
				this.recipe.ingredients.splice(ingredientIndex, 1);
			}
		},
		check_empty_instruction(e: any, instructionIndex: number) {
			if (e.target.value === "") {
				this.recipe.instructions.splice(instructionIndex, 1);
			}
		},
		fetch_recipe() {
			const url = this.$store.state.api_url + "/recipe/" + this.recipeID + "/view";
			jajax
				.get_json(url, this.$store.state.jwt_token)
				.then(resp => {
					if (resp!.uid! !== this.$store.state.jwt_claims["id"]) {
						window.location.href = "/";
						return;
					}
					this.recipe = resp;
				})
				.catch(err => {
					this.$toast(`Failed to fetch recipe data (Err Code: ${err.respCode})`, { color: "#d98303" });
				});
		},
		rearrange_instructions(oldIndex: number, event: any) {
			let newIndex = parseInt(event.target.value);
			if (isNaN(newIndex)) return;
			newIndex--;
			if (this.recipe === undefined) return;
			// Blur input
			event.target.blur();
			// Rearranges instruction array
			this.recipe!.instructions.splice(newIndex, 0, this.recipe!.instructions.splice(oldIndex, 1)[0]);
			// Save updates
			this.recipe_update();
		},
		recipe_update() {
			clearTimeout(this.saveTimeout);
			this.saveTimeout = setTimeout(this.save_recipe, 2.5 * 1000);
		},
		save_recipe() {
			if (this.preventUpdate) return;
			const updatedRecipe = JSON.parse(JSON.stringify(this.recipe));
			updatedRecipe.last_updated = new Date().toJSON();
			const url = this.$store.state.api_url + "/recipe/" + this.recipeID + "/update";
			jajax
				.post_json(url, updatedRecipe, this.$store.state.jwt_token)
				.then(() => {
					this.$toast("Recipe Saved!");
				})
				.catch(err => {
					this.$toast(`Failed to save recipe (Err Code: ${err.respCode})`, { color: "#d98303" });
				});
		},
	},
	watch: {
		recipe: {
			handler() {
				this.recipe_update();
			},
			deep: true,
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.fetch_recipe();
			window.onbeforeunload = () => this.save_recipe();
		});
	},
	beforeDestroy: function() {
		window.onbeforeunload = () => {};
	},
});
</script>

<style>
.recipe-title-input {
	font-size: 28pt;
	text-align: center;
	margin: auto;
	margin-bottom: 20px;
	width: 800px;
	max-width: 96%;
}
.recipe-header-inputs {
	display: flex;
	justify-content: center;
	margin: -15px 0;
}
.recipe-header-inputs .v-text-field {
	max-width: 180px;
	transform: scale(0.8);
}
.recipe-section {
	width: 45%;
	max-width: 100%;
	min-width: min(100%, 480px);
	margin-bottom: 20px;
}
.ingredient-entry {
	margin: 12px 0;
}
.ingredient-quantity-input {
	width: 60px !important;
	text-align: center;
}
.ingredient-unit-input {
	width: 100px;
	text-align: center;
}
.ingredient-ingredient-input {
	width: min(100%, 280px);
	text-align: center;
}
.ingredient-notes-input textarea {
	padding: 5px 8px !important;
}
.ingredient-notes-input .v-text-field__details {
	display: none;
}
.instruction-order {
	float: right;
	border: 1px solid #555;
	border-bottom: none;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	padding: 4px;
}
.instruction-order-input {
	width: 30px !important;
	text-align: center;
	border: none !important;
}
.ingredient-notes-input {
	width: min(100%, calc(60px + 100px + 280px));
	text-align: center;
	font-style: italic;
	margin-top: 6px;
}
.recipe-section input,
.recipe-title-input {
	border: 1px solid #555;
	padding: 3px 10px;
	border-radius: 2px !important;
}
.instruction-order-input {
	border: none;
}
textarea {
	border: 1px solid #555 !important;
	padding: 6px;
	border-radius: 2px !important;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
.instruction-instruction-textarea {
	width: 100%;
	padding: 0px !important;
}
.instruction-instruction-textarea textarea {
	padding: 5px 8px !important;
}
</style>
