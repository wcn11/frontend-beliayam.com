import { fetcher } from '@src/utility/axiosHooks'
import { GET_CHARGE, GET_CHARGE_BYID } from "@src/utility/Url"
import { Check, X } from 'react-feather'
import { Toast, ToastWarning } from '@src/utility/Toast'

export const getCharge = params => {
   return async dispatch => {
      try {
         await fetcher(GET_CHARGE, { params }).then(res => {
            dispatch({
               type: 'GET_DATA_CHARGE',
               data: res?.data?.data,
               totalPages: res?.data?.total,
               params
            })
         })
      } catch (error) {
         console.log('tidak dapat mengambil kategori', error)
      }
   }
}

export const getChargeById = (id) => {
   return async dispatch => {
      try {
         await fetcher(GET_CHARGE_BYID(id))
            .then(res => {
               dispatch({
                  type: 'GET_CHARGE_BYID',
                  selectedCharge: res?.data?.data
               })
               console.log(res.data.code)
            })
      } catch (error) {
         console.log('tidak dapat mengambil kategori', error)
      }
   }
}

export const addCharge = charge => {
   return async (dispatch, getState) => {
      try {
         const req = { method: 'POST', data: charge }
         const res = await fetcher(GET_CHARGE, req)
         if (res) {
            dispatch({
               type: 'ADD_CHARGE',
               charge
            })
            dispatch(getCharge(getState().charges?.params))
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

export const deleteCharge = id => {
   return async (dispatch, getState) => {
      try {
         const res = await fetcher(GET_CHARGE_BYID(id), {
            method: 'DELETE'
         })
         if (res) {
            dispatch({
               type: 'DELETE_CATEGORY'
            })
            dispatch(getCharge(getState().charges?.params))
            Toast({ icon: <Check size={12} />, title: 'Berhasil Horeee', content: res.message })
         }
      } catch (error) {
         ToastWarning({
            icon: <X size={12} />,
            title: 'Ada error nih',
            content: error.message
         })
      }
   }
}

export const updateCharge = (id, charge) => {
   return async (dispatch, getState) => {
      try {
         const req = {
            method: 'PUT',
            data: charge,
         }

         const res = await fetcher(GET_CHARGE_BYID(id), req)
               if (res) {
                  dispatch({
                     type: 'UPDATE_CHARGE',
                     data: res?.data?.data
                  })
                  dispatch(getCharge(getState().charges?.params))
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