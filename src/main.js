import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/icons'
import 'bootstrap-4-grid';
var VueScrollTo = require('vue-scrollto');
 
Vue.config.productionTip = false

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
