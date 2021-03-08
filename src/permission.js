import router from './router'
import store from './store'

import {ElMessage} from 'element-plus'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import {getToken} from 'utils/auth'
import getPageTitle from 'utils/getPageTitle'

NProgress.configure({showSpinner : false})

const whiteList = ['/login']

router.beforeEach(async (to,from)=>{
  NProgress.start()
  
  document.title = getPageTitle(to.meta.title)
  
  const hasToken = false
  
  if(hasToken){
    if(to.path === './login'){
      NProgress.done()
      return './'
    }
    const hasName = store.getters.name
    if(hasName){
      return true
    } else {
      try{
        await store.dispatch('user/getUserSectionInfoByToken')
        const accessRoutes = await store.dispatch('permission/generateRoutes',[])
        router.addRoutes(accessRoutes)
        router.push({...to,replace : true})
      }catch(e){
        //TODO handle the exception
        ElMessage.error(e || 'has error')
        await store.dispatch('user/resetToken')
        NProgress.done()
        return `/login?redirect=${to.path}`
      }
    }
  } else {
    if(whiteList.indexOf(to.path) !== -1){
      return true
    } else {
      NProgress.done()
      return `/login?redirect=${to.path}`
    }
  }
})

router.afterEach((to,from,failure)=>{
  NProgress.done()
})