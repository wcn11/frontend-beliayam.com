const initialState = {
    allData: [],
    data: [],
    total: 1,
    params: {},
    selectedCategory: null
}

const products = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_DATA_PRODUCT':
            return {
                ...state,
                allData: action.data,
                params: action.params
            }
        case 'GET_DATA_PRODUCT':
            return {
                ...state,
                data: action.data,
                total: action.totalPages,
                params: action.params
            }
        case 'GET_PRODUCT_BYID':
            return { ...state, selectedProduct: action.selectedProduct }
        case 'ADD_PRODUCT':
            return { ...state }
        case 'DELETE_PRODUCT':
            return { ...state }
        default:
            return { ...state }
    }
}

export default products