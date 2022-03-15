import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const OrderRoutes = [
   //charge
   {
      path: '/order/charge/list',
      component: lazy(() => import('../../views/order/charge/list'))
   },
   {
      path: '/order/charge/edit',
      exact: true,
      component: () => <Redirect to='/order/charge/edit/:id' />
   },
   {
      path: '/order/charge/edit/:id',
      component: lazy(() => import('../../views/order/charge/edit')),
      meta: {
         navLink: '/order/charge/edit'
      }
   },
   //    path: '/order/charge/view',
   //    exact: true,
   //    component: () => <Redirect to='/order/charge/view/:id' />
   // },
   // {
   //    path: '/order/charge/view/:id',
   //    component: lazy(() => import('../../views/order/charge/view')),
   //    meta: {
   //       navLink: '/order/charge/view'
   //    }
   // },

   //voucher
   {
      path: '/order/voucher/list',
      component: lazy(() => import('../../views/order/voucher/list'))
   },
   {
      path: '/order/voucher/edit',
      exact: true,
      component: () => <Redirect to='/order/voucher/edit/:id' />
   },
   {
      path: '/order/voucher/edit/:id',
      component: lazy(() => import('../../views/order/voucher/edit')),
      meta: {
         navLink: '/order/voucher/edit'
      }
   },

   //promo
   {
      path: '/order/promo/list',
      component: lazy(() => import('../../views/order/promo/list'))
   },
   {
      path: '/order/promo/edit',
      exact: true,
      component: () => <Redirect to='/order/promo/edit/:id' />
   },
   {
      path: '/order/promo/edit/:id',
      component: lazy(() => import('../../views/order/promo/edit')),
      meta: {
         navLink: '/order/promo/edit'
      }
   }
]

export default OrderRoutes