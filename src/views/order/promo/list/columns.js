import { Link } from 'react-router-dom'
import { formatDateTime } from "@utils"

import { deletePromo, getPromoById } from '../store/action'
import { store } from '@store/storeConfig/store'

import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, Trash2, Archive } from 'react-feather'

const renderClient = row => {
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
   nonnactive: 'light-secondary'
}

export const columns = [
   {
      name: 'Promo',
      minWidth: '200px',
      selector: 'name',
      sortable: true,
      cell: row => (
         <div className='d-flex justify-content-left align-items-center'>
            {renderClient(row)}
            <div className='d-flex flex-column'>
               {/* <Link
                  to={`/order/promo/view/${row._id}`}
                  className='user-name text-truncate mb-0'
               onClick={() => store.dispatch(getCategoryById(row._id))}
               > */}
                  <span className='font-weight-bold'>{row.name}</span>
               {/* </Link> */}
               <small className='text-truncate text-muted mb-0'>{row.promoBy}</small>
            </div>
         </div>
      )
   },
   {
      name: 'Image',
      minWidth: '320px',
      selector: 'role',
      sortable: true,
      cell: row => <img src={`https://be-dev.beliayam.com/${row.image_promo}`} width='200' alt="" />
   },
   {
      name: 'Slug',
      minWidth: '172px',
      selector: 'role',
      sortable: true,
      cell: row => row.slug
   },
   {
      name: 'Tags',
      minWidth: '150px',
      selector: 'role',
      sortable: true,
      cell: row => row.tags
   },
   {
      name: 'Promo Start',
      minWidth: '186px',
      selector: 'role',
      sortable: true,
      cell: row => formatDateTime(row.promoStart)
   },
   {
      name: 'Promo End',
      minWidth: '186px',
      selector: 'role',
      sortable: true,
      cell: row => formatDateTime(row.promoEnd)
   },
   {
      name: 'Status',
      minWidth: '138px',
      selector: 'status',
      sortable: true,
      cell: row => (
         <Badge className='text-capitalize light-success' color={statusObj[row.isActive ? 'active' : 'nonactive']} pill>
            {row.isActive ? 'active' : 'nonactive'}
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
               {/* <DropdownItem
                  tag={Link}
                  to={`/order/promo/view/${row._id}`}
                  className='w-100'
                  onClick={() => store.dispatch(getPromoById(row._id))}
               >
                  <FileText size={14} className='mr-50' />
                  <span className='align-middle'>Details</span>
               </DropdownItem> */}
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