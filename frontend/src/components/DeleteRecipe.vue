<template>
	<span>
		<v-btn @click="delete_recipe" small color="error">
			<i class="fas fa-trash" style="font-size: 18px; margin-right: 10px;" />
			Delete
		</v-btn>
	</span>
</template>

<script lang="ts">
import Vue from "vue";
import * as jajax from "@/jajax";

export default Vue.extend({
	props: {
		recipeID: {
			type: String,
			required: true,
		},
	},
	methods: {
		delete_recipe() {
			if (!confirm("Are you sure you want to delete this recipe! No take-backsies!")) {
				return;
			}
			this.$emit("delete");
			const url = this.$store.state.api_url + "/recipe/" + this.recipeID + "/delete";
			jajax
				.get_json(url, this.$store.state.jwt_token)
				.then(() => {
					this.$toast("Recipe Deleted!");
					// this.$router.push("/recipe/" + resp.newID + "/edit")
					window.location.href = "/";
				})
				.catch(err => {
					this.$toast(`Failed to delete recipe (Err Code: ${err.respCode})`, { color: "#d98303" });
				});
		},
	},
});
</script>
