import Table from './TableSuccess'
import TableProgress from './listProgress/TableProgress'
import TableDone from './listDone/TableDone'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { XCircle, Info, CheckCircle, Loader, Truck } from 'react-feather'
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert } from 'reactstrap'

// ** Styles
import '@styles/react/apps/app-users.scss'

const OrderList = () => {
    const [activeTab, setActiveTab] = useState('1')

    const toggle = tab => setActiveTab(tab)

    return (
        <Row className='app-user-edit'>
            <Col sm='12'>
                <Card>
                    <CardBody className='pt-2'>
                        <Nav pills>
                            <NavItem>
                                <NavLink active={activeTab === '1'} onClick={() => toggle('1')}>
                                    <Loader size={14} />
                                    <span className='align-middle d-none d-sm-block'>On Progress</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active={activeTab === '2'} onClick={() => toggle('2')}>
                                    <CheckCircle size={14} />
                                    <span className='align-middle d-none d-sm-block'>Payment Success</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active={activeTab === '3'} onClick={() => toggle('3')}>
                                    <Truck size={14} />
                                    <span className='align-middle d-none d-sm-block'>Order Done</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId='1'>
                                <TableProgress/>
                            </TabPane>
                            <TabPane tabId='2'>
                                <Table />
                            </TabPane>
                            <TabPane tabId='3'>
                                <TableDone/>
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default OrderList