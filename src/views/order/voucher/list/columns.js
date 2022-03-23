import { useState } from 'react'
import { Link } from 'react-router-dom'

import { deleteVoucher, getVoucherById } from '../store/action'
import { store } from '@store/storeConfig/store'

import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import {  MoreVertical, FileText, Trash2, Archive } from 'react-feather'

import { formatDateTime } from "@utils"


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

const centerModal = () => {
   const [centeredModal, setCenteredModal] = useState(false)
   return (
      <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
         <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Vertically Centered</ModalHeader>
         <ModalBody>
            Oat cake ice cream candy chocolate cake chocolate cake cotton candy dragée apple pie. Brownie carrot cake
            candy canes bonbon fruitcake topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
            liquorice.
         </ModalBody>
         <ModalFooter>
            <Button color='primary' onClick={() => setCenteredModal(!centeredModal)}>
               Accept
            </Button>{' '}
         </ModalFooter>
      </Modal>
   )
}

const statusObj = {
   pending: 'light-warning',
   active: 'light-success',
   inactive: 'light-secondary'
}

export const columns = [
   {
      name: 'Voucher',
      minWidth: '172px',
      selector: 'fullName',
      sortable: true,
      cell: row => (
         <div className='d-flex justify-content-left align-items-center'>
            {renderClient(row)}
            <div className='d-flex flex-column'>
               {/* <Link
                  to={`/order/voucher/view/${row._id}`}
                  className='user-name text-truncate mb-0'
               onClick={() => store.dispatch(getCategoryById(row._id))}
               > */}
                  <span className='font-weight-bold'>{row.voucherName}</span>
               {/* </Link> */}
               <small className='text-truncate text-muted mb-0'>{row.chargeBy}</small>
            </div>
         </div>
      )
   },
   {
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
      cell: row => formatDateTime(row.discountStart)
   },
   {
      name: 'Discount End',
      minWidth: '172px',
      selector: 'role',
      sortable: true,
      cell: row => formatDateTime(row.discountEnd)
   },
   {
      name: 'Status',
      minWidth: '138px',
      selector: 'status',
      sortable: true,
      cell: row => (
         <Badge className='text-capitalize light-success' color={statusObj['active']} pill>
            {row.isActive === true && <>active</>}
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
                  to={`/order/voucher/view/${row._id}`}
                  className='w-100'
                  onClick={() => store.dispatch(getVoucherById(row._id))}
               >
                  <FileText size={14} className='mr-50' />
                  <span className='align-middle'>Details</span>
               </DropdownItem> */}
               <DropdownItem
                  tag={Link}
                  to={`/order/voucher/edit/${row._id}`}
                  className='w-100'
                  onClick={() => store.dispatch(getVoucherById(row._id))}
               >
                  <Archive size={14} className='mr-50' />
                  <span className='align-middle'>Edit</span>
               </DropdownItem>
               <DropdownItem className='w-100' onClick={() => store.dispatch(deleteVoucher(row._id))}>
                  <Trash2 size={14} className='mr-50' />
                  <span className='align-middle'>Delete</span>
               </DropdownItem>
            </DropdownMenu>
         </UncontrolledDropdown>
         
      )
      
   }
]