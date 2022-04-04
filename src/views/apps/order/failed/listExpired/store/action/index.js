import axios from 'axios'
import { GET_ORDER_BYSTATUS } from '@src/utility/Url'

export const getOrderExpired = params => {
  return async dispatch => {
    try {
      const res = await axios.get(GET_ORDER_BYSTATUS, { params })
      if (res) {
        dispatch({
          type: 'GET_DATA_ORDER_EXPIRED',
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
