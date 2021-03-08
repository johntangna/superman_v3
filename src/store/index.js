import { createStore } from 'vuex'
import getters from './getters'
const requireModule = require.context('./modules',false,/\.js$/)
const moduleAll = {}
requireModule.keys().forEach((filename)=>{
  if(filename == './index.js') return
  const modulename = filename.replace(/(\.\/|\.js)/g,'')
  moduleAll[modulename] = {
    namespaced : true,
    ...requireModule(filename).default
  }
})
export default createStore({
  modules : {
    ...moduleAll
  },
  getters
})
