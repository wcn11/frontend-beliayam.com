// ** React Imports
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Store & Actions
import { getPromoById } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap
import { Row, Col, Alert } from 'reactstrap'

// ** User View Components
import PlanCard from './PlanCard'
import PromoInfoCard from './PromoInfoCard'
import PromoTimeline from './PromoTimeline'
import InvoiceList from '../../invoice/list'
import PermissionsTable from './PermissionsTable'

// ** Styles
import '@styles/react/apps/app-users.scss'


const PromoView = props => {
    // ** Vars
    const store = useSelector(state => state.categories),
        dispatch = useDispatch(),
        { id } = useParams()

    // ** Get suer on mount
    useEffect(() => {
        dispatch(getPromoById(id))
    }, [dispatch, id])

    return store.selectedPromo !== null && store.selectedPromo !== undefined ? (
        <div className='app-user-view'>
            <Row>
                <Col xl='9' lg='8' md='7'>
                    <PromoInfoCard selectedPromo={store.selectedPromo} />
                </Col>
                <Col xl='3' lg='4' md='5'>
                    <PlanCard selectedPromo={store.selectedPromo} />
                </Col>
            </Row>
            <Row>
                <Col md='6'>
                    {/* <PromoTimeline selectedPromo={store.selectedPromo} /> */}
                </Col>
                <Col md='6'>
                    {/* <PermissionsTable /> */}
                </Col>
            </Row>
            <Row>
                <Col sm='12'>
                    {/* <InvoiceList /> */}
                </Col>
            </Row>
        </div>
    ) : (
        <Alert color='danger'>
            <h4 className='alert-heading'>Promo not found</h4>
            <div className='alert-body'>
                Promo with id: {id} doesn't exist. Check list of all promos: <Link to='/apps/promo/list'>promos List</Link>
            </div>
        </Alert>
    )
}
export default PromoView
