import axios from "axios"
import { fetcher } from "@src/utility/axiosHooks"
import { GET_ORDER, GET_ORDER_BYID } from "@src/utility/Url"

// get ALL order list
export const getAllDataOrder = () => {
  return async (dispatch) => {
    await fetcher(GET_ORDER).then((response) => {
      console.log("ini all data", response)
      dispatch({
        type: "GET_ALL_DATA_ORDER",
        data: response?.data?.data,
      })
    })
  }
}

// get order - pagination
export const getOrder = (params) => {
  return async (dispatch) => {
    await axios.get(GET_ORDER, { params }).then((response) => {
      dispatch({
        type: "GET_DATA_ORDER",
        data: response?.data?.data,
        totalPages: response.data.total,
        params,
      })
    })
  }
}

// get product by id
export const getOrderById = (id) => {
  return (dispatch) => {
    fetcher(GET_ORDER_BYID(id))
      .then((response) => {
        dispatch({
          type: "GET_ORDER_BYID",
          selectedOrder: response?.data?.data,
        })
      })
      .catch((err) => console.log(err))
  }
}

// get product by id
export const getOrderBySlug = (slug) => {
  return (dispatch) => {
    fetcher(GET_ORDER_BYSLUG(slug))
      .then((response) => {
        dispatch({
          type: "GET_ORDER_BYSLUG",
          selectedOrder: response?.data?.data,
        })
      })
      .catch((err) => console.log(err))
  }
}

export const addOrder = (order) => {
  return async (dispatch, getState) => {
    const req = { method: "POST", data: order }
    await fetcher(GET_ORDER, req)
      .then((response) => {
        dispatch({
          type: "ADD_ORDER",
          order,
        })
      })
      .then(() => {
        dispatch(getOrder(getState().orders?.params))
        dispatch(getAllDataOrder())
      })
  }
}

export const deleteOrder = (id) => {
  return async (dispatch, getState) => {
    await fetcher(GET_ORDER_BYID(id), {
      method: "DELETE",
    })
      .then((response) => {
        dispatch({
          type: "DELETE_ORDER",
        })
      })
      .then(() => {
        dispatch(getOrder(getState().order?.params))
        dispatch(getAllDataOrder())
      })
  }
}

export const updateOrder = (id, order) => {
  return async (dispatch, getState) => {
    try {
      const {
        name,
        slug,
        tags,
        products,
        termsAndConditions,
        orderValue,
        orderBy,
        orderStart,
        orderEnd,
        isActive,
        description,
        platform,
        image_order,
      } = order
      const formData = new FormData()
      // formData.append("image_order", image_order[0])
      formData.set("name", name)
      formData.set("slug", slug)
      formData.set("tags", tags)
      formData.set("products", products)
      formData.set("ermsAndConditions", termsAndConditions)
      formData.set("orderValue", orderValue)
      formData.set("orderBy", orderBy)
      formData.set("orderStart", orderStart)
      formData.set("orderEnd", orderEnd)
      formData.set("isActive", isActive)
      formData.set("description", description)
      formData.set("platform", platform)
      // formData.set('image_order', image_order)

      const req = {
        method: "PUT",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
      await fetcher(GET_ORDER_BYID(id), req)
        .then((res) => {
          if (res) {
            dispatch({
              type: "UPDATE_ORDER",
              data: res?.data.data,
            })
          }
        })
        .then(() => {
          dispatch(getOrder(getState().orders?.params))
          dispatch(getAllDataOrder())
        })
    } catch (error) {
      console.log(error)
    }
  }
}
