import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VuePapaParse from 'vue-papa-parse'
import VueSocialSharing from 'vue-social-sharing'

Vue.use(VueSocialSharing);
Vue.use(VuePapaParse)

//import * as Papa from 'papaparse'
//Vue.use(Papa)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
