import axios from "axios"
import { fetcher } from "@src/utility/axiosHooks"
import { GET_ORDER, GET_USER_FOR_DSB } from "@src/utility/Url"

// get ALL order list
export const getOrders = (params) => {
  return async (dispatch) => {
    await fetcher(GET_ORDER, { params }).then((response) => {
      dispatch({
        type: "GET_ALL_DATA_ORDER",
        data: response?.data?.data,
        params,
      })
    })
  }
}

// get User For Charts
export const getUsers = (params) => {
  return async (dispatch) => {
    await fetcher(GET_USER_FOR_DSB, { params }).then((response) => {
      dispatch({
        type: "GET_USER_FOR_CHART",
        data: response?.data?.data,
        params,
      })
    })
  }
}
