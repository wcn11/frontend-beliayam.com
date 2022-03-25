const initialState = {
   allData: [],
   data: [],
   total: 1,
   params: {}
}

const ordersCancel = (state = initialState, action) => {
   switch (action.type) {
      case "GET_DATA_ORDER_BYSTATUS_CANCEL":
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

export default ordersCancel