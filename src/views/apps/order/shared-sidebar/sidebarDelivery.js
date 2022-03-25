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

// ** Store & Actions
import { fetcher } from "@src/utility/axiosHooks"
import { SET_STATUS_DELIVERY } from "@src/utility/Url"
import { useHistory } from "react-router-dom"

const SidebarStatusDelivery = ({ open, toggleSidebar, selectedOrder }) => {

   return (
      <Sidebar
         size='lg'
         open={open}
         title='Complete Payment'
         headerClassName='mb-1'
         contentClassName='p-0'
         toggleSidebar={toggleSidebar}
      >
         <Form>
            <FormGroup>
               <Label>
                  <b>Apakah anda yakin pesanan ini sudah dikirim?</b>

                  <p>Pastikan terlebih dahulu pesanan ini sudah dikirim</p>
               </Label>
            </FormGroup>
            <FormGroup className='d-flex flex-wrap mb-0'>
               <Button className='mr-1' color='primary'>
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

export default SidebarStatusDelivery
