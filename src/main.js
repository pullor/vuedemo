// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vconsole from './assets/util'
import vuecomponents from './util/rendercomment'

Vue.config.productionTip = false

/* eslint-disable no-new */
// Vue.component('morediv', {
//   render: function (createElement) {
//       return createElement('div',
//         Array.apply(null, { length: 100 }).map(function () {
//           return createElement('p', 'hi')
//         })
//       )
//     }
// })

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

