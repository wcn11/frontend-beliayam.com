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
    }
}


export default categorys