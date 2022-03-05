// ** React Imports
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Store & Actions
import { getCategoryById } from '../store/action'
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


const CategoryView = props => {
    // ** Vars
    const store = useSelector(state => state.categories),
        dispatch = useDispatch(),
        { id } = useParams()

    // ** Get suer on mount
    useEffect(() => {
        dispatch(getCategoryById(id))
    }, [dispatch, id])

    return store.selectedCategory !== null && store.selectedCategory !== undefined ? (
        <div className='app-user-view'>
            <Row>
                <Col xl='9' lg='8' md='7'>
                    <CategoryInfoCard selectedCategory={store.selectedCategory} />
                </Col>
                <Col xl='3' lg='4' md='5'>
                    <PlanCard selectedCategory={store.selectedCategory} />
                </Col>
            </Row>
            <Row>
                <Col md='6'>
                    {/* <CategoryTimeline selectedCategory={store.selectedCategory} /> */}
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
            <h4 className='alert-heading'>Category not found</h4>
            <div className='alert-body'>
                Category with id: {id} doesn't exist. Check list of all categorys: <Link to='/apps/category/list'>categorys List</Link>
            </div>
        </Alert>
    )
}
export default CategoryView
