import axios from "axios"
import { fetcher } from '@src/utility/axiosHooks'
import { GET_CATEGORY, GET_CATEGORY_BYID } from '@src/utility/Url'

// Get All data category
export const getAllDataCategory = () => {
    return async dispatch => {
        await fetcher(GET_CATEGORY).then(response => {
            console.log('ini all data', response)
            dispatch({
                type: 'GET_ALL_DATA_CATEGORY',
                data: response?.data?.data
            })
        })
    }
}

// get data category per page
export const getCategory = params => {
    return async dispatch => {
        await axios.get(GET_CATEGORY, params).then(response => {
            dispatch({
                type: 'GET_DATA_CATEGORY',
                data: response?.data?.data,
                totalPages: response.data.total,
                params
            })
        })
    }
}

// get product by id
export const getCategoryById = id => {
    return async dispatch => {
        await fetcher(GET_CATEGORY_BYID(id))
            .then(response => {
                console.log('ini id', response.data.data)
                dispatch({
                    type: 'GET_CATEGORY_BYID',
                    selectedCategory: response?.data?.data
                })
            })
            .catch(err => console.log(err))
    }
}

export const addCategory = category => {
    return (dispatch, getState) => {

        fetcher(GET_CATEGORY, category)
            .then(response => {
                dispatch({
                    type: 'ADD_CATEGORY',
                    category
                })
            })
            .then(() => {
                dispatch(getCategory(getState().categorys?.params))
                dispatch(getAllDataCategory())
            })
            .catch(err => console.log(err))
    }
}

export const deleteCategory = id => {
    return (dispatch, getState) => {
        fetcher(GET_CATEGORY_BYID(id), {
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