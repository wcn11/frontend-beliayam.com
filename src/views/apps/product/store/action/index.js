import { fetcher } from '@src/utility/axiosHooks'
import { GET_PRODUCT, GET_PRODUCT_BYID } from '@src/utility/Url'

// get all data product
export const getAllDataProduct = (params) => {
   return async dispatch => {
      await fetcher(GET_PRODUCT).then(response => {
         dispatch({
            type: 'GET_ALL_DATA_PRODUCT',
            data: response?.data?.data,
            params
         })
      })
   }
}

// get data product per page
export const getProduct = (params) => {
   console.log('ini product', params)
   return async dispatch => {
      await fetcher(GET_PRODUCT, { params }).then(response => {
         dispatch({
            type: 'GET_DATA_PRODUCT',
            data: response?.data?.data,
            totalPages: response?.data?.total,
            params
         })
      })
   }
}

// get product by id
export const getProductById = id => {
   return async dispatch => {
      await fetcher(GET_PRODUCT_BYID(id))
         .then(response => {
            dispatch({
               type: 'GET_PRODUCT_BYID',
               selectedProduct: response?.data?.data
            })
         }).cath(err => console.log(err))
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
            dispatch(getAllData())
         })
   }
}