import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// import SocialTab from './Social'
import AccountTab from './Account'
import InfoTab from './Information'

import { getCategory } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

import { User, Info, Share2 } from 'react-feather'
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert } from 'reactstrap'

import '@styles/react/apps/app-users.scss'

const CategoryEdit = () => {
    // ** States & Vars
    const [activeTab, setActiveTab] = useState('1'),
        store = useSelector(state => state.users),
        dispatch = useDispatch(),
        { id } = useParams()

    // ** Function to toggle tabs
    const toggle = tab => setActiveTab(tab)

    // ** Function to get user on mount
    useEffect(() => {
        dispatch(getCategory(parseInt(id)))
        return () => dispatch(getCategory(parseInt(0)))
    }, [dispatch, id])

    return store.selectedUser !== null && store.selectedUser !== undefined ? (
        <Row className='app-user-edit'>
            <Col sm='12'>
                <Card>
                    <CardBody className='pt-2'>
                        <Nav pills>
                            <NavItem>
                                <NavLink active={activeTab === '1'} onClick={() => toggle('1')}>
                                    <User size={14} />
                                    <span className='align-middle d-none d-sm-block'>Account</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active={activeTab === '2'} onClick={() => toggle('2')}>
                                    <Info size={14} />
                                    <span className='align-middle d-none d-sm-block'>Information</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active={activeTab === '3'} onClick={() => toggle('3')}>
                                    <Share2 size={14} />
                                    <span className='align-middle d-none d-sm-block'>Social</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId='1'>
                                <AccountTab selectedUser={store.selectedUser} />
                            </TabPane>
                            <TabPane tabId='2'>
                                <InfoTab />
                            </TabPane>
                            <TabPane tabId='3'>
                                <SocialTab />
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    ) : (
        <Alert color='danger'>
            <h4 className='alert-heading'>Category not found</h4>
            <div className='alert-body'>
                Category with id: {id} doesn't exist. Check list of all Categorys: <Link to='/apps/user/list'>Categorys List</Link>
            </div>
        </Alert>
    )
}

export default CategoryEdit