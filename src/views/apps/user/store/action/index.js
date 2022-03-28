import axios from 'axios'
import { fetcher } from '@src/utility/axiosHooks'
import { GET_ALL_DATA_USER, GET_USER_BYID, GET_USER_BYACTIVE } from '@src/utility/Url'
import { Check, X } from 'react-feather'
import { Toast, ToastWarning } from '@src/utility/Toast'

// ** Get all Data users
export const getAllData = () => {
  return async dispatch => {
    await fetcher(GET_ALL_DATA_USER).then(response => {
      dispatch({
        type: 'GET_ALL_DATA',
        data: response?.data?.data
      })
    }).catch(err => console.log('ini all user', err))
  }
}

// ** Get data on page or row change
export const getData = params => {
  return async dispatch => {
    await fetcher(GET_ALL_DATA_USER, {params}).then(response => {
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
  return async (dispatch, getState) => {
    try {
      const res = await fetcher('/apps/users/add-user', user)
      if (res) {
        dispatch({
          type: 'ADD_USER',
          user
        })
        dispatch(getData(getState().users.params))
        dispatch(getAllData())
      }
    } catch (error) {
     console.log(error) 
    }
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

export const updateUserActive = (id, active) => {
  return async (dispatch, getState) => {
    try {
      const req = {
        method: 'PUT',
        data: {
          active,
          notify
        }
      }
      const res = await fetcher(GET_USER_BYACTIVE(id, active), req)
      if (res) {
          dispatch({
          type: 'GET_USER_BYACTIVE',
          selectedUser: res.data?.data,
        })
        dispatch(getUser(getState().users?.params))
        Toast({ icon: <Check size={12} />, title: 'Update Berhasil', content: res?.data?.message })
      }
    } catch (error) {
      console.log(error)
      ToastWarning({
        icon: <X size={12} />,
        title: 'Ada error nih',
        content: error?.data?.message
      })
    }

  }
}