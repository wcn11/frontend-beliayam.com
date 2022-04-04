// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import doughnatChart from './charts/doughnatChart.js'
import chat from '@src/views/apps/chat/store/reducer'
import todo from '@src/views/apps/todo/store/reducer'
import users from '@src/views/apps/user/store/reducer'
import categories from '@src/views/apps/category/store/reducer'
import products from '@src/views/apps/product/store/reducer'
import charges from '@src/views/order/charge/store/reducer'
import vouchers from '@src/views/order/voucher/store/reducer'
import promos from '@src/views/order/promo/store/reducer'
import orders from '@src/views/apps/order/store/reducer'
import email from '@src/views/apps/email/store/reducer'
import invoice from '@src/views/apps/invoice/store/reducer'
import calendar from '@src/views/apps/calendar/store/reducer'
import ecommerce from '@src/views/apps/ecommerce/store/reducer'
import dataTables from '@src/views/tables/data-tables/store/reducer'
import ordersStatus from '../../views/apps/order/list/listProgress/store/reducer'
import orderDone from '../../views/apps/order/list/listDone/store/reducer'
import orderCancel from '../../views/apps/order/failed/listCancel/store/reducer'
import orderExpired from '../../views/apps/order/failed/listExpired/store/reducer'
import productsPromo from '../../views/order/promo/edit/tableProduct/store/reducer'


const rootReducer = combineReducers({
  auth,
  todo,
  chat,
  doughnatChart,
  email,
  users,
  categories,
  charges, 
  vouchers, 
  products,
  promos, 
  orders,
  navbar,
  layout,
  invoice,
  calendar,
  ecommerce,
  dataTables,
  ordersStatus,
  orderDone,
  orderCancel,
  orderExpired,
  productsPromo
})

export default rootReducer
