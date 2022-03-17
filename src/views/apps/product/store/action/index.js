import { fetcher } from '@src/utility/axiosHooks'
import { GET_PRODUCT, GET_PRODUCT_BYID } from '@src/utility/Url'
import { Check, X } from 'react-feather'
import { Toast, ToastWarning } from '../../../../../utility/Toast'

// get all data product
export const getAllDataProduct = (params) => {
   return async dispatch => {
      try {
         await fetcher(GET_PRODUCT, {params}).then(response => {
            dispatch({
               type: 'GET_ALL_DATA_PRODUCT',
               data: response?.data?.data,
               params
            })
         })
      } catch (error) {
         console.log(error)
      }

   }
}

// get data product per page
export const getProduct = (params) => {
   return async dispatch => {
      try {
         await fetcher(GET_PRODUCT, { params }).then(response => {
            dispatch({
               type: 'GET_DATA_PRODUCT',
               data: response?.data?.data,
               totalPages: response?.data?.total,
               params
            })
         })
      } catch (error) {
         console.log(error)
      }

   }
}

// get product by id
export const getProductById = (id) => {
   return async dispatch => {
      try {
         await fetcher(GET_PRODUCT_BYID(id))
            .then(response => {
               dispatch({
                  type: 'GET_PRODUCT_BYID',
                  selectedProduct: response?.data?.data
               })
            })
      } catch (error) {
         console.log(error)
      }

   }
}

export const addProduct = product => {
   return async (dispatch, getState) => {
      try {
         const {
            sku,
            category_id,
            slug,
            name,
            position,
            image,
            price,
            stock,
            weight,
            status,
            additional,
            description } = product

         const formData = new FormData()

         formData.append('image_product', image)
         formData.append('category_id', category_id)
         formData.set('sku', sku)
         formData.set('slug', slug)
         formData.set('name', name)
         formData.set('position', position)
         formData.set('status', 'nonactive')
         formData.set('price', price)
         formData.set('stock', stock)
         formData.set('weight', weight)
         formData.set('additional', additional)
         formData.set('description', description)
         formData.set('isDiscount', false)
         // formData.set('discount', discount)
         // formData.set('discountStart', discountStart)
         // formData.set('discountEnd', discountEnd)

         const req = {
            method: 'POST',
            data: formData,
            headers: {
               'Content-Type': 'multipart/form-data',
            }
         }

         const res = await fetcher(GET_PRODUCT, req)
            if (res) {
               dispatch({
                  type: 'ADD_PRODUCT',
                  product
               })
               dispatch(getProduct(getState().products?.params))
               // dispatch(getAllDataProduct())
               console.log(res)
               Toast({ icon: <Check size={12} />, title: 'Berhasil Horeee', content: res.data.message })
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

export const deleteProduct = id => {
   return async (dispatch, getState) => {
      try {
         const res = await fetcher(GET_PRODUCT_BYID(id), {method: 'DELETE'})
         if (res) {
               dispatch({
                  type: 'DELETE_CATEGORY'
               })
               dispatch(getProduct(getState().products.params))
               // dispatch(getAllDataProduct())
            Toast({ icon: <Check size={12} />, title: 'Update Berhasil', content: res.data.message })
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

export const updateProduct = (id, product) => {
   return async (dispatch, getState) => {
      try {
         const { 
            sku, 
            category_id, 
            slug, 
            isDiscount, 
            name, 
            position, 
            image, 
            price, 
            stock,
            weight, 
            status, 
            additional, 
            description } = product

         const formData = new FormData()
         formData.append('image_product', image)
         formData.append('category_id', category_id)
         formData.set('sku', sku)
         formData.set('slug', slug)
         formData.set('name', name)
         formData.set('position', position)
         formData.set('status', status)
         formData.set('price', price)
         formData.set('stock', stock)
         formData.set('weight', weight)
         formData.set('additional', additional)
         formData.set('description', description)
         formData.set('isDiscount', isDiscount)
         // formData.set('discount', discount)
         // formData.set('discountStart', discountStart)
         // formData.set('discountEnd', discountEnd)


         const req = {
            method: 'PUT',
            data: formData,
            headers: {
               "Content-Type": "multipart/form-data",
            }
         }

         const res = await fetcher(GET_PRODUCT_BYID(id), req)
            if (res) {
               dispatch({
                  type: 'UPDATE_PRODUCT',
                  data: res?.data?.data,
               })
               dispatch(getProduct(getState().products?.params))
               Toast({icon: <Check size={12}/>, title: 'Update Berhasil', content: res.data.message })
            }

      } catch (error) {
         ToastWarning({
         icon: <X size={12}/>,
         title: 'Ada error nih', 
         content: error.data.message })
      }
   }
}