import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

//  +++++++     Nut UI 2.0
// import {Toast, Row, Col, ActionSheet, Dialog,DatePicker} from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';

import NutUI from '@nutui/nutui';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
NutUI.install(Vue);


import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)


import './lib/mui/css/mui.min.css'
//在mui的icon 找到指定的类 （图标拓展类）并引导入指定的 样式文件mui-icon-extra.ttf
import './lib/mui/css/icons-extra.css'


import { Base64 } from 'js-base64';
Vue.use(Base64);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
