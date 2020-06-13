<template>
  <input v-model="humanDuration" @blur="emitUpdate">
</template>

<script lang="ts">
import Vue from "vue"
import moment from "moment"
import parse_duration from "parse-duration"

export default Vue.extend({
	props: ["value"],
	methods: {
		emitUpdate(e: any) {
			console.log(e.target.value, parse_duration(e.target.value))
			this.$emit("input", parse_duration(e.target.value))
		},
	},
	computed: {
		humanDuration: {
			get(): string {
				return moment.duration(this.value).humanize()
			},
			set(dur: string) {
				this.$emit("input", this.humanDuration)
			},
		},
	},
})
</script>
