import Vue from 'vue'
import App from './App.vue'

import ExtractBaseUri from './mixins/ExtractBaseUri'

Vue.config.productionTip = false
Vue.mixin(ExtractBaseUri);
new Vue({
  render: h => h(App),
}).$mount('#app')
