import axios from "axios"
import { GET_ORDER_DELIVER } from "@src/utility/Url"

export const getOrderDone = (params) => {
   return async (dispatch) => {
      try {
         const res = await axios.get(GET_ORDER_DELIVER, { params })
         if (res) {
            dispatch({
               type: "GET_DATA_ORDER_DONE",
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