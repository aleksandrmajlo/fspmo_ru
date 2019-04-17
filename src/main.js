import Vue from 'vue'
import App from './App.vue'
import store from './store'

import vueEventCalendar from 'vue-event-calendar'
Vue.use(vueEventCalendar, {locale: 'ru'}) 

Vue.config.productionTip = false
             
if(document.getElementById('appcalendar')){
  new Vue({
    store,
    render: h => h(App)
  }).$mount('#appcalendar')
}
