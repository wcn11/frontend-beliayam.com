import { fetcher } from '@src/utility/axiosHooks'
import { GET_PRODUCT, GET_PRODUCT_BYID } from '@src/utility/Url'

// get all data product
export const getAllDataProduct = (params) => {
   return async dispatch => {
      try {
         await fetcher(GET_PRODUCT).then(response => {
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
         const req = {
            method: 'POST',
            data: product,
            // headers: {
            //    'Content-Type': 'multipart/form-data',
            // }
         }

         await fetcher(GET_PRODUCT, req)
            .then(res => {
               if (res) {
                  dispatch({
                     type: 'ADD_PRODUCT',
                     product
                  })
               }
            })
            .then(() => {
               dispatch(getProduct(getState().products?.params))
               dispatch(getALLDataProduct())
            })
      } catch (error) {
         console.log(error)
      }

   }
}

export const deleteProduct = id => {
   return (dispatch, getState) => {
      try {
         fetcher(GET_PRODUCT_BYID(id), {
            method: 'DELETE'
         })
            .then(res => {
               dispatch({
                  type: 'DELETE_CATEGORY'
               })
            })
            .then(() => {
               dispatch(getProduct(getState().products.params))
               dispatch(getAllDataProduct())
            })
      } catch (error) {
         console.log(error)
      }

   }
}

export const updateProduct = (id, product) => {
   return async (dispatch, getState) => {
      try {
         const { sku, category_id, slug, name, position, image_product, price, stock, weight, status, additional, description } = product
         const formData = new FormData()
         // formData.append("image_product", image_product[0])
         formData.set('category_id', category_id)
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

         const req = {
            method: 'PUT',
            data: formData,
            headers: {
               "Content-Type": "multipart/form-data",
            }
         }
         console.log(id)
         await fetcher(GET_PRODUCT_BYID(id), req).then(res => {
            if (res) {
               dispatch({
                  type: 'UPDATE_PRODUCT',
                  data: res?.data?.data,
               })
            }
         }).then(() => {
            dispatch(getProduct(getState().products?.params))
            // dispatch(getAllDataProduct())
         })

      } catch (error) {
         console.log(error)
      }
   }
}