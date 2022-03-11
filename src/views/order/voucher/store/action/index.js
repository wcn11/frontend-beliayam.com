import { fetcher } from '@src/utility/axiosHooks'
import { GET_VOUCHER, GET_VOUCHER_BYID } from '@src/utility/Url'

export const getVoucher = params => {
   return async dispatch => {
      try {
         await fetcher(GET_VOUCHER, { params }).then(res => {
            dispatch({
               type: 'GET_DATA_VOUCHER',
               data: res?.data?.data,
               totalPages: res?.data?.total,
               params
            })
         })
      } catch (error) {
         console.log(error)
      }
   }
}

export const getVoucherById = (id) => {
   return async dispatch => {
      try {
         await fetcher(GET_VOUCHER_BYID(id))
            .then(res => {
               dispatch({
                  type: 'GET_VOUCHER_BYID',
                  selectedVoucher: res?.data?.data
               })
            })
      } catch (error) {
         console.log(error)
      }
   }
}

export const addVoucher = voucher => {
   return async (dispatch, getState) => {
      try {
         const req = {
            method: 'POST',
            data: voucher
         }

         await fetcher(GET_VOUCHER, req).then(() => {
            dispatch({
               type: 'ADD_VOUCHER',
               voucher
            })
         }).then(() => {
            dispatch(getVoucher(getState().vouchers?.params))
         })
      } catch (error) {

      }
   }
}

export const deleteVoucher = id => {
   return async (dispatch, getState) => {
      try {
         await fetcher(GET_VOUCHER_BYID(id), {
            method: 'DELETE'
         }).then(() => {
            type: 'DELETE_VOUCHER'
         }).then(() => {
            dispatch(getVoucher(getState().charges?.params))
         })
      } catch (error) {
         console.log(error)
      }
   }
}

export const updateVoucher = (id, voucher) => {
   return async (dispatch, getState) => {
      try {
         const req = {
            method: 'PUT',
            data: voucher
         }

         await fetcher(GET_VOUCHER_BYID(id), req)
            .then(res => {
               if (res) {
                  dispatch({
                     type: 'UPDATE_VOUCHER',
                     data: res?.data?.data
                  })
               }
            }).then(() => {
               dispatch(getVoucher(getState().vouchers?.params))
            })
      } catch (error) {
         console.log(error)
      }
   }
}