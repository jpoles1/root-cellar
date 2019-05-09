<template>
	<div id="app">
		<v-app id="inspire">
			<v-navigation-drawer id="nav"
			mobile-break-point=0 width=200
			fixed app clipped :mini-variant="!openNav">
				<v-list dense>
					<router-link v-for="(navEntry, navIndex) in navEntries" :key="navIndex"
					:to="navEntry.navURL" v-show="!navEntry.hideEntry" class="nav-entry"
					@click.native="openNav = false">
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
			<v-toolbar color="teal lighten-1" dark fixed app clipped-left>
				<v-toolbar-side-icon @click.stop="openNav = !openNav"></v-toolbar-side-icon>
				<router-link to="/" class="app-header-title">
					<v-toolbar-title>Root Cellar</v-toolbar-title>
				</router-link>
			</v-toolbar>
			<v-content>
				<v-container fluid>
					<router-view/>
				</v-container>
			</v-content>
			<v-footer color="teal lighten-1" app>
			</v-footer>
		</v-app>
	</div>
</template>

<script>
import Vue from "vue"

export default Vue.extend({
	data() {
		return {
			openNav: false,
		}
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
	mounted() {
		if (window.location.host === "127.0.0.1:8080") {
			this.$store.commit("setLocalAPI")
		}
	},
})
</script>

<style lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
#nav {
	padding-top: 15px;
	a {
		font-weight: bold;
		color: #2c3e50;
		text-decoration: none;
		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
.app-header-title{
	color: white;
	text-decoration: none;
}
</style>
