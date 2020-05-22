const state = {
    isLoading : false
}

const getters={
    isLoading(state){
        return state.isLoading
    }
}

const mutations={
    Loading(state){
        state.isLoading = true
    },
    NotLoading(state){
        state.isLoading = false
    }
}

const actions ={

}

export default {
    state,
    mutations,
    getters,
    actions
}