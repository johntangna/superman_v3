import request from 'utils/request'
import {stringify} from 'qs'
const defaultSetting = require('@/setting')

export function login(data){
  data.ip = defaultSetting.viewHost
  return request({
    url : '/sso/ajaxLogin.html',
    method : 'post',
    data : stringify(data)
  })
}
export function logout() {
  return request({
    url: '/sso/logout.html',
    method: 'post'
  })
}
export function getInfo(token) {
  return request({
    url: 'user/info',
    method: 'get',
    params: { token }
  })
}
export function getUserSectionInfoByToken() {
  return request({
    url: '/sys/user/getUserSectionInfoByToken',
    method: 'get'
  })
}
export function getRoutes(token) {
  return request({
    url: '/sys/permission/getUserPermissionByToken',
    method: 'get',
    params: { token }
  })
}
export function save(params) {
  return request({
    url: '/sys/user/add',
    method: 'post',
    data: params
  })
}
export function edit(params) {
  return request({
    url: '/sys/user/edit',
    method: 'put',
    data: params
  })
}
export function del(params) {
  return request({
    url: '/sys/user/delete',
    method: 'delete',
    params
  })
}
export function userRoleList(params) {
  return request({
    url: '/sys/user/userRoleList',
    method: 'get',
    params
  })
}
export function userList(params) {
  return request({
    url: '/sys/user/list',
    method: 'get',
    params
  })
}