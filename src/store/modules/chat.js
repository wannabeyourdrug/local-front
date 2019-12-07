import axios from 'axios'
import { apiUrl } from '../../constants/config'

const state = {
  isLoadContacts: false,
  isLoadConversations: false,
  error: '',
  contacts: null,
  contactsSearchResult: null,
  conversations: null
}

const getters = {
  isLoadContacts: state => state.isLoadContacts,
  isLoadConversations: state => state.isLoadConversations,
  error: state => state.error,
  contacts: state => state.contacts,
  conversations: state => state.conversations,
  contactsSearchResult: state => state.contactsSearchResult

}

const mutations = {
  getContactsSuccess(state, payload) {
    state.isLoadContacts = true
    state.contacts = payload.contacts
    state.contactsSearchResult = payload.contacts
  },
  getContactsSearchSuccess(state, payload) {
    state.contactsSearchResult = payload.contacts
  },
  getContactsError(state, error) {
    state.isLoadContacts = false
    state.error = error
  },
  getConversationsSuccess(state, payload) {
    state.isLoadConversations = true
    state.conversations = payload.conversations
  },
  getConversationsError(state, error) {
    state.isLoadConversations = false
    state.error = error
  }
}

const actions = {
  searchContacts({ commit, state }, { userId, searchKey }) {
    let searchObject = { "username": searchKey };
    if (searchKey.length > 0) {
      axios
        .get(`${apiUrl}/users?filter=${ JSON.stringify(searchObject)}`, { headers: { Authorization: JSON.parse(localStorage.getItem('token'))} })
        .then(r => r.data)
        .then(res => {
          if (res.meta.total) {
            commit('getContactsSearchSuccess', { contacts: res.data, userId: userId })
          } else {
            commit('getContactsError', 'error:getContacts')
          }
        })
    } else {
      commit('getContactsSearchSuccess', { contacts: state.contacts, userId: userId })
    }
  },
  getContacts({ commit }, userId) {
    axios
      .get(`${apiUrl}/users`, { headers: { Authorization: JSON.parse(localStorage.getItem('token'))} })
      .then(r => r.data)
      .then(res => {
        if (res.meta.total) {
          commit('getContactsSuccess', { contacts: res.data, userId: userId })
        } else {
          commit('getContactsError', 'error:getContacts')
        }
      })
  },
  getConversations({ commit }, userId) {
    axios
      .get(`${apiUrl}/chats`, { headers: { Authorization: JSON.parse(localStorage.getItem('token'))} })
      .then(r => r.data)
      .then(res => {
        if (res.status) {
          commit('getConversationsSuccess', { conversations: res.data, userId: userId })
        } else {
          commit('getConversationsError', 'error:getConversations')
        }
      })
  }
  
}

export default {
  state,
  getters,
  mutations,
  actions
}
