import { fetcher } from '@src/utility/axiosHooks'
import { GET_PROMO, GET_PROMO_BYID } from '@src/utility/Url'
import { Check, X } from 'react-feather'
import { Toast, ToastWarning } from '@src/utility/Toast'

// get ALL promo list
export const getAllDataPromo = () => {
    return async dispatch => {
        try {
            const res = await fetcher(GET_ALL_DATA_PROMO)
            if (res) {
                dispatch({
                    type: 'GET_ALL_DATA_PROMO',
                    data: res?.data?.data
                })
            }
        } catch (error) {
            console.log(error)
        }

    }
}

// get promo - pagination
export const getPromo = (params) => {
    return async dispatch => {
        try {
            const res = await fetcher(GET_PROMO, {params})
            if (res) {
                dispatch({
                    type: 'GET_DATA_PROMO',
                    data: res?.data?.data,
                    totalPages: res?.data?.total,
                    params
                })
            }
        } catch (error) {
            console.log('ini error get promo', error)
        }
    }
}

// get product by id
export const getPromoById = id => {
    return async dispatch => {
        try {
            const res = await fetcher(GET_PROMO_BYID(id))
            if (res) {
               dispatch({
                  type: 'GET_PROMO_BYID',
                  selectedPromo: res?.data?.data
               })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const addPromo = promo => {
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

          formData.append("image_promo", image_promo)
          formData.set('name', name)
          formData.set('slug', slug)
          formData.set('tags', tags)
          // formData.set('products[]', JSON.stringify(getProduct))
          formData.set('termsAndConditions', termsAndConditions)
          formData.set('promoValue', promoValue)
          formData.set('promoBy', promoBy)
          formData.set('promoStart', promoStart)
          formData.set('promoEnd', promoEnd)
          formData.set('isActive', isActive)
          formData.set('description', description)
          formData.set('platform', ['all'])
                  
          const req = { 
              method: 'POST',
               data: formData,
              headers: {
                  'Content-Type': 'multipart/form-data',
              }
        }
          const res = await fetcher(GET_PROMO, req)
          if (res) {
             dispatch({
                type: 'ADD_PROMO',
                promo
             })
             dispatch(getPromo(getState().promos?.params))
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

export const deletePromo = id => {
    return async (dispatch, getState) => {
       try {
        const res = await fetcher(GET_PROMO_BYID(id), {
            method: 'DELETE'
        })
            if (res) {
                dispatch({
                    type: 'DELETE_PROMO'
                })
                dispatch(getPromo(getState().promo?.params))
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

export const updatePromo = (id, promo) => {
    return async (dispatch, getState) => {
        try {
            const { 
                name, 
                slug, 
                tags,
                image,
                products, 
                termsAndConditions, 
                promoValue,
                promoBy,
                promoStart,
                promoEnd,
                isActive,
                description,
                platform
            } = promo

            const formData = new FormData()

            if (typeof image === 'string') {
                const req = {
                    method: 'GET',
                    responseType: 'blob'
                }
                const res = await fetcher(`https://be-dev.beliayam.com/${image}`, req)

                const reader = new FileReader()
                reader.readAsDataURL(res.data)
                reader.onload = function (e) {
                    formData.append('image_promo', e.target.result)
                }
            } else {
                formData.append('image_promo', image)
            }

            formData.set('name', name) 
            formData.set('slug', slug) 
            formData.set('tags', tags) 
            products?.map((item, index) => {
                return formData.set(`products[${index}]`, (item.value))
            })
            formData.set('termsAndConditions', termsAndConditions) 
            formData.set('promoValue', promoValue)
            formData.set('promoBy', promoBy)
            formData.set('promoStart', promoStart)
            formData.set('promoEnd', promoEnd)
            formData.set('isActive', isActive)
            formData.set('description', description)
            formData.set('platform', ['all'])
            
            const req = {
                method: 'PUT',
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            }
            const res = await fetcher(GET_PROMO_BYID(id), req)
                if (res) {
                    dispatch({
                        type: 'UPDATE_PROMO',
                        data: res?.data?.data
                    })
                    dispatch(getPromo(getState().promos?.params))
                    // dispatch(getAllDataPromo())
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