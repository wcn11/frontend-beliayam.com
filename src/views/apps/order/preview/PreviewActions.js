// ** React Imports
import { fetcher } from "@src/utility/axiosHooks"
import { SET_STATUS_DELIVERY } from "@src/utility/Url"
import { useHistory } from "react-router-dom"
import { Toast, ToastWarning } from '@src/utility/Toast'
import { Check, X } from "react-feather"

// ** Third Party Components
import { Card, CardBody, Button } from 'reactstrap'

const PreviewActions = ({ order, setCompletePaymentOpen, setCancelPaymentOpen }) => {
  const history = useHistory()

  const deliverOrder = () => {
    const orderId = order.bill.bill_no

    const req = {
      method: 'PUT',
      data: {
        order_id: orderId,
        delivery: {
          isDelivery: true,
        }
      }
    }
    const res = fetcher(SET_STATUS_DELIVERY, req)

    if (res) {
      try {
        Toast({ icon: <Check size={12} />, title: 'Pengirima Berhasil nih', content: 'Barang sudah dikirim dan sedang dalam perjalanan' })
        history.push('/apps/order/list')
      } catch (error) {
        ToastWarning({
          icon: <X size={12} />,
          title: 'Gagal!',
          content: error?.data?.message
        })
      }
      
    }
  }

  return (
    <Card className='invoice-action-wrapper'>
      <CardBody>
        {order?.order_status?.status !== "PAYMENT_SUCCESS" && order?.order_status?.status !== "PAYMENT_CANCELLED" && order.order_status.status !== "PAYMENT_EXPIRED" ? <Button.Ripple color='danger' block outline onClick={() => setCompletePaymentOpen(true)}> Complete Payment </Button.Ripple> : ""}
        {order?.order_status?.status !== "PAYMENT_SUCCESS" && order?.order_status?.status !== "PAYMENT_CANCELLED" && order.order_status.status !== "PAYMENT_EXPIRED" ? <Button.Ripple color='danger' block onClick={() => setCancelPaymentOpen(true)}> Cancel Payment </Button.Ripple> : ""}
        {order?.order_status?.status === "PAYMENT_EXPIRED" ? <p>Waktu Pembayaran Sudah Habis</p> : ""}
        {order?.order_status?.status === "PAYMENT_CANCELLED" ? <p>Pembayaran dibatalkan</p> : ""}
        {order?.delivery?.isDelivery === true ? <p>Orderan dikirimkan nih</p> : <Button.Ripple color='danger' block onClick={deliverOrder}> Deliver Order </Button.Ripple>}
      </CardBody>
    </Card>
  )
}

export default PreviewActions
