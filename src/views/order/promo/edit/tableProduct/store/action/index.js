import { GET_PRODUCTS_BYPROMO } from "@src/utility/Url"
import { fetcher } from '@src/utility/axiosHooks'

export const getProductsByPromo = (id, params) => {
   return async (dispatch) => {
      try {
         const res = await fetcher(`https://be-dev.beliayam.com/api/v1/admin/promo/${id}/product`, {params})
         if (res) {
            dispatch({
               type: "GET_PRODUCTS_BY_PROMO",
               data: res?.data?.data?.order,
               totalPages: res.data.data.totalOrder,
               params,
            })
         }
      } catch (error) {
         console.log(error)
      }
   }
}