import { Home, Circle } from 'react-feather'

export default [
  {
    id: 'dashboards',
    title: 'Dashboards',
    icon: <Home size={20} />,
    badge: 'light-warning',
    badgeText: '2',
    children: [
<<<<<<< HEAD
      {
        id: 'analyticsDash',
        title: 'Analytics',
        icon: <Circle size={12} />,
        navLink: '/dashboard/analytics'
      },
=======
      // {
      //   id: 'analyticsDash',
      //   title: 'Analytics',
      //   icon: <Circle size={12} />,
      //   navLink: '/dashboard/analytics'
      // },
>>>>>>> e85cfd484149dbe9cd65c4cb8e810d00cf949bf4
      {
        id: 'eCommerceDash',
        title: 'eCommerce',
        icon: <Circle size={12} />,
        navLink: '/dashboard/ecommerce'
      }
    ]
  }
]
