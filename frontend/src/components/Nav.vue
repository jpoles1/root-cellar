<template>
	<div>
		<v-navigation-drawer fixed v-model="openNav" app clipped>
			<v-list dense>
				<router-link v-for="(navEntry, navIndex) in navEntries" :key="navIndex"
				:to="navEntry.navURL" v-show="!navEntry.hideEntry" class="nav-entry">
					<v-list-tile>
						<v-list-tile-action>
							<v-icon>{{navEntry.navIcon}}</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>{{navEntry.navText}}</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</router-link>
			</v-list>
		</v-navigation-drawer>
		<v-toolbar color="teal lighten-1" dark fixed app>
			<v-toolbar-side-icon @click.stop="$emit('update:openNav', !openNav)"></v-toolbar-side-icon>
			<router-link to="/" class="app-header-title">
				<v-toolbar-title>Root Cellar</v-toolbar-title>
			</router-link>
		</v-toolbar>
	</div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
	props: {
		openNav: {
			type: Boolean,
		},
	},
	computed: {
		navEntries: function() {
			return [
				{ navText: "Home", navIcon: "home", navURL: "/" },
				{ navText: "Import", navIcon: "photo_camera", navURL: "/recipe/import", hideEntry: !this.$store.state.jwtToken },
				{ navText: "Settings", navIcon: "settings_applications", navURL: "/settings/", hideEntry: !this.$store.state.jwtToken },
				{ navText: "Admin", navIcon: "dvr", navURL: "/admin/", hideEntry: !this.$store.state.jwtClaims.isAdmin },
				{ navText: "Login", navIcon: "vpn_key", navURL: "/login", hideEntry: this.$store.state.jwtToken },
				{ navText: "Logout", navIcon: "exit_to_app", navURL: "/logout", hideEntry: !this.$store.state.jwtToken },
			]
		},
	},
})
</script>

<style scoped>
	.app-header-title{
		color: white;
	}
	a {
		color: black;
		text-decoration: none;
	}
</style>
