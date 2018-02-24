// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import VueCorvova from 'vue-cordova'


import {
  AlertPlugin,
  ToastPlugin,
  LoadingPlugin,
  ConfirmPlugin
} from 'vux'

Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)

Vue.use(VueCorvova)
Vue.use(Vuex)
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
// document.addEventListener('deviceready', function() {
//   new Vue({
//     el: '#app', router, store,
//     template: '<App/>',
//     components: { App }
//   })
//   window.navigator.splashscreen.hide() },
//   false);
