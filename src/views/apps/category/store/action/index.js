import axios from "axios"
import { fetcher } from '@src/utility/axiosHooks'
import { GET_CATEGORY } from '@src/utility/Url'

// Get All data category
export const getAllData = () => {
    return async dispatch => {
        await fetcher(GET_CATEGORY).then(response => {
            dispatch({
                type: 'GET_ALL_DATA',
                data: response.data.data
            })
        })
    }
}

export const getCategory = id => {
    return async dispatch => {
        await fetcher(GET_CATEGORY, { id })
            .then(response => {
                dispatch({
                    type: 'GET_CATEGORY',
                    selectedCategory: response.data.category
                })
            })
            .catch(err => console.log(err))
    }
}

export const addCategory = category => {
    return (dispatch, getState) => {
        axios
            .post('/apps/users/add-user', category)
            .then(response => {
                dispatch({
                    type: 'ADD_CATEGORY',
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

export const deleteCategory = id => {
    return (dispatch, getState) => {
        fetcher(GET_CATEGORY, {
            id,
            method: 'DELETE'
        })
            .then(response => {
                dispatch({
                    type: 'DELETE_CATEGORY'
                })
            })
            .then(() => {
                dispatch(getCategory(getState().category.params))
                dispatch(getAllData())
            })
    }
}