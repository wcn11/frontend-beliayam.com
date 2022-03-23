// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'

// ** Utils
import { formatDateTime, numberFormat, isObjEmpty } from "@utils"

// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/base/pages/app-invoice.scss'

import { Check } from 'react-feather'

import { toast, Slide } from 'react-toastify'
import ToastUpdate from '../../../components/toasts/ToastUpdate'

// ** Store & Actions
import { cancelOrderPayment } from "../store/action"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const SidebarCancelPayment = ({ open, toggleSidebar, selectedOrder }) => {
  // ** States
  const [picker, setPicker] = useState(new Date())

  const dispatch = useDispatch(), { id } = useParams()
  const { errors } = useForm()

  // cancel order
  const cancelOrder = (orderId) => {
    console.log('cancelorder')
    if (isObjEmpty(errors)) {
      dispatch(
        cancelOrderPayment(orderId)
      )
      
      toggleSidebar
    }

    
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='Cancel Payment'
      headerClassName='mb-1'
      contentClassName='p-0'
      toggleSidebar={toggleSidebar}
    >
      <Form>
        <FormGroup>
          <Label>
            <p>Apakah anda yakin ingin <b>membatalkan</b> pesanan ini?</p> 
          </Label>
        </FormGroup>
        <FormGroup>
          <Input id='amount' defaultValue={`Grand Total : ${numberFormat(selectedOrder.grand_total)}`} disabled />
        </FormGroup>        
        <FormGroup className='d-flex flex-wrap mb-0'>
          <Button className='mr-1' color='primary' onClick={() => cancelOrder(selectedOrder.order_id)}>
            Ok
          </Button>
          <Button color='secondary' outline onClick={toggleSidebar}>
            Cancel
          </Button>
        </FormGroup>
      </Form>
    </Sidebar>
  )
}

export default SidebarCancelPayment
