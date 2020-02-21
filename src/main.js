import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import '@/assets/css/global.css'
Vue.config.productionTip = false
axios.defaults.withCredentials = true 
axios.defaults.crossDomain = true;
//允许跨域访问cookie
axios.defaults.baseURL = "http://192.168.14.57:3000"
Vue.prototype.$http = axios;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button,Card,Checkbox, CheckboxGroup,Stepper,SubmitBar} from 'vant';
Vue.use(ElementUI)
Vue.use(Button);
Vue.use(Card);
Vue.use(SubmitBar);
Vue.use(Stepper);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
