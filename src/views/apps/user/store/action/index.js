import axios from 'axios'
import { fetcher } from '@src/utility/axiosHooks'
import { GET_ALL_DATA_USER, GET_USER_BYID, GET_USER_BYACTIVE } from '@src/utility/Url'

// ** Get all Data users
export const getAllData = () => {
  return async dispatch => {
    await fetcher(GET_ALL_DATA_USER).then(response => {
      dispatch({
        type: 'GET_ALL_DATA',
        data: response?.data?.data
      })
    })
  }
}

// ** Get data on page or row change
export const getData = params => {
  return async dispatch => {
    await fetcher(GET_ALL_DATA_USER, params).then(response => {
      dispatch({
        type: 'GET_DATA',
        data: response?.data?.data,
        totalPages: response.data.total,
        params
      })
    })
  }
}

// ** Get User
export const getUserById = id => {
  return dispatch => {
    fetcher(GET_USER_BYID(id))
      .then(response => {
        dispatch({
          type: 'GET_USER_BYID',
          selectedUser: response?.data?.data
        })
      })
      .catch(err => console.log(err))
  }
}

// ** Add new user
export const addUser = user => {
  return (dispatch, getState) => {
    fetcher('/apps/users/add-user', user)
      .then(response => {
        dispatch({
          type: 'ADD_USER',
          user
        })
      })
      .then(() => {
        dispatch(getData(getState().users.params))
        dispatch(getAllData())
      })
      .catch(err => console.log(err))
  }
}

// ** Delete user
export const deleteUser = id => {
  return (dispatch, getState) => {
    fetcher(GET_USER_BYID(id), {
      method: 'DELETE'
    })
      .then(response => {
        dispatch({
          type: 'DELETE_USER'
        })
      })
      .then(() => {
        dispatch(getData(getState().users.params))
        dispatch(getAllData())
      })
  }
}

export const updateUserActive = (status) => {
  return async (dispatch, getState) => {
    try {

      const req = {
        method: 'PUT',
      }
      await fetcher(GET_USER_BYACTIVE(status), req).then(res => {
        dispatch({
          type: 'GET_USER_BYACTIVE',
          selectedUser: res.data?.data
        })
      }).then(() => {
        dispatch(getUser(getState().users?.params))
      })
    } catch (error) {
      console.log(error)
    }

  }
}