import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {components, plugins} from 'plugins/element_plus'
components.forEach((component) => {
  createApp(App).component(component.name, component)
})
plugins.forEach((plugin) => {
  createApp(App).use(plugin)
})
import '@/permission'
createApp(App).use(store).use(router).mount('#app')
console.log('%c '.concat('OMS', ' %c ').concat('订单系统前端调试', ' %c'), 'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;', 'background:'.concat('#2d8cf0', '; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;'), 'background:transparent')
