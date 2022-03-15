// ** React Imports
import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// ** Store & Actions
import { getOrderById } from "../store/action"
import { useSelector, useDispatch } from "react-redux"

// ** Reactstrap
import { Row, Col, Alert } from "reactstrap"

// ** User View Components
import PlanCard from "./PlanCard"
import OrderInfoCard from "./OrderInfoCard"
import OrderTimeline from "./OrderTimeline"
import InvoiceList from "../../invoice/list"
import PermissionsTable from "./PermissionsTable"

// ** Styles
import "@styles/react/apps/app-users.scss"

const OrderView = (props) => {
  // ** Vars
  const store = useSelector((state) => state.orders),
    dispatch = useDispatch(),
    { id } = useParams()

  // ** Get suer on mount
  useEffect(() => {
    dispatch(getOrderById(id))
  }, [dispatch, id])
  console.log('ini di view')
  console.log(store)
  console.log(store.selectedOrder)
  return store.selectedOrder !== null && store.selectedOrder !== undefined ? (
    <div className="app-user-view">
      <Row>
        <Col xl="9" lg="8" md="7">
          <OrderInfoCard selectedOrder={store.selectedOrder} />
        </Col>
        <Col xl="3" lg="4" md="5">
          <PlanCard selectedOrder={store.selectedOrder} />
        </Col>
      </Row>
      <Row>
        <Col md="6">
          {/* <OrderTimeline selectedOrder={store.selectedOrder} /> */}
        </Col>
        <Col md="6">{/* <PermissionsTable /> */}</Col>
      </Row>
      <Row>
        <Col sm="12">{/* <InvoiceList /> */}</Col>
      </Row>
    </div>
  ) : (
    <Alert color="danger">
      <h4 className="alert-heading">Order not found</h4>
      <div className="alert-body">
        Order with id: {id} doesn't exist. Check list of all orders:{" "}
        <Link to="/apps/order/list">orders List</Link>
      </div>
    </Alert>
  )
}
export default OrderView
