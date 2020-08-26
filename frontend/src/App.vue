<template>
	<v-app>
		<v-navigation-drawer :permanent="open_nav" clipped app :expand-on-hover="!open_nav" :mini-variant="!open_nav" width="200" mobile-breakpoint="0" :temporary="$vuetify.breakpoint.xs" v-if="!$vuetify.breakpoint.xs || open_nav">
			<v-list dense nav>
				<v-list-item v-for="(nav_entry, nav_index) in nav_entries.filter(x => !x.hide_entry)" :key="nav_index" link :to="nav_entry.nav_url" @click.native="open_nav = false">
					<v-list-item-icon>
						<i :class="'fas fa-' + nav_entry.nav_icon" style="font-size: 140%;"></i>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>{{ nav_entry.nav_text }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar clipped-left app color="blue darken-3" dark>
			<v-app-bar-nav-icon @click.stop="open_nav = !open_nav"><i class="fas fa-bars"></i></v-app-bar-nav-icon>
			<v-toolbar-title style="width: 300px" class="ml-0 pl-4">
				<span class="hidden-sm-and-down">Root Cellar</span>
			</v-toolbar-title>
			<!--<v-text-field flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="Search" class="hidden-sm-and-down"></v-text-field>
			<v-spacer></v-spacer>-->
		</v-app-bar>
		<v-main>
			<v-container fluid>
				<v-fade-transition mode="out-in">
					<center>
						<router-view></router-view>
					</center>
				</v-fade-transition>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
	data() {
		return {
			open_nav: false,
		};
	},
	computed: {
		nav_entries: function() {
			return [
				{ nav_text: "Home", nav_icon: "home", nav_url: "/" },
				{ nav_text: "Import", nav_icon: "camera", nav_url: "/recipe/import", hide_entry: !this.$store.state.jwt_token },
				{ nav_text: "Settings", nav_icon: "cogs", nav_url: "/settings/", hide_entry: !this.$store.state.jwt_token },
				/*{ nav_text: "Login", nav_icon: "key", nav_url: "/login", hide_entry: this.$store.state.jwt_token },*/
				{ nav_text: "Logout", nav_icon: "sign-out-alt", nav_url: "/logout", hide_entry: !this.$store.state.jwt_token },
			];
		},
	},
	mounted() {
		if (window.location.host === "127.0.0.1:8080") {
			this.$store.commit("set_local_api");
		}
	},
});
</script>
