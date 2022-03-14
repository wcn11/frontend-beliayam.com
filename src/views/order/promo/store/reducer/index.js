// initial state
const initialState = {
    allData: [],
    data: [],
    total: 1,
    params: {},
    selectedPromo: null
}

const promos = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_DATA_PROMO':
            return { ...state, allData: action.data }
        case 'GET_DATA_PROMO':
            return {
                ...state,
                data: action.data,
                total: action.totalPages,
                params: action.params
            }
        case 'GET_PROMO_BYID':
<<<<<<< HEAD:src/views/order/promo/store/reducer/index.js
            return { ...state, selectedCategory: action.selectedCategory }
=======
            return { ...state, selectedPromo: action.selectedPromo }
>>>>>>> refs/remotes/origin/main:src/views/apps/promo/store/reducer/index.js
        case 'ADD_PROMO':
            return { ...state }
        case 'UPDATE_PROMO':
            return { ...state }
        case 'DELETE_PROMO':
            return { ...state }
        default:
            return { ...state }
    }
}

export default promos