import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { XCircle, Info } from 'react-feather'
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert } from 'reactstrap'

// ** Styles
import '@styles/react/apps/app-users.scss'

const FailedList = () => {
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
                           <XCircle size={14} />
                           <span className='align-middle d-none d-sm-block'>Payment Cancel</span>
                        </NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink active={activeTab === '2'} onClick={() => toggle('2')}>
                           <Info size={14} />
                           <span className='align-middle d-none d-sm-block'>Payment Expired</span>
                        </NavLink>
                     </NavItem>
                  </Nav>
                  <TabContent activeTab={activeTab}>
                     <TabPane tabId='1'>
                        {/* <TableProgress /> */}
                     </TabPane>
                     <TabPane tabId='2'>
                        {/* <Table /> */}
                     </TabPane>
                  </TabContent>
               </CardBody>
            </Card>
         </Col>
      </Row>
   )
}

export default FailedList