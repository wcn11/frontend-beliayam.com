import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import VoucherAccountTab from './Account'

import { getVoucherById } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

import { Box, Info, Share2 } from 'react-feather'
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert } from 'reactstrap'

import '@styles/react/apps/app-users.scss'

const VoucherEdit = () => {
   const [activeTab, setActiveTab] = useState('1'),
      store = useSelector(state => state.vouchers),
      dispatch = useDispatch(),
      { id } = useParams()

   const toggle = tab => setActiveTab(tab)

   useEffect(() => {
      dispatch(getVoucherById(id))
      return () => dispatch(getVoucherById(id))
   }, [dispatch, id])

   return store.selectedVoucher !== null && store.selectedVoucher !== undefined ? (
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
                        <VoucherAccountTab selectedVoucher={store.selectedVoucher} />
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
         <h4 className='alert-heading'>Voucher not found</h4>
         <div className='alert-body'>
            Voucher with id: {id} doesn't exist. Check list of all Vouchers: <Link to='/order/voucher/list'>Vouchers List</Link>
         </div>
      </Alert>
   )
}

export default VoucherEdit