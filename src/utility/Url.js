// auth url
export const REFRESH_TOKEN = 'https://be-dev.beliayam.com/api/v1/admin/auth/refresh-token'
export const LOGIN_URL = 'https://be-dev.beliayam.com/api/v1/admin/auth/login'

// user url
export const GET_ALL_DATA_USER = 'https://be-dev.beliayam.com/api/v1/admin/users'
export const GET_USER_BYID = (id) => `https://be-dev.beliayam.com/api/v1/admin/users/${id}`

// category url
export const GET_CATEGORY = 'https://be-dev.beliayam.com/api/v1/admin/category'
export const GET_CATEGORY_BYID = (id) => `https://be-dev.beliayam.com/api/v1/admin/category/${id}`
export const GET_CATEGORY_SLUG = (slug) => `https://be-dev.beliayam.com/api/v1/admin/category/${slug}`

// product url
export const GET_PRODUCT = 'https://be-dev.beliayam.com/api/v1/admin/product'
export const GET_PRODUCT_BYID = (id) => `https://be-dev.beliayam.com/api/v1/admin/product/${id}`
export const GET_PRODUCT_SLUG = (slug) => `https://be-dev.beliayam.com/api/v1/admin/product/${slug}`

// charge url
export const GET_CHARGE = 'https://be-dev.beliayam.com/api/v1/admin/charge'
export const GET_CHARGE_BYID = (id) => `https://be-dev.beliayam.com/api/v1/admin/charge/${id}`