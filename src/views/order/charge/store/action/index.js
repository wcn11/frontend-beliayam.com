import { fetcher } from '@src/utility/axiosHooks'
import { GET_CHARGE, GET_CHARGE_BYID } from "@src/utility/Url"

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
         console.log(error)
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
            })
      } catch (error) {
         console.log(error)
      }
   }
}

export const addCharge = charge => {
   return async (dispatch, getState) => {
      const req = { method: 'POST', data: charge }
      await fetcher(GET_CHARGE, req).then(() => {
         dispatch({
            type: 'ADD_CHARGE',
            charge
         })
      }).then(() => {
         dispatch(getCharge(getState().charges?.params))
      })
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
         }).then(() => {
            dispatch(getCharge(getState().charges?.params))
         })
      } catch (error) {

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

         await fetcher(GET_CHARGE_BYID(id), req).then(res => {
            if (res) {
               dispatch({
                  type: 'UPDATE_CHARGE',
                  data: res?.data?.data
               })
            }
         }).then(() => {
            dispatch(getCharge(getState().charges?.params))
         })
      } catch (error) {
         console.log(error)
      }
   }
}