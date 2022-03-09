import { Scissors, Circle, Percent, DollarSign, LifeBuoy, Shield, FileText } from 'react-feather'
export default [
  {
    header: 'Order'
  },
  {
    id: 'invoiceApp',
    title: 'Invoice',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'invoiceList',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/list'
      },
      {
        id: 'invoicePreview',
        title: 'Preview',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/preview'
      },
      {
        id: 'invoiceEdit',
        title: 'Edit',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/edit'
      },
      {
        id: 'invoiceAdd',
        title: 'Add',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/add'
      }
    ]
  },
  {
    id: 'access-control',
    title: 'Promo',
    icon: <Percent size={12} />,
    action: 'read',
    resource: 'ACL',
    navLink: '/access-control'
  },
  // {
  //   id: 'menuLevels',
  //   title: 'Menu Levels',
  //   icon: <Menu size={20} />,
  //   children: [
  //     {
  //       id: 'secondLevel',
  //       title: 'Second Level 2.1',
  //       icon: <Circle size={12} />,
  //       navLink: ''
  //     },
  //     {
  //       id: 'secondLevel1',
  //       title: 'Second Level 2.2',
  //       icon: <Circle size={12} />,
  //       children: [
  //         {
  //           id: 'ThirdLevel',
  //           title: 'Third Level 3.1',
  //           navLink: ''
  //         },
  //         {
  //           id: 'ThirdLevel1',
  //           title: 'Third Level 3.2',
  //           navLink: ''
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: 'disabledMenu',
  //   title: 'Disabled Menu',
  //   icon: <EyeOff size={20} />,
  //   navLink: '#',
  //   disabled: true
  // },
  {
    id: 'documentation',
    title: 'Discount',
    icon: <Scissors size={20} />,
    externalLink: true,
    newTab: true,
    navLink: 'https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation'
  },
  {
    id: 'raiseSupport',
    title: 'Charge',
    icon: <DollarSign size={20} />,
    children: [
      {
        id: 'ThirdLevel',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/order/charge/list'
      },
      // {
      //   id: 'ThirdLevel1',
      //   title: 'Edit',
      //   icon: <Circle size={12} />,
      //   navLink: '/order/charge/edit'
      // },
      // {
      //   id: 'ThirdLevel1',
      //   title: 'View',
      //   icon: <Circle size={12} />,
      //   navLink: '/order/charge/view'
      // }
    ]
  }
]
