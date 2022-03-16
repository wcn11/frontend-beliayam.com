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
        response => {
            return response
        },
        async error => {
            if (error.response !== 401) {
                return Promise.reject(error)
            }
            const tokens = {
                accessToken: localStorage.getItem('accessToken'),
                refreshToken: localStorage.getItem('refreshToken')
            }

            try {
                const response = await axios.post(REFRESH_TOKEN, {
                    'Content-Type': 'application/json'
                }, tokens)
                localStorage.setItem('accessToken', response.data.token.accessToken)
                localStorage.setItem('refreshToken', response.data.token.refreshToken)

                axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token.accessToken}`

                error.hasRefreshedToken = true
                return await Promise.reject(tokenError)
            } catch {
                const tokenError = new Error("Cannot refresh token")
                tokenError.originalError = error
                return await Promise.reject(tokenError)
            }
        }


    )
}

async function axiosWithTokenRefresh(config) {
    try {
        return await axios(config)
    } catch (error) {
        return await (error.hasRefreshedToken ? axios(config) : Promise.reject(error))
    }
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
        // axiosWithTokenRefresh()
        // axiosInterceptorResponse()
        const res = await axios.request(header)

        if (res) {
            return res
        }
    } catch (err) {
        throw err?.response
    }
}
