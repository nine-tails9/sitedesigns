import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './router.js'
import store from './store/store'
import Vuetify from 'vuetify'
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuetify);
export const bus = new Vue();
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router: router
})
