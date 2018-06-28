// vue base
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// language plugin
import VueI18n from 'vue-i18n'

// language json
import idLang from './assets/lang/id_ID'
import zhLang from './assets/lang/zh_CN'
import enLang from './assets/lang/en_US'
// element-ui-lang
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import idLocale from 'element-ui/lib/locale/lang/id'

// popup and message
import VueSweetalert2 from 'vue-sweetalert2';
import VueLocalStorage from 'vue-localstorage'

// reset css global css and themes
import 'normalize.css'
import './assets/css/base.scss'
import './assets/css/theme_base.scss'

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
// 在vue内注册
Vue.use(VueI18n)
Vue.use(VueSweetalert2)
Vue.use(VueLocalStorage)

// language presets
const messages = {
  'zh_CN': Object.assign(zhLocale, zhLang),
  'id_ID': Object.assign(idLocale, idLang),
  'en_US': Object.assign(enLocale, enLang)
}

// Create VueI18n instance with options
const defaultLang = 'en_US'
const i18n = new VueI18n({
  locale: defaultLang, // set locale
  fallbackLocale: defaultLang,
  messages // set locale messages
})

// elemenui language set By vue-i18n plugin
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

// swal 默认按钮和国际化
Vue.swal.setDefaults({
  confirmButtonText: i18n.t('确认'),
  cancelButtonText: i18n.t('取消')
})

global.$vue = new Vue({
  localStorage: {
    'defaultLang': { default: defaultLang }, // 默认语言设置
    'lang': { default: defaultLang } // 初次进入语言设置为默认语言,默认系统语言
  },
  i18n,
  router,
  store,
  render: h => h(App)
})
global.$vue.$mount('#app')
