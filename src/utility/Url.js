const PRODUCTION_URL = 'https://be-beliayam.com/'
const DEVELOP_URL = 'https://be-dev-beliayam.com/'
// auth url
export const REFRESH_TOKEN = `${DEVELOP_URL}api/v1/admin/auth/refresh-token`
export const LOGIN_URL = `${DEVELOP_URL}api/v1/admin/auth/login`

// user url
export const GET_ALL_DATA_USER = `${DEVELOP_URL}api/v1/admin/users`
export const GET_USER_BYID = (id) => `${DEVELOP_URL}api/v1/admin/users/${id}`
export const GET_USER_BYACTIVE = (id, active) => `${DEVELOP_URL}api/v1/admin/users/${id}/${active}`

// category url
export const GET_CATEGORY = `${DEVELOP_URL}api/v1/admin/category`
export const GET_CATEGORY_BYID = (id) => `${DEVELOP_URL}api/v1/admin/category/${id}`
export const GET_CATEGORY_SLUG = (slug) => `${DEVELOP_URL}api/v1/admin/category/${slug}`

// product url
export const GET_PRODUCT = `${DEVELOP_URL}api/v1/admin/product`
export const GET_PRODUCT_BYID = (id) => `${DEVELOP_URL}api/v1/admin/product/${id}`
export const GET_PRODUCT_SLUG = (slug) => `${DEVELOP_URL}api/v1/admin/product/${slug}`

// charge url
export const GET_CHARGE = `${DEVELOP_URL}api/v1/admin/charge`
export const GET_CHARGE_BYID = (id) => `${DEVELOP_URL}api/v1/admin/charge/${id}`

// promo url
export const GET_PROMO = `${DEVELOP_URL}api/v1/admin/promo`
export const GET_PROMO_BYID = (id) => `${DEVELOP_URL}api/v1/admin/promo/${id}`
export const GET_PROMO_SLUG = (slug) => `${DEVELOP_URL}api/v1/admin/promo/${slug}`

// Voucher
export const GET_VOUCHER = `${DEVELOP_URL}api/v1/admin/voucher`
export const GET_VOUCHER_BYID = (id) => `${DEVELOP_URL}api/v1/admin/voucher/${id}`
export const GET_VOUCHER_SLUG = (slug) => `${DEVELOP_URL}api/v1/admin/voucher/${slug}`

// order url
export const GET_ORDER = 'https://be-dev.beliayam.com/api/v1/admin/order'
export const GET_ORDER_BYID = (id) => `https://be-dev.beliayam.com/api/v1/admin/order/${id}`
