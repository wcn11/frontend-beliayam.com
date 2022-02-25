import axios from 'axios'

axios.defaults.baseURL = 'https://be-dev.beliayam.com/'
axios.defaults.headers.common['Authorization'] = 'Bearer token'

const getToken = () => {
    return localStorage.getItem('accessToken')
}

const axiosInterceptor = () => {
    axios.interceptors.request.use(config => {
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

export const fetcher = async (url, config) => {
    //   const { getLocalStorage } = localStorageHooks();
    //   const roleId = getLocalStorage(LOCALSTORAGE_KEY.ROLE_ID);

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
        return res
    } catch (err) {
        throw err?.response
    }
}
