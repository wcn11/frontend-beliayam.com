import { Link } from 'react-router-dom'

import { deletePromo, getPromoById } from '../store/action'
import { store } from '@store/storeConfig/store'
import { formatDateTime } from '@utils'

import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive, AlignCenter } from 'react-feather'

const renderClient = row => {
   console.log('renderClient')
   console.log(row)
   const stateNum = Math.floor(Math.random() * 6),
      states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
      color = states[stateNum]
   // if (row.avatar.length) {
   //   return <Avatar className='mr-1' img={row.avatar} width='32' height='32' />
   // } else {
   //   return <Avatar color={color || 'primary'} className='mr-1' content={row.fullName} initials />
   // }
}

const statusObj = {
   active: 'light-success',
   inactive: 'light-secondary'
}

export const columns = [
   {
<<<<<<< HEAD:src/views/order/promo/list/columns.js
      name: 'Voucher',
      minWidth: '172px',
=======
      name: 'Promo',
      minWidth: '138px',
>>>>>>> refs/remotes/origin/main:src/views/apps/promo/list/columns.js
      selector: 'fullName',
      sortable: true,
      cell: row => (
         <div className='d-flex justify-content-left align-items-center'>
            {/* {renderClient(row)} */}
            <div className='d-flex flex-column'>
               <Link
                  to={`/order/promo/view/${row._id}`}
                  className='user-name text-truncate mb-0'
<<<<<<< HEAD:src/views/order/promo/list/columns.js
               // onClick={() => store.dispatch(getCategoryById(row._id))}
               >
                  <span className='font-weight-bold'>{row.name}</span>
               </Link>
               <small className='text-truncate text-muted mb-0'>{row.tags}</small>
=======
               >
                  <span className='font-weight-bold'>{row.name}</span>
               </Link>
>>>>>>> refs/remotes/origin/main:src/views/apps/promo/list/columns.js
            </div>
         </div>
      )
   },
   // {
   //    name: 'Image',
   //    minWidth: '320px',
   //    selector: 'image',
   //    sortable: true,
   //    cell: row => (
   //       <img src={`https://be-dev.beliayam.com/api/v1/${row.image}`} alt="" />
   //    )
   // },
   // {
   //    name: 'Name',
   //    minWidth: '172px',
   //    selector: 'role',
   //    sortable: true,
   //    cell: row => row.name
   // },
   {
<<<<<<< HEAD:src/views/order/promo/list/columns.js
      name: 'Code',
      minWidth: '138px',
      selector: 'role',
      sortable: true,
      cell: row => row.voucherCode
   },
   {
      name: 'Minimum Order',
      minWidth: '172px',
      selector: 'role',
      sortable: true,
      cell: row => row.minimumOrderValue
   },
   {
      name: 'Discount Start',
      minWidth: '172px',
      selector: 'role',
      sortable: true,
      cell: row => row.discountStart
   },
   {
      name: 'Discount End',
      minWidth: '172px',
      selector: 'role',
      sortable: true,
      cell: row => row.discountEnd
=======
      name: 'Start',
      minWidth: '100px',
      selector: 'currentPlan',
      sortable: true,
      cell: row => <span className='text-capitalize'>{formatDateTime(row.promoStart)}</span>
   },
   {
      name: 'End',
      minWidth: '100px',
      selector: 'currentPlan',
      sortable: true,
      cell: row => <span className='text-capitalize'>{formatDateTime(row.promoEnd)}</span>
>>>>>>> refs/remotes/origin/main:src/views/apps/promo/list/columns.js
   },
   {
      name: 'Status',
      minWidth: '138px',
      selector: 'status',
      sortable: true,
      cell: row => (
<<<<<<< HEAD:src/views/order/promo/list/columns.js
         <Badge className='text-capitalize light-success' color={statusObj['active']} pill>
            {row.isActive === true && <>active</>}
=======
         <Badge className='text-capitalize light-success' color={statusObj[row.isActive ? 'active' : 'inactive']} pill>
            {row.isActive ? 'active' : 'inactive'} 
>>>>>>> refs/remotes/origin/main:src/views/apps/promo/list/columns.js
         </Badge>
      )
   },
   {
      name: 'Actions',
      minWidth: '100px',
      cell: row => (
         <UncontrolledDropdown>
            <DropdownToggle tag='div' className='btn btn-sm'>
               <MoreVertical size={14} className='cursor-pointer' />
            </DropdownToggle>
            <DropdownMenu right>
               <DropdownItem
                  tag={Link}
                  to={`/order/promo/view/${row._id}`}
                  className='w-100'
                  onClick={() => store.dispatch(getPromoById(row._id))}
               >
                  <FileText size={14} className='mr-50' />
                  <span className='align-middle'>Details</span>
               </DropdownItem>
               <DropdownItem
                  tag={Link}
                  to={`/order/promo/edit/${row._id}`}
                  className='w-100'
                  onClick={() => store.dispatch(getPromoById(row._id))}
               >
                  <Archive size={14} className='mr-50' />
                  <span className='align-middle'>Edit</span>
               </DropdownItem>
               <DropdownItem className='w-100' onClick={() => store.dispatch(deletePromo(row._id))}>
                  <Trash2 size={14} className='mr-50' />
                  <span className='align-middle'>Delete</span>
               </DropdownItem>
            </DropdownMenu>
         </UncontrolledDropdown>
      )
   }
]