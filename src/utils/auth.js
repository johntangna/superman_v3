import Cookies from 'js-cookie'
window.Cookies = Cookies
const TokenKey = 'X-Access-Token'
const CookieKey = 'TGC'

export function getToken(){
  return Cookies.get(TokenKey)
}
export function setToken(token){
  return Cookies.set(TokenKey,token)
}

export function setCookie(value){
  return Cookies.set(CookieKey,value)
}
export function getCookie(){
  return Cookies.get(CookieKey)
}

export function removeToken(){
  Cookies.remove(CookieKey)
  return Cookies.remove(TokenKey)
}