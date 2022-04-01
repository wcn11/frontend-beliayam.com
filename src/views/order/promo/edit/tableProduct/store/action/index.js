import { GET_PRODUCTS_BYPROMO } from "@src/utility/Url"
import { fetcher } from '@src/utility/axiosHooks'

export const getProductsByPromo = (id, params) => {
   return async (dispatch) => {
      try {
         const res = await fetcher(`https://main-v1.beliayam.com/api/v1/admin/promo/${id}/product`, {params})
         if (res) {
            dispatch({
               type: "GET_PRODUCTS_BY_PROMO",
               data: res?.data?.data,
               // totalPages: res.data.data.totalOrder,
               params,
            })
         }
      } catch (error) {
         console.log(error)
      }
   }
}

export const deleteProductFromPromo = (id, products) => {
   return async (dispatch) => {      
      try {
         const newData = []
         if (products) {
            for (const i in products) {
               if (products[i]._id !== id) {
                  newData.push(products[i])
               }
            }            
         }
         dispatch({
            type: "DELETE_PRODUCT_FROM_PROMO",
            data: newData
         })
      } catch (error) {
         console.log(error)
      }
   }
}