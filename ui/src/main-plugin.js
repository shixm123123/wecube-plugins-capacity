import Vue from 'vue'
import router from './router-plugin'
// import routerP from './router-plugin-p'
import '@/assets/css/local.bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.css'
import './plugins/iview.js'
import httpRequestEntrance from '@/assets/js/httpRequestEntrance.js'
import jquery from 'jquery'
import {tableUtil} from '@/assets/js/tableUtil.js'
import {validate} from '@/assets/js/validate.js'
import VeeValidate from '@/assets/veeValidate/VeeValidate'
import apiCenter from '@/assets/config/api-center.json'
import vuex from 'vuex'
const eventBus = new Vue()

window.use(vuex)
window.addOptions({
  $httpRequestEntrance: httpRequestEntrance,
  JQ: jquery,
  $validate: validate,
  $tableUtil: tableUtil,
  apiCenter: apiCenter,
  $eventBus: eventBus
})

const implicitRoute = {
}
window.addImplicitRoute(implicitRoute)
// window.addRoutersWithoutPermission(routerP, 'capacity')
window.addRoutes(router, 'capacity')

import ModalComponent from '@/components/modal'
window.component('ModalComponent', ModalComponent)
window.use(VeeValidate)

import en_local from '@/assets/locale/lang/en.json'
import zh_local from '@/assets/locale/lang/zh-CN.json'
window.locale('en-US',en_local)
window.locale('zh-CN',zh_local)
