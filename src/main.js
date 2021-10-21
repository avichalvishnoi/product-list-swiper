import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
//import VuePapaParse from "https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.1/papaparse.min.js"
<<<<<<< HEAD
import VuePapaParse from 'vue-papa-parse'
//import VuePapaParse from 'papaparse'
=======
//import VuePapaParse from 'vue-papa-parse'
import VuePapaParse from 'papaparse'
>>>>>>> 8987290decb8c324e1e24f15d5d9802c3d9a2875

Vue.use(VuePapaParse)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
