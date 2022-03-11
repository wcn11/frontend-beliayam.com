const initialState = {
   allData: [],
   data: [],
   total: 1,
   params: {},
   selectedVoucher: null
}

const vouchers = (state = initialState, action) => {
   switch (action.type) {
      case 'GET_DATA_VOUCHER':
         return {
            ...state,
            data: action.data,
            total: action.totalPages,
            params: action.params
         }
      case 'GET_VOUCHER_BYID':
         return { ...state, selectedVoucher: action.selectedVoucher }
      case 'ADD_VOUCHER':
         return { ...state }
      case 'UPDATE_VOUCHER':
         return { ...state }
      case 'DELETE_VOUCHER':
         return { ...state }
      default:
         return { ...state }
   }
}

export default vouchers