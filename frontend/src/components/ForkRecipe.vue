<template>
	<span>
		<v-btn @click="fork" small>
			<i class="fas fa-code-branch" style="font-size: 18px; margin-right: 10px;" />
			Fork
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
		fork() {
			if (!confirm("Are you sure you want to fork (this will create a copy to modify)?")) {
				return;
			}
			const url = this.$store.state.api_url + "/recipe/" + this.recipeID + "/fork";
			jajax
				.get_json(url, this.$store.state.jwt_token)
				.then(resp => {
					this.$toast("Recipe Forked!");
					// this.$router.push("/recipe/" + resp.newID + "/edit")
					window.location.href = "/recipe/" + resp.newID + "/edit";
				})
				.catch(err => {
					this.$toast(`Failed to fork recipe (Err Code: ${err.respCode})`, { color: "#d98303" });
				});
		},
	},
});
</script>
