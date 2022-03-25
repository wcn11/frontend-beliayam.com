import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Third Party Components
import { Row, Col, Alert } from 'reactstrap'

// ** Order Preview Components
import PreviewCard from './PreviewCard'
import PreviewActions from './PreviewActions'
import SendOrderSidebar from '../shared-sidebar/SidebarSendInvoice'
import AddPaymentSidebar from '../shared-sidebar/SidebarAddPayment'
import CancelPaymentSidebar from '../shared-sidebar/SidebarCancelPayment'
import CompletePaymentSidebar from '../shared-sidebar/SidebarCompletePayment'
import StatusDelivery from "../shared-sidebar/sidebarDelivery"

// ** Store & Actions
import { getOrderById } from "../store/action"
import { useSelector, useDispatch } from "react-redux"

// ** Styles
import '@styles/base/pages/app-order.scss'

const OrderPreview = () => { 

  // ** States
  const [data, setData] = useState(null)
  const [sendSidebarOpen, setSendSidebarOpen] = useState(false)
  const [addPaymentOpen, setAddPaymentOpen] = useState(false)
  const [completePaymentOpen, setCompletePaymentOpen] = useState(false)
  const [cancelPaymentOpen, setCancelPaymentOpen] = useState(false)
  const [deliverOpen, setDeliverOpen] = useState(false)

  // ** Functions to toggle add & send sidebar
  const toggleSendSidebar = () => setSendSidebarOpen(!sendSidebarOpen)
  const toggleAddSidebar = () => setAddPaymentOpen(!addPaymentOpen)
  const toggleCompleteSidebar = () => setCompletePaymentOpen(!completePaymentOpen)
  const toggleCancelSidebar = () => setCancelPaymentOpen(!cancelPaymentOpen)
  const toggleDeliverSidebar = () => setDeliverOpen(!deliverOpen)

  // ** Vars
  const store = useSelector((state) => state.orders),
    dispatch = useDispatch(),
    { id } = useParams()

  // ** Get suer on mount
  useEffect(() => {
    dispatch(getOrderById(id))
  }, [dispatch, id])

  return store.selectedOrder !== null && store.selectedOrder !== undefined ? (
    <div className='order-preview-wrapper'>
      <Row className='order-preview'>
        <Col xl={9} md={8} sm={12}>
          <PreviewCard data={store.selectedOrder} />
        </Col>
        <Col xl={3} md={4} sm={12}>
          <PreviewActions id={id} order={store.selectedOrder} setSendSidebarOpen={setSendSidebarOpen} setAddPaymentOpen={setAddPaymentOpen} setCompletePaymentOpen={setCompletePaymentOpen} setCancelPaymentOpen={setCancelPaymentOpen} />
        </Col>
      </Row>
      <SendOrderSidebar toggleSidebar={toggleSendSidebar} open={sendSidebarOpen} />
      <AddPaymentSidebar toggleSidebar={toggleAddSidebar} open={addPaymentOpen} />
      <StatusDelivery toggleSidebar={toggleDeliverSidebar} open={deliverOpen}/>
      {store.selectedOrder.order_status.status === "PAYMENT_SUCCESS" && store.selectedOrder.order_status.status === "PAYMENT_CANCELLED"  ? <CompletePaymentSidebar toggleSidebar={toggleCompleteSidebar} open={completePaymentOpen} selectedOrder={store.selectedOrder} /> : "" }      
      {store.selectedOrder.order_status.status === "PAYMENT_SUCCESS" && store.selectedOrder.order_status.status === "PAYMENT_CANCELLED" ? <CancelPaymentSidebar toggleSidebar={toggleCancelSidebar} open={cancelPaymentOpen} selectedOrder={store.selectedOrder} /> : "" }      
    </div>
  ) : (
    <Alert color='danger'>
      <h4 className='alert-heading'>Order not found</h4>
      <div className='alert-body'>
        Order with id: {id} doesn't exist. Check list of all orders: <Link to='/order/list'>Order List</Link>
      </div>
    </Alert>
  )
}

export default OrderPreview
