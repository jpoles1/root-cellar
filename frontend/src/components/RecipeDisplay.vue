<template>
	<div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
		<div style="text-align: left;" class="recipe-section">
			<h2>Ingredients</h2>
			<ul>
				<li v-for="(ingredient, ingredientIndex) in recipe.ingredients" :key="ingredientIndex">{{ ingredient.quantity }} {{ ingredient.unit }} of {{ ingredient.ingredient }}</li>
			</ul>
		</div>
		<div style="text-align: left;" class="recipe-section">
			<h2>Instructions</h2>
			<ol>
				<li v-for="(instruction, instructionIndex) in recipe.instructions" :key="instructionIndex">
					{{ instruction.instruction }}
				</li>
			</ol>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	props: {
		recipe: {
			type: Object,
			required: true,
		},
	},
});
</script>
