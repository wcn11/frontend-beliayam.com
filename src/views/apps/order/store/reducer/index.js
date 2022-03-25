// initial state
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedOrder: null,
}

const orders = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_DATA_ORDER":
      return { ...state, allData: action.data }
    case "GET_DATA_ORDER":
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params: action.params,
      }
    case "GET_DATA_ORDER_BYSTATUS_SUCCESS":
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params: action.params,
      }
    case "GET_ORDER_BYID":
      return { ...state, selectedOrder: action.selectedOrder }
    case "ADD_ORDER":
      return { ...state }
    case "UPDATE_ORDER":
      return { ...state }
    case "DELETE_ORDER":
      return { ...state }
    default:
      return { ...state }
  }
}

export default orders
