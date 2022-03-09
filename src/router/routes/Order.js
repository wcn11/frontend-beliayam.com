import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const OrderRoutes = [
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
]

export default OrderRoutes