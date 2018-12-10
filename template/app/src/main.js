import Vue from 'vue'
import App from './components/layout/HelloWorld.vue'
import router from './router'
import izy from 'izy';
import VueHighlightJS from 'vue-highlightjs'

import '@iqiyi/izy/dist/styles/izy.css';
import 'highlight.js/styles/default.css';

Vue.config.productionTip = false;

//use
Vue.use(VueHighlightJS);
Vue.use(izy);

Vue.prototype.$Message = izy.Message;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
