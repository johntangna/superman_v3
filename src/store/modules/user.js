import {
  login,
  logout,
  getInfo,
  getUserSectionInfoByToken
} from '@/api/user'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  login({
    commit
  }, userInfo) {
    const {
      username,
      password
    } = userInfo
    return new Promise((resolve, reject) => {
      login({
        userName: username.trim(),
        password: password
      }).then(res => {
        commit('SET_TOKEN', res.token)
        setToken(res.token)
        resolve()
      }).catch(e => {
        reject(e)
      })
    })
  },
  logout({commit, state, dispatch}){
    return new Promise((resolve,reject)=>{
      logout(state.token).then(()=>{
        removeToken()
        dispatch('tagsView/delAllViews', null, { root: true })
        commit('RESET_STATE')
        resolve()
      }).catch(e=>{
        reject(e)
      })
    })
  },
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  },
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { result } = response
        if (!result) {
          reject('Verification failed, please Login again.')
        }
  
        const { roles, name, avatar } = result
  
        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }
  
        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        resolve(result)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getUserSectionInfoByToken({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserSectionInfoByToken().then(response => {
        const { result } = response
        if (!result) {
          reject('Verification failed, please Login again.')
        }
  
        const { sysUserName } = result
  
        // roles must be a non-empty array
        if (!sysUserName) {
          reject('getInfo: roles must be a non-null array!')
        }
        commit('SET_NAME', sysUserName)
        resolve(result)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
