<template>
	<v-card style="text-align: left; background-color: #efefef; margin: 10px; padding: 10px;">
		<h2>Family Tree</h2>
		<div style="display: flex; justify-content: space-around" id="tree">
			<div style="width: 58%;">
				<v-treeview activatable :items="tree" item-key="recipe.id" item-text="recipe.name" :active.sync="active_recipe_id" hoverable>
					<template v-slot:label="{ item }">
						<div :style="{ 'background-color': item.recipe.id == recipeID ? '#acdde6' : 'auto', height: '100%', padding: '5px', 'border-radius': '4px' }">
							{{ item.recipe.name }} - {{ item.recipe.id.slice(0, 3) }}{{ item.recipe.id.slice(-3) }}
						</div>
					</template>
				</v-treeview>
			</div>
			<div style="width: 45%">
				<h3>Recipe Info:</h3>
				<hr style="margin: 6px 0;" />
				<div v-if="active_recipe">
					<b>Name:</b> {{ active_recipe.name }}
					<br />
					<b>Last Updated:</b> {{ active_recipe.last_updated }}
					<hr style="margin: 8px 0;" />
					<v-btn :href="`/recipe/${active_recipe.id}`" target="_blank" small primary><i class="fas fa-search" style="margin-right: 6px;" />View</v-btn>
					<span v-show="active_recipe.uid == $store.state.jwt_claims['id']">
						<span style="margin-left: 10px;" />
						<v-btn :href="`/recipe/${active_recipe.id}`" target="_blank" small primary><i class="fas fa-pencil-alt" style="margin-right: 6px;" /> Edit</v-btn>
					</span>
				</div>
			</div>
		</div>
	</v-card>
</template>

<script lang="ts">
import Vue from "vue";
import * as jajax from "@/jajax";
import { Recipe } from "@/recipe";

interface TreeNode {
	recipe: Recipe;
	children: TreeNode[];
}

export default Vue.extend({
	props: {
		recipeID: {
			type: String,
			required: true,
		},
		ogID: {
			type: String,
			required: true,
		},
	},
	data: function() {
		return {
			active_recipe_id: [],
			tree: [] as TreeNode[],
			recipe_lookup: {},
		};
	},
	computed: {
		active_recipe(): Recipe | undefined {
			const id = this.active_recipe_id[0];
			if (!id) return undefined;
			return id in this.recipe_lookup ? this.recipe_lookup[id] : undefined;
		},
	},
	mounted: function() {
		const url = this.$store.state.api_url + "/recipe/" + this.ogID + "/tree";
		jajax
			.get_json(url, this.$store.state.jwt_token)
			.then(resp => {
				if (resp != undefined) {
					this.tree = [resp];
				}
				const tree_collapse = (agg: { [id: string]: Recipe }, t: TreeNode): { [id: string]: Recipe } => {
					agg[t.recipe.id] = t.recipe;
					agg = t.children.reduce(tree_collapse, agg);
					return agg;
				};
				this.recipe_lookup = tree_collapse({}, this.tree[0]);
				console.log(this.recipe_lookup);
			})
			.catch(err => {
				console.log(err);
				this.$toast(`Failed to fork recipe (Err Code: ${err.respCode})`, { color: "#d98303" });
			});
	},
});
</script>

<style scoped>
#tree >>> .v-treeview-node__root {
	min-height: 0px;
}
</style>
