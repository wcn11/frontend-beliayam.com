import axios from "axios";
import { fetcher } from '@src/utility/axiosHooks'
import { GET_CATEGORY } from '@src/utility/Url'

// Get All data category
export const getAllData = () => {
    return async dispatch => {
        await fetcher(GET_CATEGORY).then(response => {
            dispatch({
                type: 'GET_ALL_DATA',
                data: response.data.data
            })
        })
    }
}

export const addCategory = category => {
    return (dispatch, getState) => {
        axios
            .post('/apps/users/add-user', category)
            .then(response => {
                dispatch({
                    type: 'ADD_CATEGORY',
                    user
                })
            })
            .then(() => {
                dispatch(getData(getState().users.params))
                dispatch(getAllData())
            })
            .catch(err => console.log(err))
    }
}