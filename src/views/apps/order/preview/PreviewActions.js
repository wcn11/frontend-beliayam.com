// ** React Imports
import { fetcher } from "@src/utility/axiosHooks"
import { SET_STATUS_DELIVERY } from "@src/utility/Url"
import { useHistory } from "react-router-dom"

// ** Third Party Components
import { Card, CardBody, Button } from 'reactstrap'

const PreviewActions = ({ id, order, setSendSidebarOpen, setAddPaymentOpen, setCompletePaymentOpen, setCancelPaymentOpen }) => {
  
  const deliverOrder = async () => {
    const history = useHistory()
    const orderId = order.bill.bill_no
    const date = Date.now()
    const now = new Date(date)
    const req = {
      method: 'PUT',
      data: {
        order_id: orderId,
        delivery: {
          isDelivery: true,
        }
      }
    }
    const res = await fetcher(SET_STATUS_DELIVERY, req)
    if (res) {
      history.push('/apps/order/list')
    }
  }
  
  return (
    <Card className='invoice-action-wrapper'>
      <CardBody>
        {order.order_status.status !== "PAYMENT_SUCCESS" && order.order_status.status !== "PAYMENT_CANCELLED" && order.order_status.status !== "PAYMENT_EXPIRED" ? <Button.Ripple color='danger' block outline onClick={() => setCompletePaymentOpen(true)}> Complete Payment </Button.Ripple> : ""}
        {order.order_status.status !== "PAYMENT_SUCCESS" && order.order_status.status !== "PAYMENT_CANCELLED" && order.order_status.status !== "PAYMENT_EXPIRED" ? <Button.Ripple color='danger' block onClick={() => setCancelPaymentOpen(true)}> Cancel Payment </Button.Ripple> : ""}
        {order.order_status.status === "PAYMENT_EXPIRED" ? <p>Waktu Pembayaran Sudah Habis</p> : ""}
        {order.order_status.status === "PAYMENT_CANCELLED" ? <p>Pembayaran dibatalkan</p> : ""}
        {order.order_status.status === "PAYMENT_SUCCESS"  ? <Button.Ripple color='danger' block onClick={() => deliverOrder()}> Deliver Order </Button.Ripple> : "" }
      </CardBody>
    </Card>
  )
}

export default PreviewActions
