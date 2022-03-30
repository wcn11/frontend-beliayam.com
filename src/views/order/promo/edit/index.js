import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import TableProduct from './tableProduct'
import PromoAccountTab from './Account'

import { getPromoById } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

import { Percent, Info } from 'react-feather'
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert } from 'reactstrap'

import '@styles/react/apps/app-users.scss'

const PromoEdit = () => {
   const [activeTab, setActiveTab] = useState('1'),
      store = useSelector(state => state.promos),
      dispatch = useDispatch(),
      { id } = useParams()

   const toggle = tab => setActiveTab(tab)

   useEffect(() => {
      dispatch(getPromoById(id))
      return () => dispatch(getPromoById(id))
   }, [dispatch, id])

   return store.selectedPromo !== null && store.selectedPromo !== undefined ? (<Row className='app-user-edit'>
      <Col sm='12'>
         <Card>
            <CardBody className='pt-2'>
               <Nav pills>
                  <NavItem>
                     <NavLink active={activeTab === '1'} onClick={() => toggle('1')}>
                        <Percent size={14} />
                        <span className='align-middle d-none d-sm-block'>Promo</span>
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink active={activeTab === '2'} onClick={() => toggle('2')}>
                           <Info size={14} />
                           <span className='align-middle d-none d-sm-block'>Product Promo</span>
                     </NavLink>
                  </NavItem>
               </Nav>
               <TabContent activeTab={activeTab}>
                  <TabPane tabId='1'>
                     <PromoAccountTab selectedPromo={store.selectedPromo} />
                  </TabPane>
                  <TabPane tabId='2'>
                     <TableProduct />
                  </TabPane>
                  <TabPane tabId='3'>
                  </TabPane>
               </TabContent>
            </CardBody>
         </Card>
      </Col>
   </Row>) : (
      <Alert color = 'danger'>
         <h4 className = 'alert-heading'>Promo not found</h4 >
      <div className='alert-body'>
         Promo with id: {id} doesn't exist. Check list of all Promos: <Link to='/order/promo/list'>Promos List</Link>
      </div>
      </Alert>
   )
}

export default PromoEdit