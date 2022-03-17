import { fetcher } from '@src/utility/axiosHooks'
import { GET_CHARGE, GET_CHARGE_BYID } from "@src/utility/Url"
import { Check, X } from 'react-feather'
import { Toast, ToastWarning } from '../../../../../utility/Toast'

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
         await fetcher(GET_CHARGE, req).then(() => {
            dispatch({
               type: 'ADD_CHARGE',
               charge
            })
         }).then((res) => {
            dispatch(getCharge(getState().charges?.params))
            if (res.data.code !== 200) {
               Toast({ icon: <Check size={12} />, title: 'Berhasil Horeee', content: res.message })
            }
         })
      } catch (error) {
         ToastWarning({
            icon: <X size={12} />,
            title: 'Ada error nih',
            content: error.message
         })
      }

   }
}

export const deleteCharge = id => {
   return async (dispatch, getState) => {
      try {
         await fetcher(GET_CHARGE_BYID(id), {
            method: 'DELETE'
         }).then(() => {
            dispatch({
               type: 'DELETE_CATEGORY'
            })
         }).then((res) => {
            dispatch(getCharge(getState().charges?.params))
            if (res.data.code === 200) {
               Toast({ icon: <Check size={12} />, title: 'Berhasil Horeee', content: res.message })
            }
         })
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

         await fetcher(GET_CHARGE_BYID(id), req)
            .then(res => {
               if (res) {
                  dispatch({
                     type: 'UPDATE_CHARGE',
                     data: res?.data?.data
                  })
               }
            }).then((res) => {
               dispatch(getCharge(getState().charges?.params))
               if (res.data.code === 200) {
                  Toast({ icon: <Check size={12} />, title: 'Berhasil Horeee', content: res.message })
               }
               console.log(res.data.code)
            })
      } catch (error) {
         ToastWarning({
            icon: <X size={12} />,
            title: 'Ada error nih',
            content: error.message
         })
      }
   }
}