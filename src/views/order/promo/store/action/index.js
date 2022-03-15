import { fetcher } from '@src/utility/axiosHooks'
import { GET_PROMO, GET_PROMO_BYID } from '@src/utility/Url'

// get ALL promo list
export const getAllDataPromo = () => {
    return async dispatch => {
        await fetcher(GET_ALL_DATA_PROMO).then(response => {
            console.log('ini all data', response)
            dispatch({
                type: 'GET_ALL_DATA_PROMO',
                data: response?.data?.data
            })
        })
    }
}

// get promo - pagination
export const getPromo = (params) => {
    return async dispatch => {
        await fetcher(GET_PROMO, {params}).then(response => {
            dispatch({
                type: 'GET_DATA_PROMO',
                data: response?.data?.data,
                totalPages: response.data.total,
                params
            })
        })
    }
}

// get product by id
export const getPromoById = id => {
    return dispatch => {
        fetcher(GET_PROMO_BYID(id))
            .then(response => {
                dispatch({
                    type: 'GET_PROMO_BYID',
                    selectedPromo: response?.data?.data
                })
            })
            .catch(err => console.log(err))
    }
}

export const addPromo = promo => {
    return async (dispatch, getState) => {
        const req = { method: 'POST', data: promo }
        await fetcher(GET_PROMO, req)
            .then(response => {
                dispatch({
                    type: 'ADD_PROMO',
                    promo
                })
            })
            .then(() => {
                dispatch(getPromo(getState().promos?.params))
                dispatch(getAllDataPromo())
            })
    }
}

export const deletePromo = id => {
    return async (dispatch, getState) => {
        await fetcher(GET_PROMO_BYID(id), {
            method: 'DELETE'
        })
            .then(response => {
                dispatch({
                    type: 'DELETE_PROMO'
                })
            })
            .then(() => {
                dispatch(getPromo(getState().promo?.params))
                dispatch(getAllDataPromo())
            })
    }
}

export const updatePromo = (id, promo) => {
    return async (dispatch, getState) => {
        try {
            const { 
                name, 
                slug, 
                tags, 
                products, 
                termsAndConditions, 
                promoValue,
                promoBy,
                promoStart,
                promoEnd,
                isActive,
                description,
                platform,
                image_promo
            } = promo
            const formData = new FormData()
            // formData.append("image_promo", image_promo[0])
            formData.set('name', name) 
            formData.set('slug', slug) 
            formData.set('tags', tags) 
            formData.set('products', products) 
            formData.set('termsAndConditions', termsAndConditions) 
            formData.set('promoValue', promoValue)
            formData.set('promoBy', promoBy)
            formData.set('promoStart', promoStart)
            formData.set('promoEnd', promoEnd)
            formData.set('isActive', isActive)
            formData.set('description', description)
            formData.set('platform', platform)
            // formData.set('image_promo', image_promo) 

            const req = {
                method: 'PUT',
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            }
            await fetcher(GET_PROMO_BYID(id), req).then(res => {
                if (res) {
                    dispatch({
                        type: 'UPDATE_PROMO',
                        data: res?.data.data
                    })
                }
            }).then(() => {
                dispatch(getPromo(getState().promos?.params))
                dispatch(getAllDataPromo())
            })

        } catch (error) {
            console.log(error)
        }
    }
}