// ** React Imports
import { Link } from 'react-router-dom'

// ** Third Party Components
import { Card, CardBody, Button } from 'reactstrap'

const PreviewActions = ({ id, order, setSendSidebarOpen, setAddPaymentOpen, setCompletePaymentOpen, setCancelPaymentOpen }) => {
  return (
    <Card className='invoice-action-wrapper'>
      <CardBody>
        {/* <Button.Ripple color='warning' block outline className='mb-75' onClick={() => setSendSidebarOpen(true)}>
          Send Invoice
        </Button.Ripple>
        <Button.Ripple color='secondary' block outline className='mb-75'>
          Download
        </Button.Ripple>
        <Button.Ripple
          color='secondary'
          tag={Link}
          to='/apps/invoice/print'
          target='_blank'
          block
          outline
          className='mb-75'
        >
          Print
        </Button.Ripple> */}
        {/* <Button.Ripple tag={Link} to={`/apps/invoice/edit/${id}`} color='secondary' block outline className='mb-75'>
          Edit
        </Button.Ripple>
        <Button.Ripple color='success' block onClick={() => setAddPaymentOpen(true)}>
          Add Payment
        </Button.Ripple> */}
        {order.order_status.status !== "PAYMENT_SUCCESS" ? <Button.Ripple color='danger' block outline onClick={() => setCompletePaymentOpen(true)}> Complete Payment </Button.Ripple> : ""}
        {order.order_status.status !== "PAYMENT_SUCCESS" ? <Button.Ripple color='danger' block onClick={() => setCancelPaymentOpen(true)}> Cancel Payment </Button.Ripple> : ""}
        {order.order_status.status === "PAYMENT_SUCCESS" ? <p>Pesanan telah selesai</p> : "" }
      </CardBody>
    </Card>
  )
}

export default PreviewActions
