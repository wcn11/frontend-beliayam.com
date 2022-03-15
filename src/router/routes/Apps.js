import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppRoutes = [
  {
    path: '/apps/email',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email'))
  },
  {
    path: '/apps/email/:folder',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/email/label/:label',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/email/:filter',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/chat',
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../views/apps/chat'))
  },
  {
    path: '/apps/todo',
    exact: true,
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo'))
  },
  {
    path: '/apps/todo/:filter',
    appLayout: true,
    exact: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/apps/todo/tag/:tag',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/apps/calendar',
    component: lazy(() => import('../../views/apps/calendar'))
  },
  {
    path: '/apps/invoice/list',
    component: lazy(() => import('../../views/apps/invoice/list'))
  },
  {
    path: '/apps/invoice/preview/:id',
    component: lazy(() => import('../../views/apps/invoice/preview')),
    meta: {
      navLink: '/apps/invoice/preview'
    }
  },
  {
    path: '/apps/invoice/preview',
    exact: true,
    component: () => <Redirect to='/apps/invoice/preview/4987' />
  },
  {
    path: '/apps/invoice/edit/:id',
    component: lazy(() => import('../../views/apps/invoice/edit')),
    meta: {
      navLink: '/apps/invoice/edit'
    }
  },
  {
    path: '/apps/invoice/edit',
    exact: true,
    component: () => <Redirect to='/apps/invoice/edit/4987' />
  },
  {
    path: '/apps/invoice/add',
    component: lazy(() => import('../../views/apps/invoice/add'))
  },
  {
    path: '/apps/invoice/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/invoice/print'))
  },
  {
    path: '/apps/ecommerce/shop',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/shop'))
  },
  {
    path: '/apps/ecommerce/wishlist',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/wishlist'))
  },
  {
    path: '/apps/ecommerce/product-detail',
    exact: true,
    className: 'ecommerce-application',
    component: () => <Redirect to='/apps/ecommerce/product-detail/apple-i-phone-11-64-gb-black-26' />
  },
  {
    path: '/apps/ecommerce/product-detail/:product',
    exact: true,
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/detail')),
    meta: {
      navLink: '/apps/ecommerce/product-detail'
    }
  },
  {
    path: '/apps/ecommerce/checkout',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/checkout'))
  },
  {
    path: '/apps/user/list',
    component: lazy(() => import('../../views/apps/user/list'))
  },
  {
    path: '/apps/user/edit',
    exact: true,
    component: () => <Redirect to='/apps/user/edit/:id' />
  },
  {
    path: '/apps/user/edit/:id',
    component: lazy(() => import('../../views/apps/user/edit')),
    meta: {
      navLink: '/apps/user/edit'
    }
  },
  {
    path: '/apps/user/view',
    exact: true,
    component: () => <Redirect to='/apps/user/view/:id' />
  },
  {
    path: '/apps/user/view/:id',
    component: lazy(() => import('../../views/apps/user/view')),
    meta: {
      navLink: '/apps/user/view'
    }
  },
  // product
  {
    path: '/apps/product/list',
    component: lazy(() => import('../../views/apps/product/list'))
  },
  {
    path: '/apps/product/edit',
    exact: true,
    component: () => <Redirect to='/apps/product/edit/:id' />
  },
  {
    path: '/apps/product/edit/:id',
    component: lazy(() => import('../../views/apps/product/edit')),
    meta: {
      navLink: '/apps/product/edit'
    }
  },
  {
    path: '/apps/product/view',
    exact: true,
    component: () => <Redirect to='/apps/product/view/:id' />
  },
  {
    path: '/apps/product/view/:id',
    component: lazy(() => import('../../views/apps/product/view')),
    meta: {
      navLink: '/apps/product/view'
    }
  },
  //category
  {
    path: '/apps/category/list',
    component: lazy(() => import('../../views/apps/category/list'))
  },
  {
    path: '/apps/category/edit',
    exact: true,
    component: () => <Redirect to='/apps/category/edit/:id' />
  },
  {
    path: '/apps/category/edit/:id',
    component: lazy(() => import('../../views/apps/category/edit')),
    meta: {
      navLink: '/apps/category/edit'
    }
  },
  {
    path: '/apps/category/view',
    exact: true,
    component: () => <Redirect to='/apps/category/view/:id' />
  },
  {
    path: '/apps/category/view/:id',
    component: lazy(() => import('../../views/apps/category/view')),
    meta: {
      navLink: '/apps/category/view'
    }
  },
  //promo
  // gua remark dulu bikin error
  // {
  //   path: '/apps/promo/list',
  //   component: lazy(() => import('../../views/apps/promo/list'))
  // },
  // {
  //   path: '/apps/promo/edit',
  //   exact: true,
  //   component: () => <Redirect to='/apps/promo/edit/:id' />
  // },
  // {
  //   path: '/apps/promo/edit/:id',
  //   component: lazy(() => import('../../views/apps/promo/edit')),
  //   meta: {
  //     navLink: '/apps/category/edit'
  //   }
  // },
  // {
  //   path: '/apps/promo/view',
  //   exact: true,
  //   component: () => <Redirect to='/apps/promo/view/:id' />
  // },
  // {
  //   path: '/apps/promo/view/:id',
  //   component: lazy(() => import('../../views/apps/promo/view')),
  //   meta: {
  //     navLink: '/apps/promo/view'
  //   }
  // },
  // gua remark dulu bikin error
  //order
  {
    path: '/apps/order/list',
    component: lazy(() => import('../../views/apps/order/list'))
  },
  {
    path: '/apps/order/view',
    exact: true,
    component: () => <Redirect to='/apps/order/view/:id' />
  },
  {
    path: '/apps/order/view/:id',
    component: lazy(() => import('../../views/apps/order/view')),
    meta: {
      navLink: '/apps/order/view'
    }
  },
]

export default AppRoutes
