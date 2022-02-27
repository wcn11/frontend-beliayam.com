export const state = () => ({
    modal: {
        show: false,
        data: {}
    }
})

export const mutations = {
    setModal(state, data) {

        state.modal.data = data
    },
}


export const actions = {

    async setModal({ commit }, data) {

        commit('setModal', data);
    },
}