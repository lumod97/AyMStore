import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import VueFeather from 'vue-feather'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueFeather)
Vue.component('vue-feather-icon', VueFeather);
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
