<template>
	<div>
		<h2>Logging in...</h2>
		<br /><br />
		<md-progress-spinner v-if="serverError == undefined" :md-diameter="60" :md-stroke="10" md-mode="indeterminate"> </md-progress-spinner>
		<md-empty-state v-if="serverError != undefined" md-icon="error" :md-label="'Server Error: ' + serverError" md-description="Failed to login, redirecting..."> </md-empty-state>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import * as jajax from "@/jajax";

export default Vue.extend({
	props: {
		provider: {
			type: String,
		},
	},
	data: function() {
		return {
			serverError: undefined,
		};
	},
	mounted: function() {
		this.$nextTick(function() {
			const urlParams = this.$route.query;
			let url;
			if (!(urlParams.state && urlParams.code)) {
				window.location.href = this.$store.state.api_url + "/auth/" + this.provider;
				return;
			}
			url = this.$store.state.api_url + "/auth/" + this.provider + "/callback";
			url += "?state=" + encodeURIComponent(urlParams.state as string);
			url += "&code=" + encodeURIComponent(urlParams.code as string);

			jajax
				.get_json(url, undefined)
				.then(data => {
					this.$store.commit("set_JWT_token", data.token);
					// Redirect after login
					if (urlParams.source) {
						const authSource = (urlParams.source as string).replace(/~~/g, "?").replace(/~/g, "&");
						window.location.href = authSource;
					} else {
						window.location.href = "/";
					}
				})
				.catch(([xhrStatus]) => {
					this.serverError = xhrStatus;
					setTimeout(() => {
						window.location.href = this.$store.state.api_url + "/auth/" + this.provider;
					}, 1500);
				});
		});
	},
});
</script>
