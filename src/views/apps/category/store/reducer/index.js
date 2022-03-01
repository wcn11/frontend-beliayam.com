// initial state
const initialState = {
    allData: [],
    data: [],
    total: 1,
    params: {},
    selectedCategory: null
}

const categorys = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_DATA':
            return { ...state, allData: action.data }
        case 'GET_CATEGORY':
            return { ...state, selectedCategory: action.selectedCategory }
        case 'ADD_CATEGORY':
            return { ...state }
        case 'DELETE_CATEGORY':
            return { ...state }
        default:
            return { ...state }
    }
}


export default categorys