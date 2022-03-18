import { fetcher } from '@src/utility/axiosHooks'
import { GET_VOUCHER, GET_VOUCHER_BYID } from '@src/utility/Url'
import { Check, X } from 'react-feather'
import { Toast, ToastWarning } from '@src/utility/Toast'
// Get All Data Voucher
export const getVoucher = params => {
   return async dispatch => {
      try {
         const res = await fetcher(GET_VOUCHER, { params })
         if (res) {
            dispatch({
               type: 'GET_DATA_VOUCHER',
               data: res?.data?.data,
               totalPages: res?.data?.total,
               params
            })
         }
      } catch (error) {
         console.log(error)
      }
   }
}

export const getVoucherById = (id) => {
   return async dispatch => {
      try {
         const res = await fetcher(GET_VOUCHER_BYID(id))
         if (res) {
            dispatch({
               type: 'GET_VOUCHER_BYID',
               selectedVoucher: res?.data?.data
            })
         }
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
         const res = await fetcher(GET_VOUCHER, req)
         if (res) {
               dispatch({
                  type: 'ADD_VOUCHER',
                  voucher
               })
               dispatch(getVoucher(getState().vouchers?.params))
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

export const deleteVoucher = id => {
   return async (dispatch, getState) => {
      try {
         const res = await fetcher(GET_VOUCHER_BYID(id), {
            method: 'DELETE'
         })
         if (res) {
            dispatch({
               type: 'DELETE_VOUCHER'
            })
            dispatch(getVoucher(getState().charges?.params))
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

export const updateVoucher = (id, voucher) => {
   return async (dispatch, getState) => {
      try {
         const req = {
            method: 'PUT',
            data: voucher
         }

         const res = await fetcher(GET_VOUCHER_BYID(id), req)
               if (res) {
                  dispatch({
                     type: 'UPDATE_VOUCHER',
                     data: res?.data?.data
                  })
                  dispatch(getVoucher(getState().vouchers?.params))
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