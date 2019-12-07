// import firebase from 'firebase/app'
// import 'firebase/auth'
import axios from 'axios'
import { currentUser, apiUrl } from '../../constants/config'

export default {
  state: {
    currentUser: localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null,
    searchUsers: localStorage.getItem('searchUsers') != null ? JSON.parse(localStorage.getItem('searchUsers')) : null,
    loginError: null,
    processing: false,
    forgotMailSuccess:null,
    resetPasswordSuccess:null
  },
  getters: {
    searchUsers: state => state.searchUsers,
    currentUser: state => state.currentUser,
    processing: state => state.processing,
    loginError: state => state.loginError,
    forgotMailSuccess: state => state.forgotMailSuccess,
    resetPasswordSuccess:state => state.resetPasswordSuccess,
  },
  mutations: {
    setSearchUsers(state, payload) {
      state.searchUsers = payload
      state.processing = false
      state.loginError = null
    },
    setUser(state, payload) {
      state.currentUser = payload
      state.processing = false
      state.loginError = null
    },
    setLogout(state) {
      state.currentUser = null
      state.processing = false
      state.loginError = null
    },
    setProcessing(state, payload) {
      state.processing = payload
      state.loginError = null
    },
    setError(state, payload) {
      state.loginError = payload
      state.currentUser = null
      state.processing = false
    },
    setForgotMailSuccess(state) {
      state.loginError = null
      state.currentUser = null
      state.processing = false
      state.forgotMailSuccess=true
    },
    setResetPasswordSuccess(state) {
      state.loginError = null
      state.currentUser = null
      state.processing = false
      state.resetPasswordSuccess=true
    },
    clearError(state) {
      state.loginError = null
    }
  },
  actions: {
    login({ commit }, payload) {
      commit('clearError')
      commit('setProcessing', true)
      axios.post(apiUrl + '/login', payload)
        .then(res => {
          console.log(res);
          const item = res.data.meta.token
          localStorage.setItem('token', JSON.stringify(item))
          localStorage.setItem('user', JSON.stringify(res.data.data[0]))
          commit('setUser', JSON.stringify(res.data.data[0]))
        })
    },

    searchUsers({ commit }, payload) {
      const bodyRecord = {
        token: JSON.parse(localStorage.getItem('token')),
        tags: payload.search,
      };
      axios.post(apiUrl + '/users', bodyRecord)
        .then((response) => {
          let users = response.data;
          localStorage.removeItem('searchUsers');
          commit('setSearchUsers', JSON.stringify(res.data.data[0]))
        })
    },
    
    signOut({ commit }) {
      axios.post(apiUrl + '/logout',  { headers: { Authorization: JSON.parse(localStorage.getItem('token'))} })
        .then(() => {
          localStorage.removeItem('user')
          setSearchUsers()
        })
    },

    saveQuestionary({ commit }, payload) {
      const bodyRecord = {
        token: JSON.parse(localStorage.getItem('token')),
        profile: payload.currentUser.profile
      };
      axios.put(apiUrl + '/users/' + payload.currentUser._id,  bodyRecord)
        .then(() => {})
    }
  }
}
