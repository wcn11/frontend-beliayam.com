const initialState = {
   allData: [],
   data: [],
   total: 1,
   params: {},
   selectedCharge: null
}

const charges = (state = initialState, action) => {
   switch (action.type) {
      case 'GET_DATA_CHARGE':
         return {
            ...state,
            data: action.data,
            total: action.totalPages,
            params: action.params
         }
      case 'GET_CHARGE_BYID':
         return { ...state, selectedCharge: action.selectedCharge }
      case 'ADD_CHARGE':
         return { ...state }
      case 'UPDATE_CHARGE':
         return { ...state }
      case 'DELETE_CHARGE':
         return { ...state }
      default:
         return { ...state }
   }
}

export default charges