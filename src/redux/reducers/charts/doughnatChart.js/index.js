const initialState = {
   data: {}
}

const doughnatChart = (state = initialState, action) => {
   switch (action.type) {
      case 'GET_ORDER_BY_PAYMENT_METHOD':
         return {...state, data: action.payload}
      default:
         return {...state}
   }
}

export default doughnatChart