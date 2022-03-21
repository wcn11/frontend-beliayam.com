// auth url
export const REFRESH_TOKEN = 'https://be-dev.beliayam.com/api/v1/admin/auth/refresh-token'
export const LOGIN_URL = 'https://be-dev.beliayam.com/api/v1/admin/auth/login'

// user url
export const GET_ALL_DATA_USER = 'https://be-dev.beliayam.com/api/v1/admin/users'
export const GET_USER_BYID = (id) => `https://be-dev.beliayam.com/api/v1/admin/users/${id}`
export const GET_USER_BYACTIVE = (status) => `https://be-dev.beliayam.com/api/v1/admin/users/${status}`

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

// promo url
export const GET_PROMO = 'https://be-dev.beliayam.com/api/v1/admin/promo'
export const GET_PROMO_BYID = (id) => `https://be-dev.beliayam.com/api/v1/admin/promo/${id}`
export const GET_PROMO_SLUG = (slug) => `https://be-dev.beliayam.com/api/v1/admin/promo/${slug}`

// Voucher
export const GET_VOUCHER = 'https://be-dev.beliayam.com/api/v1/admin/voucher'
export const GET_VOUCHER_BYID = (id) => `https://be-dev.beliayam.com/api/v1/admin/voucher/${id}`
export const GET_VOUCHER_SLUG = (slug) => `https://be-dev.beliayam.com/api/v1/admin/voucher/${slug}`

// order url
export const GET_ORDER = 'https://be-dev.beliayam.com/api/v1/admin/order'
export const GET_ORDER_BYID = (id) => `https://be-dev.beliayam.com/api/v1/admin/order/${id}`
