import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import ChargeAccountTab from './Account'

import { getChargeById } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

import { Box, Info, Share2 } from 'react-feather'
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert } from 'reactstrap'

import '@styles/react/apps/app-users.scss'

const ChargeEdit = () => {
   const [activeTab, setActiveTab] = useState('1'),
      store = useSelector(state => state.charges),
      dispatch = useDispatch(),
      { id } = useParams()

   const toggle = tab => setActiveTab(tab)

   useEffect(() => {
      dispatch(getChargeById(id))
      return () => dispatch(getChargeById(id))
   }, [dispatch, id])

   return store.selectedCharge !== null && store.selectedCharge !== undefined ? (
      <Row className='app-user-edit'>
         <Col sm='12'>
            <Card>
               <CardBody className='pt-2'>
                  <Nav pills>
                     <NavItem>
                        <NavLink active={activeTab === '1'} onClick={() => toggle('1')}>
                           <Box size={14} />
                           <span className='align-middle d-none d-sm-block'>Product</span>
                        </NavLink>
                     </NavItem>
                     {/* <NavItem>
                                <NavLink active={activeTab === '2'} onClick={() => toggle('2')}>
                                    <Info size={14} />
                                    <span className='align-middle d-none d-sm-block'>Information</span>
                                </NavLink>
                            </NavItem> */}
                     {/* <NavItem>
                                <NavLink active={activeTab === '3'} onClick={() => toggle('3')}>
                                    <Share2 size={14} />
                                    <span className='align-middle d-none d-sm-block'>Social</span>
                                </NavLink>
                            </NavItem> */}
                  </Nav>
                  <TabContent activeTab={activeTab}>
                     <TabPane tabId='1'>
                        <ChargeAccountTab selectedCharge={store.selectedCharge} />
                     </TabPane>
                     <TabPane tabId='2'>
                        {/* <InfoTab /> */}
                     </TabPane>
                     <TabPane tabId='3'>
                     </TabPane>
                  </TabContent>
               </CardBody>
            </Card>
         </Col>
      </Row>
   ) : (
      <Alert color='danger'>
         <h4 className='alert-heading'>Product not found</h4>
         <div className='alert-body'>
            Product with id: {id} doesn't exist. Check list of all Products: <Link to='/apps/product/list'>Products List</Link>
         </div>
      </Alert>
   )
}

export default ChargeEdit