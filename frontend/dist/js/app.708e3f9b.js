(function(e){function t(t){for(var i,s,o=t[0],c=t[1],l=t[2],p=0,d=[];p<o.length;p++)s=o[p],r[s]&&d.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={app:0},a=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"012a":function(e,t,n){"use strict";var i=n("a569"),r=n.n(i);r.a},4678:function(e,t,n){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=a(e);return n(t)}function a(e){var t=i[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(i)},r.resolve=a,e.exports=r,r.id="4678"},"5c0b":function(e,t,n){"use strict";var i=n("5e27"),r=n.n(i);r.a},"5e27":function(e,t,n){},a569:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",{attrs:{id:"inspire"}},[!e.$vuetify.breakpoint.xs||e.openNav?n("v-navigation-drawer",{attrs:{id:"nav","mobile-break-point":"0",width:"200",fixed:"",app:"",clipped:"","mini-variant":!e.openNav}},[n("v-list",{attrs:{dense:""}},e._l(e.navEntries,function(t,i){return n("router-link",{directives:[{name:"show",rawName:"v-show",value:!t.hideEntry,expression:"!navEntry.hideEntry"}],key:i,staticClass:"nav-entry",attrs:{to:t.navURL},nativeOn:{click:function(t){e.openNav=!1}}},[n("v-list-tile",[n("v-list-tile-action",[n("v-icon",[e._v(e._s(t.navIcon))])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(t.navText))])],1)],1)],1)}),1)],1):e._e(),n("v-toolbar",{attrs:{color:"teal lighten-1",dark:"",fixed:"",app:"","clipped-left":""}},[n("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.openNav=!e.openNav}}}),n("router-link",{staticClass:"app-header-title",attrs:{to:"/"}},[n("v-toolbar-title",[e._v("Root Cellar")])],1)],1),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),n("v-footer",{attrs:{color:"teal lighten-1",app:""}})],1)],1)},a=[],s=i["default"].extend({data:function(){return{openNav:!1}},computed:{navEntries:function(){return[{navText:"Home",navIcon:"home",navURL:"/"},{navText:"Import",navIcon:"photo_camera",navURL:"/recipe/import",hideEntry:!this.$store.state.jwt_token},{navText:"Settings",navIcon:"settings_applications",navURL:"/settings/",hideEntry:!this.$store.state.jwt_token},{navText:"Admin",navIcon:"dvr",navURL:"/admin/",hideEntry:!this.$store.state.jwt_claims.is_admin},{navText:"Login",navIcon:"vpn_key",navURL:"/login",hideEntry:this.$store.state.jwt_token},{navText:"Logout",navIcon:"exit_to_app",navURL:"/logout",hideEntry:!this.$store.state.jwt_token}]}},mounted:function(){"127.0.0.1:8080"===window.location.host&&this.$store.commit("set_local_api")}}),o=s,c=(n("5c0b"),n("2877")),l=Object(c["a"])(o,r,a,!1,null,null,null),u=l.exports,p=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("Welcome to Root Cellar")]),e.$store.state.jwt_token?n("div",[n("hr",{staticStyle:{margin:"20px 0"}}),n("RecipeCreator"),n("hr",{staticStyle:{margin:"20px 0"}}),n("RecipeList")],1):n("div",[n("Login")],1)])},f=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Login Options:")]),n("hr"),n("br"),n("a",{attrs:{href:e.$store.state.api_url+"/auth/google"}},[n("img",{attrs:{src:"/img/google_login.png"}})])])},m=[],h=i["default"].extend(),_=h,g=Object(c["a"])(_,v,m,!1,null,null,null),b=g.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-btn",{attrs:{color:"blue-grey lighten-1",dark:""},on:{click:e.createRecipe}},[e._v("\n\t\tCreate New Recipe\n\t")])],1)},y=[];n("6762"),n("2fdb");function k(e,t,n){return x(e,"POST",t,n)}function w(e,t){return x(e,"GET",void 0,t)}function x(e,t,n,i){return new Promise(function(r,a){var s=new XMLHttpRequest;if(i&&(e.includes("?")||(e+="?"),e+="&jwt="+i),s.open(t,e,!0),n){var o=JSON.stringify(n);s.send(o)}else s.send();s.onerror=function(){throw Object({respCode:0,msg:"Could not connect to server!"})},s.onreadystatechange=function(){if(4===s.readyState)if(401===s.status&&(window.location.href="/login?source="+encodeURIComponent(window.location.href)),403===s.status&&(window.location.href="/"),302===s.status&&(window.location.href=s.responseText),200===s.status){var e=s.responseText,t=JSON.parse(e);r(t)}else a(Object({respCode:s.status,msg:s.responseText}))}})}var $=i["default"].extend({methods:{createRecipe:function(){var e=this,t=this.$store.state.api_url+"/recipe/new";w(t,this.$store.state.jwt_token).then(function(e){e.recipeID&&(window.location.href="/recipe/"+e.recipeID+"/edit")}).catch(function(t){e.$toast("Failed to create recipe (Err Code: ".concat(t.respCode,")"),{color:"#d98303"})})}}}),C=$,T=Object(c["a"])(C,j,y,!1,null,null,null),S=T.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"flex","justify-content":"center","flex-wrap":"wrap"}},[n("headful",{attrs:{title:"Root Cellar - Recipe List"}}),e._l(e.recipeList,function(t,i){return n("v-card",{key:i,staticClass:"recipe-list-card"},[n("div",[n("h3",{staticStyle:{cursor:"pointer"},on:{click:function(n){return e.$router.push("/recipe/"+t.id+"/")}}},[e._v(e._s(t.name))]),""!=t.servings?n("div",[e._v("Servings: "+e._s(t.servings))]):e._e(),""!=t.active_time?n("div",[e._v("Active Time: "+e._s(t.active_time)+" min")]):e._e(),""!=t.total_time?n("div",[e._v("Total Time: "+e._s(t.total_time)+" min")]):e._e(),e._v("\n\t\t\t\tCreated on: "+e._s(e.when_created(t.id))+"\n\t\t\t\t"),n("div",{staticStyle:{transform:"scale(0.8)","text-align":"center"}},[n("v-btn",{staticClass:"primary",attrs:{href:"/recipe/"+t.id+"/",small:"",fab:""}},[n("v-icon",[e._v("find_in_page")])],1),n("v-btn",{staticClass:"primary",attrs:{href:"/recipe/"+t.id+"/edit",small:"",fab:""}},[n("v-icon",[e._v("edit")])],1)],1)])])})],2)},R=[],E=n("c1df"),I=n.n(E),N=n("1a9a"),L=i["default"].extend({data:function(){return{recipeList:[]}},methods:{format_duration:function(e){return e?I.a.duration(e).humanize():"Unknown"},format_dt:function(e){return e?I()(e).format("L"):"Unknown"},when_created:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"l";return I()(new N(e).getTimestamp()).format(t)},get_recipes:function(){var e=this,t=this.$store.state.api_url+"/recipe/list";w(t,this.$store.state.jwt_token).then(function(t){t||(t=[]),e.recipeList=t}).catch(function(t){e.$toast("Failed to fetch recipe data (Err Code: ".concat(t.respCode,")"),{color:"#d98303"})})}},mounted:function(){this.$nextTick(function(){this.get_recipes()})}}),z=L,D=(n("012a"),Object(c["a"])(z,O,R,!1,null,"3431367c",null)),F=D.exports,q=i["default"].extend({name:"home",components:{RecipeCreator:S,RecipeList:F,Login:b}}),P=q,U=Object(c["a"])(P,d,f,!1,null,null,null),J=U.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Logging in...")]),n("br"),n("br"),void 0==e.serverError?n("md-progress-spinner",{attrs:{"md-diameter":60,"md-stroke":10,"md-mode":"indeterminate"}}):e._e(),void 0!=e.serverError?n("md-empty-state",{attrs:{"md-icon":"error","md-label":"Server Error: "+e.serverError,"md-description":"Failed to login, redirecting..."}}):e._e()],1)},M=[],W=n("768b"),B=(n("a481"),i["default"].extend({props:{provider:{type:String}},data:function(){return{serverError:void 0}},mounted:function(){this.$nextTick(function(){var e,t=this,n=this.$route.query;n.state&&n.code?(e=this.$store.state.api_url+"/auth/"+this.provider+"/callback",e+="?state="+encodeURIComponent(n.state),e+="&code="+encodeURIComponent(n.code),w(e,void 0).then(function(e){if(t.$store.commit("set_JWT_token",e.token),n.source){var i=n.source.replace(/~~/g,"?").replace(/~/g,"&");window.location.href=i}else window.location.href="/"}).catch(function(e){var n=Object(W["a"])(e,1),i=n[0];t.serverError=i,setTimeout(function(){window.location.href=t.$store.state.api_url+"/auth/"+t.provider},1500)})):window.location.href=this.$store.state.api_url+"/auth/"+this.provider})}})),H=B,K=Object(c["a"])(H,A,M,!1,null,null,null),G=K.exports,X=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Logging out:")])])}],V=i["default"].extend({mounted:function(){this.$nextTick(function(){this.$store.commit("set_JWT_token",void 0),window.location.href="/"})}}),Y=V,Z=Object(c["a"])(Y,X,Q,!1,null,null,null),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.recipe?n("div",[n("headful",{attrs:{title:"Root Cellar - "+e.recipe.name,description:"Root Cellar Recipes: Learn how to make "+e.recipe.name}}),n("h1",[e._v("\n\t\t\t"+e._s(e.recipe.name)+"\n\t\t")]),n("div",{staticStyle:{"margin-bottom":"8px"}},[""!=e.recipe.servings?n("div",[e._v("Servings: "+e._s(e.recipe.servings))]):e._e(),""!=e.recipe.active_time?n("div",[e._v("Active Time: "+e._s(e.recipe.active_time)+" min")]):e._e(),""!=e.recipe.total_time?n("div",[e._v("Total Time: "+e._s(e.recipe.total_time)+" min")]):e._e(),""!=e.recipe.url?n("div",[n("a",{attrs:{href:e.recipe.url,target:"_blank"}},[e._v("Original Recipe")])]):e._e()]),e.recipe.id!=e.recipe.parent_id?n("span",[e._v("\n\t\t\tForked from "),n("a",{attrs:{href:"/recipe/"+e.recipe.parent_id+"/"}},[e._v(e._s(e.recipe.parent_id.slice(0,6)))]),e._v(" at "+e._s(e.when_created(e.recipe.id,"LT on l"))+"\n\t\t")]):e._e(),n("div",{staticStyle:{"margin-top":"10px"}},[e.recipe.uid==e.$store.state.jwt_claims.id?n("v-btn",{attrs:{small:""},on:{click:function(t){return e.$router.push("/recipe/"+e.recipe.id+"/edit")}}},[n("v-icon",{staticStyle:{"font-size":"21px"}},[e._v("edit")]),e._v("\n\t\t\t\t  Edit\n\t\t\t")],1):e._e(),n("Fork",{attrs:{recipeID:e.recipe.id}})],1),n("hr",{staticStyle:{margin:"20px 0"}}),n("RecipeDisplay",{attrs:{recipe:e.recipe}})],1):e._e()},ne=[],ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"flex","justify-content":"space-around","flex-wrap":"wrap"}},[n("div",{staticClass:"recipe-section",staticStyle:{"text-align":"left"}},[n("h2",[e._v("Ingredients")]),n("ul",e._l(e.recipe.ingredients,function(t,i){return n("li",{key:i},[e._v("\n                "+e._s(t.quantity)+" "+e._s(t.unit)+" of "+e._s(t.ingredient)+"\n            ")])}),0)]),n("div",{staticClass:"recipe-section",staticStyle:{"text-align":"left"}},[n("h2",[e._v("Instructions")]),n("ol",e._l(e.recipe.instructions,function(t,i){return n("li",{key:i},[e._v("\n                "+e._s(t.instruction)+"\n            ")])}),0)])])},re=[],ae=i["default"].extend({props:{recipe:{type:Object,required:!0}}}),se=ae,oe=Object(c["a"])(se,ie,re,!1,null,null,null),ce=oe.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("v-btn",{attrs:{small:""},on:{click:e.fork}},[n("v-icon",[e._v("\n            call_split\n        ")]),e._v("\n          Fork\n    ")],1)],1)},ue=[],pe=i["default"].extend({props:{recipeID:{type:String,required:!0}},methods:{fork:function(){var e=this,t=this.$store.state.api_url+"/recipe/"+this.recipeID+"/fork";w(t,this.$store.state.jwt_token).then(function(t){e.$toast("Recipe Forked!"),window.location.href="/recipe/"+t.newID+"/edit"}).catch(function(t){e.$toast("Failed to fork recipe (Err Code: ".concat(t.respCode,")"),{color:"#d98303"})})}}}),de=pe,fe=Object(c["a"])(de,le,ue,!1,null,null,null),ve=fe.exports,me=n("1a9a"),he=i["default"].extend({components:{RecipeDisplay:ce,Fork:ve},props:{recipeID:{type:String}},data:function(){return{recipe:void 0}},methods:{when_created:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"l";return I()(new me(e).getTimestamp()).format(t)},fetch_recipe:function(){var e=this,t=this.$store.state.api_url+"/recipe/"+this.recipeID+"/view";w(t,this.$store.state.jwt_token).then(function(t){e.recipe=t}).catch(function(t){e.$toast("Failed to fetch recipe data (Err Code: ".concat(t.respCode,")"),{color:"#d98303"})})}},mounted:function(){var e=this;this.$nextTick(function(){e.fetch_recipe()})}}),_e=he,ge=Object(c["a"])(_e,te,ne,!1,null,null,null),be=ge.exports,je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("headful",{attrs:{title:"Root Cellar - Recipe Editor"}}),e.recipe?n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.name,expression:"recipe.name"}],staticClass:"recipe-title-input",attrs:{type:"text",placeholder:"Recipe Name"},domProps:{value:e.recipe.name},on:{input:function(t){t.target.composing||e.$set(e.recipe,"name",t.target.value)}}}),n("div",{staticClass:"recipe-header-inputs"},[n("v-text-field",{attrs:{label:"# of Servings",outline:""},model:{value:e.recipe.servings,callback:function(t){e.$set(e.recipe,"servings",t)},expression:"recipe.servings"}}),n("v-text-field",{attrs:{label:"Active Time",outline:"",suffix:"minutes"},model:{value:e.recipe.active_time,callback:function(t){e.$set(e.recipe,"active_time",t)},expression:"recipe.active_time"}}),n("v-text-field",{attrs:{label:"Total Time",outline:"",suffix:"minutes"},model:{value:e.recipe.total_time,callback:function(t){e.$set(e.recipe,"total_time",t)},expression:"recipe.total_time"}})],1),n("div",[n("a",{directives:[{name:"show",rawName:"v-show",value:""==e.recipe.url&&!e.show_url_input,expression:"recipe.url == '' && !show_url_input"}],on:{click:function(t){e.show_url_input=!0}}},[e._v("+ add recipe URL")]),""!=e.recipe.url||e.show_url_input?n("span",[e._v("\n\t\t\t\tURL: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.url,expression:"recipe.url"}],staticStyle:{border:"1px solid black","margin-left":"5px","font-size":"80%",padding:"2px"},attrs:{label:"Recipe URL"},domProps:{value:e.recipe.url},on:{input:function(t){t.target.composing||e.$set(e.recipe,"url",t.target.value)}}})]):e._e()]),n("br"),e.recipe.id!=e.recipe.parent_id?n("span",[e._v("\n\t\t\tForked from "),n("a",{attrs:{href:"/recipe/"+e.recipe.parent_id+"/"}},[e._v(e._s(e.recipe.parent_id.slice(0,6)))]),e._v(" at "+e._s(e.when_created(e.recipe.id,"LT on l"))+"\n\t\t")]):e._e(),n("div",{staticStyle:{"margin-top":"10px"}},[n("ForkRecipe",{attrs:{recipeID:e.recipeID}})],1),n("hr",{staticStyle:{margin:"20px 0"}}),n("div",{staticStyle:{display:"flex","justify-content":"space-around","flex-wrap":"wrap"}},[n("div",{staticClass:"recipe-section"},[n("h2",[e._v("Ingredients")]),e._l(e.recipe.ingredients,function(t,i){return n("div",{key:i,staticClass:"ingredient-entry"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.quantity,expression:"ingred.quantity",modifiers:{number:!0}}],staticClass:"ingredient-quantity-input",attrs:{type:"number",placeholder:"Amount"},domProps:{value:t.quantity},on:{input:function(n){n.target.composing||e.$set(t,"quantity",e._n(n.target.value))},blur:function(t){return e.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.unit,expression:"ingred.unit"}],staticClass:"ingredient-unit-input",attrs:{placeholder:"Unit"},domProps:{value:t.unit},on:{input:function(n){n.target.composing||e.$set(t,"unit",n.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.ingredient,expression:"ingred.ingredient"}],staticClass:"ingredient-ingredient-input",attrs:{placeholder:"Ingredient Name (backspace to clear)"},domProps:{value:t.ingredient},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:function(t){return e.check_empty_ingredient(t,i)}(t)},input:function(n){n.target.composing||e.$set(t,"ingredient",n.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.notes,expression:"ingred.notes"}],staticClass:"ingredient-notes-input",attrs:{placeholder:"Notes"},domProps:{value:t.notes},on:{input:function(n){n.target.composing||e.$set(t,"notes",n.target.value)}}})])}),n("v-btn",{staticClass:"raised",on:{click:e.add_ingredient}},[e._v("\n\t\t\t\t\tAdd Ingredient\n\t\t\t\t")])],2),n("div",{staticClass:"recipe-section"},[n("h2",[e._v("Instructions")]),e._l(e.recipe.instructions,function(t,i){return n("div",{key:i,staticClass:"ingredient-entry"},[n("div",{staticClass:"instruction-order"},[n("b",[e._v("#")]),n("input",{staticClass:"instruction-order-input",attrs:{type:"number",min:"1"},domProps:{value:i+1},on:{input:function(t){return e.rearrange_instructions(i,t)}}})]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.instruction,expression:"instruction.instruction"}],staticClass:"instruction-instruction-textarea",attrs:{placeholder:"Instructions..."},domProps:{value:t.instruction},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:function(t){return e.check_empty_instruction(t,i)}(t)},input:function(n){n.target.composing||e.$set(t,"instruction",n.target.value)}}})])}),n("v-btn",{staticClass:"raised",on:{click:e.add_instruction}},[e._v("\n\t\t\t\t\tAdd Instruction\n\t\t\t\t")])],2)]),n("div",[n("v-btn",{attrs:{color:"teal darker-4",dark:""},on:{click:e.save_recipe}},[e._v("Save")])],1)]):n("div",[n("h2",[e._v("Error fetching recipe data!")])])],1)},ye=[],ke=n("1a9a"),we=i["default"].extend({components:{ForkRecipe:ve},props:{recipeID:{type:String}},data:function(){return{recipe:void 0,saveTimeout:void 0,show_url_input:!1}},methods:{when_created:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"l";return I()(new ke(e).getTimestamp()).format(t)},add_ingredient:function(){this.recipe.ingredients.push({ingredient:"",quantity:0,unit:"",notes:""})},add_instruction:function(){this.recipe.instructions.push({instruction:"",optional:!1})},check_empty_ingredient:function(e,t){""===e.target.value&&this.recipe.ingredients.splice(t,1)},check_empty_instruction:function(e,t){""===e.target.value&&this.recipe.instructions.splice(t,1)},fetch_recipe:function(){var e=this,t=this.$store.state.api_url+"/recipe/"+this.recipeID+"/view";w(t,this.$store.state.jwt_token).then(function(t){t.uid===e.$store.state.jwt_claims["id"]?e.recipe=t:window.location.href="/"}).catch(function(t){e.$toast("Failed to fetch recipe data (Err Code: ".concat(t.respCode,")"),{color:"#d98303"})})},rearrange_instructions:function(e,t){var n=parseInt(t.target.value);isNaN(n)||(n--,void 0!==this.recipe&&(t.target.blur(),this.recipe.instructions.splice(n,0,this.recipe.instructions.splice(e,1)[0]),this.recipe_update()))},recipe_update:function(){clearTimeout(this.saveTimeout),this.saveTimeout=setTimeout(this.save_recipe,2500)},save_recipe:function(){var e=this,t=JSON.parse(JSON.stringify(this.recipe));t.last_updated=(new Date).toJSON();var n=this.$store.state.api_url+"/recipe/"+this.recipeID+"/update";k(n,t,this.$store.state.jwt_token).then(function(t){e.$toast("Recipe Saved!")}).catch(function(t){e.$toast("Failed to save recipe (Err Code: ".concat(t.respCode,")"),{color:"#d98303"})})}},watch:{recipe:{handler:function(){this.recipe_update()},deep:!0}},mounted:function(){var e=this;this.$nextTick(function(){e.fetch_recipe(),window.onbeforeunload=function(){return e.save_recipe()}})},beforeDestroy:function(){window.onbeforeunload=function(){}}}),xe=we,$e=(n("ed83"),Object(c["a"])(xe,je,ye,!1,null,null,null)),Ce=$e.exports,Te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("headful",{attrs:{title:"Root Cellar - Recipe Import"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticStyle:{"font-size":"28pt","text-align":"center","margin-bottom":"20px"},attrs:{type:"text",placeholder:"Recipe Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("div",{staticStyle:{display:"flex","justify-content":"space-around"}},[n("div",{staticClass:"recipe-section"},[n("h2",[e._v("Ingredients:")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.ingredient_string,expression:"ingredient_string"}],staticStyle:{width:"100%",height:"220px"},domProps:{value:e.ingredient_string},on:{input:function(t){t.target.composing||(e.ingredient_string=t.target.value)}}})]),n("div",{staticClass:"recipe-section"},[n("h2",[e._v("Instructions:")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.instruction_string,expression:"instruction_string"}],staticStyle:{width:"100%",height:"220px"},domProps:{value:e.instruction_string},on:{input:function(t){t.target.composing||(e.instruction_string=t.target.value)}}})])]),n("v-expansion-panel",[n("v-expansion-panel-content",{scopedSlots:e._u([{key:"header",fn:function(){return[n("div",[e._v("Preview Recipe")])]},proxy:!0}])},[n("v-card",[n("v-card-text",{staticClass:"grey lighten-4"},[n("RecipeDisplay",{attrs:{recipe:e.recipe_preview}})],1)],1)],1)],1),n("br"),n("div",[n("v-btn",{staticClass:"primary",on:{click:e.save_recipe}},[e._v("Save")])],1)],1)},Se=[];n("28a5"),n("7f7f"),n("c5f6"),n("6b54"),n("55dd"),n("bd86"),n("ac4d"),n("8a81"),n("ac6a"),n("456d"),n("4917");function Oe(e){if(e&&e.split(" ").length>1){var t=e.split(" "),n=Object(W["a"])(t,2),i=n[0],r=n[1],a=r.split("/"),s=Object(W["a"])(a,2),o=s[0],c=s[1],l=parseFloat(o)/parseFloat(c),u=parseInt(i)?parseInt(i)+l:l;return Ne(u)}if(!e||e.split("-").length>1)return e;var p=e.split("/"),d=Object(W["a"])(p,2),f=d[0],v=d[1];return v?Ne(parseFloat(f)/parseFloat(v)):f}function Re(e,t){var n=e.match(t);return n&&n[0]||""}var Ee={"½":"1/2","⅓":"1/3","⅔":"2/3","¼":"1/4","¾":"3/4","⅕":"1/5","⅖":"2/5","⅗":"3/5","⅘":"4/5","⅙":"1/6","⅚":"5/6","⅐":"1/7","⅛":"1/8","⅜":"3/8","⅝":"5/8","⅞":"7/8","⅑":"1/9","⅒":"1/10"};function Ie(e){var t=/^(\d+\/\d+)|(\d+\s\d+\/\d+)|(\d+-\d+)|(\d+\.\d+)|(\d+,\d)|\d+/g,n=/\d*[^\u0000-\u007F]+/g,i=/[^\u0000-\u007F]+/g;if(e.match(n)){var r=Re(e,t),a=Re(e,r?i:n);if(Ee[a])return["".concat(r," ").concat(Ee[a]),e.replace(Re(e,n),"").trim()]}return e.match(t)?[e.match(t)&&Re(e,t),e.replace(Re(e,t),"").trim()]:[null,e]}function Ne(e){if(isNaN(e))return"";var t=e.toString();return t.split(".")[0]+"."+t.split(".")[1].substring(0,3)}var Le={cup:["c","c.","C","Cups"],gallon:["gal"],ounce:["oz","oz."],pint:["pt","pts","pt."],pound:["lb","lb.","lbs","lbs.","Lb","Lbs"],quart:["qt","qt.","qts","qts."],tablespoon:["tbs","tbsp","tbsp.","Tbsp.","Tbsp","tbspn","T","T.","Tablespoons","Tablespoon"],teaspoon:["tsp","tspn","tsp.","Tsp.","tspn.","Tspn.","t","t."],gram:["g","g."],kilogram:["kg","kg.","Kg","Kg."],liter:["l","l.","L","L."],milligram:["mg","mg."],milliliter:["ml","ml.","mL","mL."],package:["pkg","pkgs"],stick:["sticks"],piece:["pcs","pcs."],pinch:["pinch"],small:["Small"],medium:["Medium"],large:["large","Large"]},ze={cup:"cups",gallon:"gallons",ounce:"ounces",pint:"pints",pound:"pounds",quart:"quarts",tablespoon:"tablespoons",teaspoon:"teaspoons",gram:"grams",kilogram:"kilograms",liter:"liters",milligram:"milligrams",milliliter:"milliliters",clove:"cloves",bag:"bags",box:"boxes",pinch:"pinches",can:"cans",slice:"slices",piece:"pieces"},De=(n("2f9c"),n("e619"),n("6c26"),n("d7fc"),n("b5d3"),n("b362"),n("e355"),n("98dd"),n("dd8c"),n("94f6"),n("32d9"),n("bf07"),n("c1d9"),n("7f3c"),n("994d"),n("2741"),n("6b5f"),n("47dd"),n("f6eb"),n("4269"),n("13cd"),n("cba1"),n("05b6"),n("d370"),n("e467"),n("df5b"),n("5d89"),n("7b9d").RegexpTokenizer,n("7b9d").WordTokenizer,n("7b9d").WordPunctTokenizer,n("a204"),n("4407"),n("aa30"),n("77b2"));n("cf40"),n("44dd"),n("f393"),n("e1ad"),n("e277"),n("66fa"),n("5c00").words,n("037f"),n("7c5b"),n("f638"),n("fdb3"),n("790c"),n("e38f"),n("3a46"),n("c3a9"),n("8f8b"),n("b69b").normalize_tokens,n("88aa").normalize_ja,n("178c"),n("e808"),new De;function Fe(e){if(Le[e]||ze[e])return[e];for(var t=0,n=Object.keys(Le);t<n.length;t++){var i=n[t],r=!0,a=!1,s=void 0;try{for(var o,c=Le[i][Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var l=o.value;if(e===l)return[i,e]}}catch(f){a=!0,s=f}finally{try{r||null==c.return||c.return()}finally{if(a)throw s}}}for(var u=0,p=Object.keys(ze);u<p.length;u++){var d=p[u];if(e===ze[d])return[d,e]}return[]}function qe(e){var t,n=e.trim(),i=Ie(n),r=Object(W["a"])(i,2),a=r[0],s=r[1];a=Oe(a),Re(s,/\(([^)]+)\)/)&&(t=Re(s,/\(([^)]+)\)/),s=s.replace(t,"").trim(),t=t.replace(/[()]/g,""));var o=Fe(s.split(" ")[0]),c=Object(W["a"])(o,2),l=c[0],u=c[1],p=u?s.replace(u,"").trim():s.replace(l,"").trim();return{quantity:parseFloat(a)||0,unit:l||void 0,ingredient:p,notes:t}}var Pe=i["default"].extend({components:{RecipeDisplay:ce},props:{recipeID:{type:String}},data:function(){return{name:"Untitled Recipe",desc:"",ingredient_string:"",instruction_string:""}},methods:{save_recipe:function(){var e=this.recipe_preview,t=this.$store.state.api_url+"/recipe/import";k(t,e,this.$store.state.jwt_token).then(function(e){e.recipeID&&(window.location.href="/recipe/"+e.recipeID+"/edit")})}},computed:{recipe_preview:function(){return{name:this.name,desc:this.desc,ingredients:this.ingredient_list,instructions:this.instruction_list,archived:!1,last_updated:(new Date).toJSON()}},ingredient_list:function(){var e=this.ingredient_string.split("\n").map(function(e){return e.trim()}).filter(function(e){return e.length>0}),t=e.map(function(e){return qe(e)});return t},instruction_list:function(){var e=this.instruction_string.split("\n").map(function(e){return e.trim()}).filter(function(e){return e.length>0}).map(function(e){return{instruction:e,optional:!1}});return e}}}),Ue=Pe,Je=Object(c["a"])(Ue,Te,Se,!1,null,null,null),Ae=Je.exports,Me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("center",{staticStyle:{"margin-top":"80px"}},[n("headful",{attrs:{title:"Root Cellar - 404"}}),n("h1",[e._v("404 - Not Found")]),n("h3",[e._v("Sorry, but we can't find what you're looking for!"),n("br"),e._v("We'll look into the root of your problem.")]),n("br"),n("br"),n("img",{attrs:{src:"/img/404.png"}})],1)},We=[],Be={},He=Be,Ke=Object(c["a"])(He,Me,We,!1,null,null,null),Ge=Ke.exports;i["default"].use(p["a"]);var Xe=new p["a"]({mode:"history",base:"/",routes:[{path:"/",component:J},{path:"/login",component:b},{path:"/logout",component:ee},{path:"/auth/:provider",component:G,props:!0},{path:"/recipe/import",component:Ae},{path:"/recipe/:recipeID/",component:be,props:!0},{path:"/recipe/:recipeID/edit",component:Ce,props:!0},{path:"*",component:Ge}]}),Qe=n("2f62"),Ve=n("0e44"),Ye=n("04e1"),Ze=n.n(Ye);i["default"].use(Qe["a"]);var et=new Qe["a"].Store({state:{api_url:"/api",jwt_token:void 0,jwt_claims:{}},mutations:{set_local_api:function(e){e.api_url="http://127.0.0.1:3005/api"},set_JWT_token:function(e,t){e.jwt_token=t;try{e.jwt_claims=Ze()(t)}catch(n){e.jwt_claims={}}}},actions:{},plugins:[Object(Ve["a"])()]}),tt=n("9483");Object(tt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("bf40");var nt=n("ce5b"),it=n.n(nt),rt=n("f041"),at=n.n(rt),st=n("ec02"),ot=n.n(st);i["default"].use(it.a),i["default"].use(at.a,{x:"left",timeout:2500,color:"#004D40"}),i["default"].component("headful",ot.a),i["default"].config.productionTip=!1,new i["default"]({router:Xe,store:et,render:function(e){return e(u)}}).$mount("#app")},e6e7:function(e,t,n){},ed83:function(e,t,n){"use strict";var i=n("e6e7"),r=n.n(i);r.a}});
//# sourceMappingURL=app.708e3f9b.js.map