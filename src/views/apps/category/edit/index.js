import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// import SocialTab from './Social'
import CategoryAccountTab from './Account'
import InfoTab from './Information'

import { getCategoryById } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

import { Clipboard, Info } from 'react-feather'
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert } from 'reactstrap'

import '@styles/react/apps/app-users.scss'

const CategoryEdit = () => {
    // ** States & Vars
    const [activeTab, setActiveTab] = useState('1'),
        store = useSelector(state => state.categories),
        dispatch = useDispatch(),
        { id } = useParams()

    // ** Function to toggle tabs
    const toggle = tab => setActiveTab(tab)

    // ** Function to get user on mount
    useEffect(() => {
        dispatch(getCategoryById(id))
        return () => dispatch(getCategoryById(id))
    }, [dispatch, id])

    return store.selectedCategory !== null && store.selectedCategory !== undefined ? (
        <Row className='app-user-edit'>
            <Col sm='12'>
                <Card>
                    <CardBody className='pt-2'>
                        <Nav pills>
                            <NavItem>
                                <NavLink active={activeTab === '1'} onClick={() => toggle('1')}>
                                    <Clipboard size={14} />
                                    <span className='align-middle d-none d-sm-block'>Category</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active={activeTab === '2'} onClick={() => toggle('2')}>
                                    <Info size={14} />
                                    <span className='align-middle d-none d-sm-block'>Information</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId='1'>
                                <CategoryAccountTab selectedCategory={store.selectedCategory} />
                            </TabPane>
                            <TabPane tabId='2'>
                                <InfoTab />
                            </TabPane>
                            {/* <TabPane tabId='3'>
                                <SocialTab />
                            </TabPane> */}
                        </TabContent>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    ) : (
        <Alert color='danger'>
            <h4 className='alert-heading'>Category not found</h4>
            <div className='alert-body'>
                Category with id: {id} doesn't exist. Check list of all Categorys: <Link to='/apps/category/list'>Categorys List</Link>
            </div>
        </Alert>
    )
}

export default CategoryEdit