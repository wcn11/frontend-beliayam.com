// ** React Imports
import { Fragment, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Store & Actions
import { getUserById } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap
import { Row, Col, Alert, TabContent, TabPane, Card, CardBody } from 'reactstrap'

// ** User View Components
import Tabs from './Tabs'
import NotificationsTabContent from './NotificationTabContent'
import GeneralContent from './GeneralContent'

// ** Styles
import '@styles/react/apps/app-users.scss'

const UserView = props => {
  // ** Vars
  const store = useSelector(state => state.users),
    dispatch = useDispatch(),
    { id } = useParams()

  const [activeTab, setActiveTab] = useState('1')
  const toggleTab = tab => {
    setActiveTab(tab)
  }
  // ** Get suer on mount
  useEffect(() => {
    dispatch(getUserById(id))
  }, [dispatch])

  return store.selectedUser !== null && store.selectedUser !== undefined ? (
    <Fragment>
      <div className='app-user-view'>
        <Row>
          <Col className='mb-2 mb-md-0' md='3'>
            <Tabs activeTab={activeTab} toggleTab={toggleTab} selectedUser={store.selectedUser} />
          </Col>
          <Col md='9'>
            <Card>
              <CardBody>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId='1'>
                    <GeneralContent data={store.selectedUser}/>
                  </TabPane>
                  <TabPane tabId='2'>
                    No data
                  </TabPane>
                  <TabPane tabId='3'>
                    No data
                  </TabPane>
                  <TabPane tabId='4'>
                    <NotificationsTabContent data={store.selectedUser}/>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  ) : (
    <Alert color='danger'>
      <h4 className='alert-heading'>User not found</h4>
      <div className='alert-body'>
        User with id: {id} doesn't exist. Check list of all Users: <Link to='/apps/user/list'>Users List</Link>
      </div>
    </Alert>
  )

}
export default UserView
