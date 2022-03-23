import { fetcher } from '@src/utility/axiosHooks'
import { GET_CATEGORY, GET_CATEGORY_BYID } from '@src/utility/Url'
import { Check, X } from 'react-feather'
import { Toast, ToastWarning } from '@src/utility/Toast'

// Get All data category
export const getAllDataCategory = () => {
    return async dispatch => {
        try {
        const res = await fetcher(GET_CATEGORY)
            if (res) {
                dispatch({
                    type: 'GET_ALL_DATA_CATEGORY',
                    data: res?.data?.data
                })
            }
        } catch (error) {
            console.log(error)
        }

    }
}

// get data category per page
export const getCategory = params => {
    return async dispatch => {
        try {
            const res = await fetcher(GET_CATEGORY, params)
            if (res) {
                dispatch({
                    type: 'GET_DATA_CATEGORY',
                    data: res?.data?.data,
                    totalPages: res.data.total,
                    params
                })
    
            }
        } catch (error) {
            console.log(error)
        }
    }
}

// get product by id
export const getCategoryById = id => {
    return async dispatch => {
        try {
            const res = await fetcher(GET_CATEGORY_BYID(id))
            if (res) {
                dispatch({
                    type: 'GET_CATEGORY_BYID',
                    selectedCategory: res?.data?.data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const addCategory = category => {
    return async (dispatch, getState) => {
        try {
            const { sku, slug, name, position, image, status, additional, description } = category
            const formData = new FormData()
            formData.append("image_category", image)
            formData.set('sku', sku)
            formData.set('slug', slug)
            formData.set('name', name)
            formData.set('position', position)
            formData.set('status', status)
            formData.set('additional', additional)
            formData.set('description', description)

            const req = { method: 'POST', data: formData }
            const res  = await fetcher(GET_CATEGORY, req)
            if (res) {
                dispatch({
                    type: 'ADD_CATEGORY',
                    category
                })
    
                dispatch(getCategory(getState().categorys?.params))
                dispatch(getAllDataCategory())
                Toast({ icon: <Check size={12} />, title: 'Berhasil Horeee', content: res?.data?.message })
            }       
        } catch (error) {
            ToastWarning({
                icon: <X size={12} />,
                title: 'Ada error nih',
                content: error?.data?.message
            })
        }

    }
}

export const deleteCategory = id => {
    return async (dispatch, getState) => {
        try {
            const res = await fetcher(GET_CATEGORY_BYID(id), {
                method: 'DELETE'
            })
            if (res) {
                dispatch({
                    type: 'DELETE_CATEGORY'
                })
                dispatch(getCategory(getState().category?.params))
                dispatch(getAllDataCategory())
                Toast({ icon: <Check size={12} />, title: 'Berhasil Horeee', content: res?.data?.message })
            }
        } catch (error) {
            ToastWarning({
                icon: <X size={12} />,
                title: 'Ada error nih',
                content: error.data.message
            })
        }

    }
}

export const updateCategory = (id, category) => {
    return async (dispatch, getState) => {
        try {
            const { sku, slug, name, position, image, icon, status, additional, description } = category
            const formData = new FormData()
            formData.append("image_category", image)
            formData.append('icon', icon)
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
            const res = await fetcher(GET_CATEGORY_BYID(id), req)
                if (res) {
                    dispatch({
                        type: 'UPDATE_CATEGORY',
                        data: res?.data?.data
                    })

                    await dispatch(getCategory(getState().categorys?.params))
                    // dispatch(getAllDataCategory())
                    Toast({ icon: <Check size={12} />, title: 'Berhasil Horeee', content: res?.data?.message })
                }
        } catch (error) {
            console.log(error)
            ToastWarning({
                icon: <X size={12} />,
                title: 'Ada error nih',
                content: error.data.message
            })
        }
    }
}