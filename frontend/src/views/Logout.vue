<template>
	<div>
		<!--<headful
			title="Caseen - Log Out"
		/>-->
		<h2>Logging out:</h2>
		<!--<br><br>
		<md-progress-spinner
			:md-diameter="60"
			:md-stroke="10"
			md-mode="indeterminate">
		</md-progress-spinner>-->
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	mounted: function() {
		this.$nextTick(function() {
			this.$store.commit("set_JWT_token", undefined);
			window.location.href = "/";
		});
	},
});
</script>
