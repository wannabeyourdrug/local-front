// import firebase from 'firebase/app'
// import 'firebase/auth'
import axios from 'axios'
import { currentUser, apiUrl } from '../../constants/config'

export default {
  state: {
    currentUser: localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null,
    users: null,
    loginError: null,
    processing: false,
    forgotMailSuccess:null,
    resetPasswordSuccess:null
  },
  getters: {
    users: state => state.users,
    currentUser: state => state.currentUser,
    processing: state => state.processing,
    loginError: state => state.loginError,
    forgotMailSuccess: state => state.forgotMailSuccess,
    resetPasswordSuccess:state => state.resetPasswordSuccess,
  },
  mutations: {
    setSearchUsers(state, payload) {
      state.users = payload
      state.processing = false
      state.loginError = null
    },
    setUser(state, payload) {
      state.currentUser = JSON.parse(payload)
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
          const item = res.data.meta.token
          localStorage.setItem('token', item)
          const user = res.data.data[0];
          if (!user.profile) user.profile = {};
          if (!user.scores) user.scores = {};
          localStorage.setItem('user', JSON.stringify(user))
          commit('setUser', JSON.stringify(res.data.data[0]))
        }).catch(e => {
          commit('setError', e);
        })
    },

    searchUsers({ commit }, payload) {

      axios
        .post(`${apiUrl}/users`, payload, {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        })
        .then(r => r.data)
        .then(res => {
          console.log(res);
          
          commit('setSearchUsers', res.data)
        })
        .catch(e => console.log(e))

      // const bodyRecord = {
      //   //token: JSON.parse('"'+ localStorage.getItem('token') + '"'),
      //   tags: payload.search,
      // };
      // console.log(bodyRecord);
      // axios.post(apiUrl + '/users', bodyRecord, { headers: { Authorization: localStorage.getItem('token')}})
      //   .then((response) => {
      //     let users =  [];
      //     try {
      //      users = response.data.data || [];
      //     //localStorage.setItem('searchUsers', JSON.stringify(users));
      //     commit('setSearchUsers', JSON.stringify(users))
      //     } catch(e) {
      //       users = [];
      //       localStorage.setItem('searchUsers', JSON.stringify(users));
      //       commit('setSearchUsers', JSON.stringify(users))
      //     }
      //   })
      //   .catch((e)=> {
      //     console.log(e);
      //   })
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
        //token: JSON.parse('"' + localStorage.getItem('token') + '"'),
        profile: payload.currentUser.profile
      };
      axios.put(apiUrl + '/users/' + payload.currentUser._id,  bodyRecord)
        .then(() => {})
    }
  }
}
