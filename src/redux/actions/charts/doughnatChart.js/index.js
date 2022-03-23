import { fetcher } from '@src/utility/axiosHooks'
import { ORDER_BY_PAYMENT_METHOD } from '@src/utility/Url'


export const getOrderByPayment = () => {
   return async dispatch => {
      try {
         const res = await fetcher(ORDER_BY_PAYMENT_METHOD)
         if (res) {
            dispatch({
               type: 'GET_ORDER_BY_PAYMENT_METHOD',
               data: res?.data?.data
            })
         }
      } catch (error) {
         console.log(error)
      }
   }
}