import { useState } from 'react'
import { Row, Col, CustomInput, Button } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserActive } from '../store/action'
import { store } from '@store/storeConfig/store'
import { useParams } from 'react-router-dom'

const NotificationsTabContent = ({ data }) => {
   const [activity, setActivity] = useState({
      notify: false
   })

   const dispatch = useDispatch(),
      {id} = useParams()

   const onSubmit = () => {
      if (activity?.active) {
         dispatch(updateUserActive(id, activity))
      } else {
         dispatch(updateUserActive(id, { ...activity, active: data[0]?.active}))
      }
   }

   return (
      <Row>
         <h6 className='section-label mx-1 mb-2'>Activity</h6>
         <Col sm='12' className='mb-2'>
            <CustomInput
               type='switch'
               id='updateUserActive'
               defaultChecked={data[0].active}
               onChange={(e) => setActivity({...activity, active: e.target.checked})}
               name='customSwitch'
               label='Nonactive kan User'
            />
         </Col>
         <Col sm='12' className='mb-2'>
            <CustomInput
               type='switch'
               id='answerOnForm'
               onChange={(e) => setActivity({ ...activity, notify: e.target.checked })}
               name='customSwitch'
               label='Nonactive kan pemberitahuan ke User'
            />
         </Col>
         {/* <Col sm='12' className='mb-2'>
            <CustomInput
               type='switch'
               id='followMe'
               checked={followMe}
               onChange={e => setFollowMe(e.target.checked)}
               name='customSwitch'
               label='Email ke user bahwa akun telah dinonactive kan'
            />
         </Col> */}
         {/* <h6 className='section-label mx-1 mt-2'>Application</h6>
         <Col sm='12' className='mt-1 mb-2'>
            <CustomInput
               type='switch'
               id='newAnnouncements'
               checked={newAnnouncements}
               onChange={e => setNewAnnouncements(e.target.checked)}
               name='customSwitch'
               label='News and announcements'
            />
         </Col>
         <Col sm='12' className='mb-2'>
            <CustomInput
               type='switch'
               id='productUpdates'
               checked={productUpdates}
               onChange={e => setProductUpdates(e.target.checked)}
               name='customSwitch'
               label='Weekly product updates'
            />
         </Col>
         <Col sm='12' className='mb-75'>
            <CustomInput
               type='switch'
               id='blogDigest'
               checked={blogDigest}
               onChange={e => setBlogDigest(e.target.checked)}
               name='customSwitch'
               label='Weekly promo and discount updates'
            />
         </Col> */}
         <Col className='mt-1' sm='12'>
            <Button.Ripple onClick={onSubmit} className='mr-1' color='primary'>
               Save changes
            </Button.Ripple>
            <Button.Ripple color='secondary' outline>
               Cancel
            </Button.Ripple>
         </Col>
      </Row>
   )
}

export default NotificationsTabContent
