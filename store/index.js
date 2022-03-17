export const state = () => ({
    globalModal: false,
})

export const getters = {
    getGlobalModalState: state => state.globalModal
}

export const mutations = {
    SET_GLOBAL_MODAL(state, active = false) {

        state.globalModal = active
    },
}


export const actions = {

    async setGlobalModal({ commit }, active) {

        commit('SET_GLOBAL_MODAL', active);
    },
}