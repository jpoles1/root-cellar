<template>
	<center>
		<h2>Login Options:</h2>
		<hr />
		<br />
		<a :href="$store.state.api_url + '/auth/google'">
			<img src="/img/google_login.png" />
		</a>
	</center>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend();
</script>
