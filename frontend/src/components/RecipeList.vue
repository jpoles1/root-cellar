<template>
    <div style="display: flex; justify-content: center; flex-wrap: wrap;">
		<v-card v-for="(recipe, recipeIndex) in recipeList" :key="recipeIndex" class="recipe-list-card">
			<div>
				<h3 @click="$router.push(`/recipe/${recipe.id}/`)" style="cursor: pointer">{{recipe.name}}</h3>
				<div v-if="recipe.servings != ''">Servings: {{recipe.servings}}</div>
				<div v-if="recipe.active_time != ''">Active Time: {{format_dt(recipe.active_time)}}</div>
				<div v-if="recipe.total_time != ''">Total Time: {{format_dt(recipe.total_time)}}</div>
				Created on: {{when_created(recipe.id)}}
				<div style="transform: scale(0.8); text-align: center;">
					<v-btn :href="`/recipe/${recipe.id}/`" class="primary" small fab><v-icon>find_in_page</v-icon></v-btn>
					<v-btn :href="`/recipe/${recipe.id}/edit`" class="primary" small fab><v-icon>edit</v-icon></v-btn>
				</div>
			</div>
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
		when_created(id: string, formatter: string = "l"): string {
			return moment(new ObjectID(id).getTimestamp()).format(formatter)
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

<style scoped>
	.recipe-list-card {
		margin: 20px 14px;
		width: 300px;
		padding: 12px 10px 4px 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
