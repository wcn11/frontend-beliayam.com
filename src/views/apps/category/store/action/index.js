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
    return dispatch => {
        fetcher(GET_CATEGORY_BYID(id))
            .then(response => {
                dispatch({
                    type: 'GET_CATEGORY_BYID',
                    selectedCategory: response?.data?.data
                })
            })
            .catch(err => console.log(err))
    }
}

export const addCategory = category => {
    return async (dispatch, getState) => {
        const req = { method: 'POST', data: category }
        await fetcher(GET_CATEGORY, req)
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
    }
}

export const deleteCategory = id => {
    return async (dispatch, getState) => {
        await fetcher(GET_CATEGORY_BYID(id), {
            method: 'DELETE'
        })
            .then(response => {
                dispatch({
                    type: 'DELETE_CATEGORY'
                })
            })
            .then(() => {
                dispatch(getCategory(getState().category?.params))
                dispatch(getAllDataCategory())
            })
    }
}

export const updateCategory = (id, category) => {
    return async (dispatch, getState) => {
        try {
            const { sku, slug, name, position, image_category, status, additional, description } = category
            const formData = new FormData()
            // formData.append("image_category", image_category[0])
            formData.set('sku', sku)
            formData.set('slug', slug)
            formData.set('name', name)
            formData.set('position', position)
            formData.set('status', status)
            formData.set('additional', additional)
            formData.set('description', description)

            const req = {
                method: 'PUT',
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            }
            await fetcher(GET_CATEGORY_BYID(id), req).then(res => {
                if (res) {
                    dispatch({
                        type: 'UPDATE_CATEGORY',
                        data: res?.data.data
                    })
                }
            }).then(() => {
                dispatch(getCategory(getState().categorys?.params))
                dispatch(getAllDataCategory())
            })

        } catch (error) {
            console.log(error)
        }
    }
}