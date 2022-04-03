// auth url
export const REFRESH_TOKEN = `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/auth/refresh-token`
export const LOGIN_URL = `http://localhost:4000/api/v1/admin/auth/login`

// user url
export const GET_ALL_DATA_USER = `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/users`
export const GET_USER_BYID = (id) => `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/users/${id}`
export const GET_USER_BYACTIVE = (id) => `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/users/${id}/active`

// category url
export const GET_CATEGORY = `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/category`
export const GET_CATEGORY_BYID = (id) => `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/category/${id}`
export const GET_CATEGORY_SLUG = (slug) => `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/category/${slug}`

// product url
export const GET_PRODUCT = `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/product`
export const GET_PRODUCT_BYID = (id) => `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/product/${id}`
export const GET_PRODUCT_SLUG = (slug) => `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/product/${slug}`

// charge url
export const GET_CHARGE = `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/charge`
export const GET_CHARGE_BYID = (id) => `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/charge/${id}`

// promo url
export const GET_PROMO = `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/promo`
export const GET_PROMO_BYID = (id) => `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/promo/${id}`
export const GET_PROMO_SLUG = (slug) => `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/promo/${slug}`
export const GET_PRODUCTS_BYPROMO = (id) => `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/promo/${id}/product`

// Voucher
export const GET_VOUCHER = `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/voucher`
export const GET_VOUCHER_BYID = (id) => `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/voucher/${id}`
export const GET_VOUCHER_SLUG = (slug) => `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/voucher/${slug}`

// order url
export const GET_ORDER = `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/order`
export const GET_ORDER_BYID = (id) => `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/order/${id}`
export const POST_FORCE_COMPLETE_ORDER = (id) => `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/order/${id}/complete-order`
export const POST_CANCEL_ORDER = (id) => `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/order/${id}/cancel-order`
export const GET_ORDER_BYSTATUS = `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/order/status`
export const SET_STATUS_DELIVERY = `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/order/delivery`
export const GET_ORDER_DELIVER = `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/order/delivery/fetch`

// dashboard
export const GET_USER_FOR_DSB = `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/users/time-range/client`
export const GET_ORDER_FOR_DSB = `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/users/time-range/client`

// charts
export const ORDER_BY_PAYMENT_METHOD = `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/order/by-payment-method`

// Statistic
export const TOTAL_REVENUE = `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/sales/revenue`
export const TOTAL_ORDERS = `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/sales/total`
export const TOTAL_PRODUCTS = `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/product/total`
export const TOTAL_USERS = `${process.env.REACT_APP_BASE_URL_API}/api/v1/admin/users/total`
