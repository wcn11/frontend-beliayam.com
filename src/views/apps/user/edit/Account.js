// ** React Imports
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
// ** Custom Components
import Avatar from '@components/avatar'

import { isObjEmpty } from '@utils'

// ** Third Party Components
import { Lock, Edit, Trash2 } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput } from 'reactstrap'
import { getUserById, updateUserActive } from '../store/action'

const UserAccountTab = ({ selectedUser }) => {
  // ** States
  const [img, setImg] = useState(null)
  const [userData, setUserData] = useState(null)

  const { register, errors, handleSubmit } = useForm()

  const dispatch = useDispatch()
  const { id } = useParams()

  // ** Function to change user image
  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setImg(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  // ** Update user image on mount or change
  useEffect(() => {
    dispatch(getUserById(id))
      // if (selectedUser?.avatar?.length) {
      //   return setImg(selectedUser?.avatar)
      // } else {
      //   return setImg(null)
      // }
    
  }, [id])

  useEffect(() => {
    setUserData(selectedUser)
  }, [selectedUser])

  const onSubmit = (values) => {
      const active = 'active'
      if (isObjEmpty(errors)) {
        dispatch(
          updateUserActive(id, active, {
            active: values.active,
            notify: values.notify
          })
        )
      }
  }

  console.log(selectedUser[0].active)

  // ** Renders User
  const renderUserAvatar = () => {
    if (img === null) {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <Avatar
          initials
          color={color}
          className='rounded mr-2 my-25'
          content={selectedUser?.name}
          contentStyles={{
            borderRadius: 0,
            fontSize: 'calc(36px)',
            width: '100%',
            height: '100%'
          }}
          style={{
            height: '90px',
            width: '90px'
          }}
        />
      )
    } else {
      return (
        <img
          className='user-avatar rounded mr-2 my-25 cursor-pointer'
          src={img}
          alt='user profile avatar'
          height='90'
          width='90'
        />
      )
    }
  }

  if (userData === null || userData === undefined) {
    return null
  } else {
    return (
      <Row>
        <Col sm='12'>
          <Media className='mb-2'>
            {/* {renderUserAvatar()} */}
            <Media className='mt-50' body>
              <h4>{selectedUser.fullName} </h4>
              <div className='d-flex flex-wrap mt-1 px-0'>
                <Button.Ripple id='change-img' tag={Label} className='mr-75 mb-0' color='primary'>
                  <span className='d-none d-sm-block'>Change</span>
                  <span className='d-block d-sm-none'>
                    <Edit size={14} />
                  </span>
                  <input type='file' hidden id='change-img' onChange={onChange} accept='image/*' />
                </Button.Ripple>
                <Button.Ripple color='secondary' outline>
                  <span className='d-none d-sm-block'>Remove</span>
                  <span className='d-block d-sm-none'>
                    <Trash2 size={14} />
                  </span>
                </Button.Ripple>
              </div>
            </Media>
          </Media>
        </Col>
        <Col sm='12'>
          <Form onSubmit={handleSubmit(onSubmit)} key={userData[0]._id}>
            <Row>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='name'>Name</Label>
                  <Input 
                  type='text' 
                  id='name' 
                  name='name'
                  placeholder='name...'
                  disabled
                  defaultValue={userData[0].name} />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='email'>Email</Label>
                  <Input 
                    type='email' 
                    id='email' 
                    disabled
                    name='email...'
                    placeholder='Email' 
                  defaultValue={userData[0].email} />
                </FormGroup>
              </Col>
              {/* <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='phone'>Email</Label>
                  <Input 
                    type='text' 
                    id='phone' 
                    disabled
                    name='phone'
                    placeholder='Phone Number....' 
                  defaultValue={userData[0].phone} />
                </FormGroup>
              </Col> */}
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='active'>active</Label>
                  <Input 
                  type='select' 
                  name='active' 
                  id='active' 
                  defaultValue={userData[0].active}>
                    <option value={true}>Active</option>
                    <option value={false}>Nonactive</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='notify'>notify</Label>
                  <Input
                    type='select'
                    name='notify'
                    id='notify'
                    defaultValue={userData[0].notify}>
                    <option value={true}>Active</option>
                    <option value={false}>Nonactive</option>
                  </Input>
                </FormGroup>
              </Col>
              {/* <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='role'>Role</Label>
                  <Input type='select' name='role' id='role' defaultValue={userData.role}>
                    <option value='admin'>Admin</option>
                    <option value='author'>Author</option>
                    <option value='editor'>Editor</option>
                    <option value='maintainer'>Maintainer</option>
                    <option value='subscriber'>Subscriber</option>
                  </Input>
                </FormGroup>
              </Col> */}
              {/* <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='company'>Company</Label>
                  <Input
                    type='text'
                    id='company'
                    defaultValue={userData.company}
                    placeholder='WinDon Technologies Pvt Ltd'
                  />
                </FormGroup>
              </Col> */}
              {/* <Col sm='12'>
                <div className='permissions border mt-1'>
                  <h6 className='py-1 mx-1 mb-0 font-medium-2'>
                    <Lock size={18} className='mr-25' />
                    <span className='align-middle'>Permissions</span>
                  </h6>
                  <Table borderless striped responsive>
                    <thead className='thead-light'>
                      <tr>
                        <th>Module</th>
                        <th>Read</th>
                        <th>Write</th>
                        <th>Create</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Admin</td>
                        <td>
                          <CustomInput type='checkbox' id='admin-1' label='' defaultChecked />
                        </td>
                        <td>
                          <CustomInput type='checkbox' id='admin-2' label='' />
                        </td>
                        <td>
                          <CustomInput type='checkbox' id='admin-3' label='' />
                        </td>
                        <td>
                          <CustomInput type='checkbox' id='admin-4' label='' />
                        </td>
                      </tr>
                      <tr>
                        <td>Staff</td>
                        <td>
                          <CustomInput type='checkbox' id='staff-1' label='' />
                        </td>
                        <td>
                          <CustomInput type='checkbox' id='staff-2' label='' defaultChecked />
                        </td>
                        <td>
                          <CustomInput type='checkbox' id='staff-3' label='' />
                        </td>
                        <td>
                          <CustomInput type='checkbox' id='staff-4' label='' />
                        </td>
                      </tr>
                      <tr>
                        <td>Author</td>
                        <td>
                          <CustomInput type='checkbox' id='author-1' label='' defaultChecked />
                        </td>
                        <td>
                          <CustomInput type='checkbox' id='author-2' label='' />
                        </td>
                        <td>
                          <CustomInput type='checkbox' id='author-3' label='' defaultChecked />
                        </td>
                        <td>
                          <CustomInput type='checkbox' id='author-4' label='' />
                        </td>
                      </tr>
                      <tr>
                        <td>Contributor</td>
                        <td>
                          <CustomInput type='checkbox' id='contributor-1' label='' />
                        </td>
                        <td>
                          <CustomInput type='checkbox' id='contributor-2' label='' />
                        </td>
                        <td>
                          <CustomInput type='checkbox' id='contributor-3' label='' />
                        </td>
                        <td>
                          <CustomInput type='checkbox' id='contributor-4' label='' />
                        </td>
                      </tr>
                      <tr>
                        <td>User</td>
                        <td>
                          <CustomInput type='checkbox' id='user-1' label='' />
                        </td>
                        <td>
                          <CustomInput type='checkbox' id='user-2' label='' />
                        </td>
                        <td>
                          <CustomInput type='checkbox' id='user-3' label='' />
                        </td>
                        <td>
                          <CustomInput type='checkbox' id='user-4' label='' defaultChecked />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col> */}
              <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
                <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                  Save Changes
                </Button.Ripple>
                <Button.Ripple color='secondary' outline>
                  Reset
                </Button.Ripple>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    )
  }
}
export default UserAccountTab
