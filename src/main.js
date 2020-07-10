import Vue from 'vue'
import App from './App'
import topHandle from '@/components/topHandle'
import '@/style/weui.wxss'
import '@/style/app.wxss'
import '@/icons'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.component('topHandle', topHandle)

const app = new Vue(App)
app.$mount()
