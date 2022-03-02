import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { getProductById } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

import { Row, Col, Alert } from 'reactstrap'

import PlanCard from './PlanCard'
import ProductInfoCard from './ProductInfoCard'
import ProductTimeline from './ProductTimeline'
import InvoiceList from '../../invoice/list'
import PermissionsTable from './PermissionsTable'

import '@styles/react/apps/app-users.scss'

const ProductView = props => {
    const store = useSelector(state => state.products),
        dispatch = useDispatch(),
        { id } = useParams()

    useEffect(() => {
        dispatch(getProductById(id))
    }, [dispatch])

    return store.selectedProduct !== null && store.selectedProduct !== undefined ? (
        <div className='app-user-view'>
            <Row>
                <Col xl='9' lg='8' md='7'>
                    <ProductInfoCard selectedCategory={store.selectedCategory} />
                </Col>
                <Col xl='3' lg='4' md='5'>
                    <PlanCard selectedCategory={store.selectedCategory} />
                </Col>
            </Row>
            <Row>
                <Col md='6'>
                    <ProductTimeline />
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

export default ProductView