// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import chat from '@src/views/apps/chat/store/reducer'
import todo from '@src/views/apps/todo/store/reducer'
import users from '@src/views/apps/user/store/reducer'
import categories from '@src/views/apps/category/store/reducer'
import products from '@src/views/apps/product/store/reducer'
import charges from '@src/views/order/charge/store/reducer'
import vouchers from '@src/views/order/voucher/store/reducer'
import promos from '@src/views/order/promo/store/reducer' // gua remark dulu bikin error
import orders from '@src/views/apps/order/store/reducer'
import email from '@src/views/apps/email/store/reducer'
import invoice from '@src/views/apps/invoice/store/reducer'
import calendar from '@src/views/apps/calendar/store/reducer'
import ecommerce from '@src/views/apps/ecommerce/store/reducer'
import dataTables from '@src/views/tables/data-tables/store/reducer'

const rootReducer = combineReducers({
  auth,
  todo,
  chat,
  email,
  users,
  categories,
  charges, // gua remark dulu bikin error
  vouchers, // gua remark dulu bikin error
  products,
  promos, // gua remark dulu bikin error
  orders,
  navbar,
  layout,
  invoice,
  calendar,
  ecommerce,
  dataTables
})

export default rootReducer