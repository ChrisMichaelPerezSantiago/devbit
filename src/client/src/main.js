import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueCompositionAPI from '@vue/composition-api';
import hooks from '@u3u/vue-hooks';

require('./assets/css/app.css');
require('./assets/css/login.css');
require('./assets/css/signin.css');
require('./assets/css/footer.css');

Vue.config.productionTip = false;

Vue.use(hooks);
Vue.use(VueCompositionAPI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
