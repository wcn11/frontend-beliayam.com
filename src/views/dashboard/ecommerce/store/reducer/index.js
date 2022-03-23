// initial state
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedOrder: null,
}

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_DATA_ORDER":
      return { ...state, allData: action.data }   
    case "GET_USER_FOR_CHART":
      return { 
        ...state, 
        data: action.data,
        total: action.totalPages,
        params: action.params, 
      }
    default:
      return { ...state }
  }
}

export default orders
