<template>
	<div>
		<headful title="Root Cellar - Recipe Import" />
		<input type="text" placeholder="Recipe Name" v-model="name" style="font-size: 28pt; text-align: center; margin-bottom: 20px;" />
		<div style="display: flex; justify-content: space-around;">
			<div class="recipe-section">
				<h2>Ingredients:</h2>
				<textarea v-model="ingredient_string" style="width: 100%; height: 220px;" />
			</div>
			<div class="recipe-section">
				<h2>Instructions:</h2>
				<textarea v-model="instruction_string" style="width: 100%; height: 220px;"> </textarea>
			</div>
		</div>
		<v-expansion-panels>
			<v-expansion-panel>
				<v-expansion-panel-header>Preview Recipe</v-expansion-panel-header>
				<v-expansion-panel-content>
					<v-card-text class="grey lighten-4">
						<RecipeDisplay :recipe="recipe_preview" />
					</v-card-text>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
		<br />
		<div>
			<v-btn class="primary" @click="save_recipe">Save</v-btn>
		</div>
	</div>
</template>
<script lang="ts">
import Vue from "vue";
import * as jajax from "@/jajax";
import * as iparser from "@/components/ingredient-parser";
import { Instruction } from "@/components/ingredient-parser/instruction";
import RecipeDisplay from "@/components/RecipeDisplay.vue";

// From: https://www.bonappetit.com/recipe/crispy-green-rice-pilaf
const ingredient_string = `½ cup raw pistachios
4 cups cilantro, mint, basil, and/or dill
1 serrano chile, (or up to 3, stems removed, split lengthwise)
¼ cup fresh lime juice
2 Tbsp. white miso
½ tsp. kosher salt, plus more
⅓ cup plus 3 Tbsp. extra-virgin olive oil
4 cups cooked white rice, chilled overnight
6 oz. sugar snap peas
3 scallions
¾ cup crumbled feta
½ cup golden raisins
1 cup shelled fresh peas (from about 1 lb. pods or frozen peas, thawed)`;

const instruction_string = `Preheat oven to 350°. Toast pistachios on a rimmed baking sheet, tossing once, until golden brown, 5–8 minutes. Let cool, then coarsely chop.
Meanwhile, blend herbs, one of the chiles, lime juice, miso, ½ tsp. salt, and 2 Tbsp. water in a blender on high speed until well combined. Drizzle in ⅓ cup oil and continue to blend until sauce is very smooth. Taste sauce for heat; if it seems mild, add another chile or two. It should be slightly spicier than you’re comfortable with since it’s going to get mellowed out by everything that it’s tossed with. Season with salt if needed.
Heat remaining 3 Tbsp. oil in a large nonstick skillet over medium-high until very hot. Add rice, pressing down with a spatula in a single layer to create as much contact with surface of pan as possible. Reduce heat to medium and cook, undisturbed, until rice is deep golden brown underneath, 6–8 minutes. Season with salt.
While rice cooks, thinly slice snap peas and scallions on a long diagonal and transfer to a medium bowl. Add pistachios, feta, and raisins and toss to combine.
Add fresh peas to rice and continue to cook over medium heat, tossing often, until peas are just cooked through, about 2 minutes.
Transfer rice mixture to bowl with vegetables and toss to combine. Drizzle in herb sauce, tossing again to coat well. Taste and season with salt if needed.
`;

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
			name: "Untitled Recipe",
			desc: "",
			ingredient_string: "",
			instruction_string: "",
		};
	},
	methods: {
		save_recipe() {
			const recipeData = this.recipe_preview;
			const url = this.$store.state.api_url + "/recipe/import";
			jajax.post_json(url, recipeData, this.$store.state.jwt_token).then(function(resp) {
				if (resp.recipeID) {
					window.location.href = "/recipe/" + resp.recipeID + "/edit";
				}
			});
		},
	},
	computed: {
		recipe_preview(): Object {
			return {
				name: this.name,
				desc: this.desc,
				ingredients: this.ingredient_list,
				instructions: this.instruction_list,
				archived: false,
				last_updated: new Date().toJSON(),
			};
		},
		ingredient_list(): iparser.Ingredient[] {
			const ingredient_stringList = this.ingredient_string
				.split("\n")
				.map(x => x.trim())
				.filter(x => x.length > 0);
			const ingredient_list = ingredient_stringList.map(x => iparser.parse(x));
			return ingredient_list;
		},
		instruction_list(): Instruction[] {
			const instruction_list = this.instruction_string
				.split("\n")
				.map(x => x.trim())
				.filter(x => x.length > 0)
				.map(
					x =>
						({
							instruction: x,
							optional: false,
						} as Instruction)
				);
			return instruction_list;
		},
	},
});
</script>

<style scoped>
div >>> .v-expansion-panel-content__wrap {
	padding: 0px;
}
</style>
