import { firebaseAuth } from '../../firebase'
const state = {
  currentUser: null
}

const getters = {
  currentUser: state => state.currentUser
}

const mutations = {
  userStatus : (state, user) => {
    user === null ? state.currentUser = null : state.currentUser = user.email
  }
}

const actions = {
    signIn : async ({ commit,state }, user) => {
        if(state.currentUser === null){
            try {
                const userData = await firebaseAuth.signInWithEmailAndPassword(
                    user.email,
                    user.password
                )
                commit('userStatus', userData.user)
    
            } catch (error) {
                const errorCode = error.code
                const errorMessage = error.message
                if (errorCode === 'auth/wrong-password') {
                    alert('密碼錯誤')
                } else {
                    alert(errorMessage)
                }
            }
            console.log()
            state.currentUser === null ? alert('登入失敗') : alert('以登入')
        }else{
            alert('重複登入')
        }
    },

    signOut : async ({ commit }) => {
        try {
            await firebaseAuth.signOut()

        } catch (error) {
            alert(`登出錯誤${error}`)
        }
        alert('以登出')
        commit('userStatus', null)
    }
}

export default {
  state,
  mutations,
  getters,
  actions
}
