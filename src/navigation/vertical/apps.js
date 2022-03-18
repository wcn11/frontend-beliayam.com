import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, Clipboard, User, Box, Divide, ShoppingBag } from 'react-feather'

export default [
  {
    header: 'Apps & Pages'
  },
  {
    id: 'users',
    title: 'User',
    icon: <User size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/apps/user/list'
      },
      // {
      //   id: 'view',
      //   title: 'View',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/user/view'
      // },
      // {
      //   id: 'edit',
      //   title: 'Edit',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/user/edit'
      // }
    ]
  },
  // {
  //   id: 'email',
  //   title: 'Email',
  //   icon: <Mail size={20} />,
  //   navLink: '/apps/email'
  // },
  // {
  //   id: 'chat',
  //   title: 'Chat',
  //   icon: <MessageSquare size={20} />,
  //   navLink: '/apps/chat'
  // },
  // {
  //   id: 'todo',
  //   title: 'Todo',
  //   icon: <CheckSquare size={20} />,
  //   navLink: '/apps/todo'
  // },
  // {
  //   id: 'calendar',
  //   title: 'Calendar',
  //   icon: <Calendar size={20} />,
  //   navLink: '/apps/calendar'
  // },
  // {
  //   id: 'eCommerce',
  //   title: 'eCommerce',
  //   icon: <ShoppingCart size={20} />,
  //   children: [
  //     {
  //       id: 'shop',
  //       title: 'Shop',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/shop'
  //     },
  //     {
  //       id: 'detail',
  //       title: 'Details',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/product-detail'
  //     },
  //     {
  //       id: 'wishList',
  //       title: 'Wish List',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/wishlist'
  //     },
  //     {
  //       id: 'checkout',
  //       title: 'Checkout',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/checkout'
  //     }
  //   ]
  // }
  {
    id: 'products',
    title: 'Product',
    icon: <Box size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/apps/product/list'
      },
      // {
      //   id: 'view',
      //   title: 'View',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/product/view'
      // },
      // {
      //   id: 'edit',
      //   title: 'Edit',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/product/edit'
      // }
    ]
  },
  {
    id: 'category',
    title: 'Category',
    icon: <Clipboard size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/apps/category/list'
      },
      // {
      //   id: 'view',
      //   title: 'View',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/category/view'
      // },
      // {
      //   id: 'edit',
      //   title: 'Edit',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/category/edit'
      // }
    ]
  }
]
