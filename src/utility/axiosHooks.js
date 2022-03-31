import axios from 'axios'
import { REFRESH_TOKEN } from './Url'

const axiosApiInstance = axios.create({
    baseURL: 'https://be-dev.beliayam.com/',
    headers: {
        Authorization: 'Bearer token'
    }
})

const getToken = (accessToken) => {
    return localStorage.getItem(accessToken)
}

const getRefreshToken = () => {
    return localStorage.getItem(refreshToken)
}

const fetchRefreshToken = () => {
    return axios.post(REFRESH_TOKEN, {
        refreshToken: getRefreshToken()
    })
}


const axiosInterceptor = () => {
    axiosApiInstance.interceptors.request.use(async (config) => {
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
        (res) => {
            return res
        },
        async (err) => {
            const originalConfig = err.config
            if (err.response) {
                if (err.response.status === 401 && !originalConfig._retry) {
                    originalConfig._retry = true
                    try {
                        const rs = await fetchRefreshToken()
                        const {accessToken} = rs.data
                        localStorage.setItem('accessToken', accessToken)
                        axiosApiInstance.defaults.headers.Authorization = `Bearer ${accessToken}`
                        return axiosApiInstance(originalConfig)
                    } catch (error) {
                        if (error.response && error.response.data) {
                            return Promise.reject(error.response.data)
                        }
                        return Promise.reject(error)
                    }
                }
                if (err.response.status === 403 && err.response.data) {
                    return Promise.reject(err.response.data)
                }
            }
            return Promise.reject(err)
        }
    )
}


export const fetcher = async (url, config) => {
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
        const res = await axios.request(header)

        if (res) {
            axiosInterceptorResponse()
            return res
        }
    } catch (err) {
        throw err?.response
    }
}
