// ** React Imports
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Store & Actions
import { getCategory } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap
import { Row, Col, Alert } from 'reactstrap'

// ** User View Components
import PlanCard from './PlanCard'
import CategoryInfoCard from './CategoryInfoCard'
import CategoryTimeline from './CategoryTimeline'
import InvoiceList from '../../invoice/list'
import PermissionsTable from './PermissionsTable'

// ** Styles
import '@styles/react/apps/app-users.scss'

const UserView = props => {
    // ** Vars
    const store = useSelector(state => state.users),
        dispatch = useDispatch(),
        { id } = useParams()

    // ** Get suer on mount
    useEffect(() => {
        dispatch(getCategory(parseInt(id)))
    }, [dispatch])

    return store.selectedUser !== null && store.selectedUser !== undefined ? (
        <div className='app-user-view'>
            <Row>
                <Col xl='9' lg='8' md='7'>
                    <CategoryInfoCard selectedUser={store.selectedUser} />
                </Col>
                <Col xl='3' lg='4' md='5'>
                    <PlanCard selectedUser={store.selectedUser} />
                </Col>
            </Row>
            <Row>
                <Col md='6'>
                    <CategoryTimeline />
                </Col>
                <Col md='6'>
                    <PermissionsTable />
                </Col>
            </Row>
            <Row>
                <Col sm='12'>
                    <InvoiceList />
                </Col>
            </Row>
        </div>
    ) : (
        <Alert color='danger'>
            <h4 className='alert-heading'>Category not found</h4>
            <div className='alert-body'>
                Category with id: {id} doesn't exist. Check list of all categorys: <Link to='/apps/category/list'>categorys List</Link>
            </div>
        </Alert>
    )
}
export default UserView
