import { Link } from 'react-router-dom'

import { deleteCharge, getChargeById } from '../store/action'
import { store } from '@store/storeConfig/store'

import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive } from 'react-feather'

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
   pending: 'light-warning',
   active: 'light-success',
   inactive: 'light-secondary'
}

export const columns = [
   {
      name: 'Charge',
      minWidth: '172px',
      selector: 'fullName',
      sortable: true,
      cell: row => (
         <div className='d-flex justify-content-left align-items-center'>
            {renderClient(row)}
            <div className='d-flex flex-column'>
               {/* <Link
                  to={`/order/charge/view/${row._id}`}
                  className='user-name text-truncate mb-0'
               onClick={() => store.dispatch(getCategoryById(row._id))}
               > */}
                  <span className='font-weight-bold'>{row.chargeName}</span>
               {/* </Link> */}
               <small className='text-truncate text-muted mb-0'>{row.chargeBy}</small>
            </div>
         </div>
      )
   },
   {
      name: 'Charge Value',
      minWidth: '138px',
      selector: 'role',
      sortable: true,
      cell: row => row.chargeValue
   },
   {
      name: 'Short Description',
      minWidth: '172px',
      selector: 'role',
      sortable: true,
      cell: row => row.shortDescription
   },
   {
      name: 'Default',
      minWidth: '172px',
      selector: 'role',
      sortable: true,
      cell: row => row.default
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
                  to={`/order/charge/view/${row._id}`}
                  className='w-100'
                  onClick={() => store.dispatch(getChargeById(row._id))}
               >
                  <FileText size={14} className='mr-50' />
                  <span className='align-middle'>Details</span>
               </DropdownItem> */}
               <DropdownItem
                  tag={Link}
                  to={`/order/charge/edit/${row._id}`}
                  className='w-100'
                  onClick={() => store.dispatch(getChargeById(row._id))}
               >
                  <Archive size={14} className='mr-50' />
                  <span className='align-middle'>Edit</span>
               </DropdownItem>
               <DropdownItem className='w-100' onClick={() => store.dispatch(deleteCharge(row._id))}>
                  <Trash2 size={14} className='mr-50' />
                  <span className='align-middle'>Delete</span>
               </DropdownItem>
            </DropdownMenu>
         </UncontrolledDropdown>
      )
   }
]