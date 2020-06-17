<template>
    <div>
        <v-btn @click="fork">
            <v-icon>
                call_split
            </v-icon>
            &nbsp;&nbsp;Fork Recipe
        </v-btn>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import * as jajax from "@/jajax"

export default Vue.extend({
	props: {
		recipeID: {
			type: String,
			required: true,
		},
	},
	methods: {
		fork() {
			let url = this.$store.state.api_url + "/recipe/" + this.recipeID + "/fork"
			jajax.getJSON(url, this.$store.state.jwt_token)
				.then((resp) => {
					this.$toast("Recipe Forked!")
					// this.$router.push("/recipe/" + resp.newID + "/edit")
					window.location.href = "/recipe/" + resp.newID + "/edit"
				}).catch((err) => {
					this.$toast(`Failed to fork recipe (Err Code: ${err.respCode})`, { color: "#d98303" })
				})
		},
	},
})
</script>
