<template>
    <div style="display: flex; justify-content: center; flex-wrap: wrap;">
		<v-card v-for="(recipe, recipeIndex) in recipeList" :key="recipeIndex" style="margin: 20px 14px; width: 220px; cursor: pointer;" @click="$router.push(`/recipe/${recipe.id}/edit`)">
			<h2>{{recipe.name}}</h2>
			Active Time: {{format_dt(recipe.active_time)}}
			<br>
			Total Time: {{format_dt(recipe.total_time)}}
			<br>
			Created on:
			{{when_created(recipe.id)}}
		</v-card>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import * as jajax from "@/jajax"
import moment from "moment"
const ObjectID = require("bson-objectid")

export default Vue.extend({
	data() {
		return {
			recipeList: [],
		}
	},
	methods: {
		format_duration(dur: number) {
			return dur ? moment.duration(dur).humanize() : "Unknown"
		},
		format_dt(dt: Date) {
			return dt ? moment(dt).format("L") : "Unknown"
		},
		when_created(id: string): string {
			return moment(ObjectID(id).getTimestamp()).format("l")
		},
		get_recipes() {
			let url = this.$store.state.api_url + "/recipe/list"
			jajax.getJSON(url, this.$store.state.jwt_token)
				.then((data) => {
					if (!data) data = []
					this.recipeList = data
				}).catch((err) => {
					this.$toast(`Failed to fetch recipe data (Err Code: ${err.respCode})`, { color: "#d98303" })
				})
		},
	},
	mounted() {
		this.$nextTick(function() {
			this.get_recipes()
		})
	},
})
</script>
