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

const renderRole = row => {
   const roleObj = {
      subscriber: {
         class: 'text-primary',
         icon: User
      },
      maintainer: {
         class: 'text-success',
         icon: Database
      },
      editor: {
         class: 'text-info',
         icon: Edit2
      },
      author: {
         class: 'text-warning',
         icon: Settings
      },
      admin: {
         class: 'text-danger',
         icon: Slack
      }
   }

   const Icon = roleObj[row.role] ? roleObj[row.role].icon : Edit2

   return (
      <span className='text-truncate text-capitalize align-middle'>
         <Icon size={18} className={`${roleObj[row.name] ? roleObj[row.name].class : ''} mr-50`} />
         {row.name}
      </span>
   )
}

const statusObj = {
   active: 'light-success',
   inactive: 'light-secondary'
}

export const columns = [
   {
      name: 'Promo',
      minWidth: '138px',
      selector: 'fullName',
      sortable: true,
      cell: row => (
         <div className='d-flex justify-content-left align-items-center'>
            {/* {renderClient(row)} */}
            <div className='d-flex flex-column'>
               <Link
                  to={`/apps/promo/view/${row._id}`}
                  className='user-name text-truncate mb-0'
               >
                  <span className='font-weight-bold'>{row.name}</span>
               </Link>
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
   },
   {
      name: 'Status',
      minWidth: '138px',
      selector: 'status',
      sortable: true,
      cell: row => (
         <Badge className='text-capitalize light-success' color={statusObj[row.isActive ? 'active' : 'inactive']} pill>
            {row.isActive ? 'active' : 'inactive'} 
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
                  to={`/apps/promo/view/${row._id}`}
                  className='w-100'
                  onClick={() => store.dispatch(getPromoById(row._id))}
               >
                  <FileText size={14} className='mr-50' />
                  <span className='align-middle'>Details</span>
               </DropdownItem>
               <DropdownItem
                  tag={Link}
                  to={`/apps/promo/edit/${row._id}`}
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