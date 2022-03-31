const initialState = {
   allData: [],
   data: [],
   total: 1,
   params: {}
}

const productsPromo = (state = initialState, action) => {
   switch (action.type) {
      case "GET_PRODUCTS_BY_PROMO":
         return {
            ...state,
            data: action.data,
            total: action.totalPages,
            params: action.params,
         }
      case "DELETE_PRODUCT_FROM_PROMO":
         return {
            ...state,
            data: action.data,
         }
      default:
         return { ...state }
   }
}

export default productsPromo