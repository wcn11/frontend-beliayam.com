import axios from 'axios'
import { REFRESH_TOKEN } from './Url'
import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'

axios.defaults.baseURL = 'https://be-dev.beliayam.com/'
axios.defaults.headers.common['Authorization'] = 'Bearer token'
const axiosApiInstance = axios.create()

const getToken = (accessToken) => {
    return localStorage.getItem(accessToken)
}

const axiosInterceptor = () => {
    axiosApiInstance.interceptors.request.use(async config => {
        if (!config.headers.Authorization) {
            const plainToken = getToken()
            const token = plainToken
            if (token) {
                config.headers.Authorization = `Bearer ${getToken()}`
            }
        }
        return config
    })
}

const axiosInterceptorResponse = async () => {
    axios.interceptors.response.use(
        response => {
            return response
        },
        error => {
            if (error.response.status !== 401) {
                return Promise.reject(error)
            }
            const tokens = {
                accessToken: localStorage.getItem('accessToken'),
                refreshToken: localStorage.getItem('refreshToken')
            }

            return axios
                .post(REFRESH_TOKEN, tokens)
                .then(response => {
                    localStorage.setItem('accessToken', response.data.token.accessToken)
                    localStorage.setItem('refreshToken', response.data.token.refreshToken)

                    axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token.accessToken}`

                    error.hasRefreshedToken = true
                    return Promise.reject(tokenError)
                }).catch(() => {
                    const tokenError = new Error("Cannot refresh token")
                    tokenError.originalError = error
                    return Promise.reject(tokenError)
                })
        }


    )
}

function axiosWithTokenRefresh(config) {
    return axios(config).catch(error => {
        return error.hasRefreshedToken ? axios(config) : Promise.reject(error)
    })
}


export const fetcher = async (url, config) => {
    //   const { getLocalStorage } = localStorageHooks()
    //   const roleId = getLocalStorage(LOCALSTORAGE_KEY.ROLE_ID)

    const header = {
        ...config,
        url,
        headers: {
            'Content-Type': 'application/json',
            ...config?.headers
        }
    }

    try {
        axiosInterceptor()
        axiosWithTokenRefresh()
        // const res = await axios.request(header)

        if (res) {
            axiosInterceptorResponse()
            return res
        }
    } catch (err) {
        throw err?.response
    }
}
