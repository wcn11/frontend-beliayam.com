import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import {  Media, Label, Row, Col, Input, FormGroup, Alert, Form } from 'reactstrap'

const GeneralContent = ({data}) => {
   const [avatar, setAvatar] = useState(data.avatar ? data.avatar : '')
   
   const onChange = e => {
      const reader = new FileReader(),
         files = e.target.files
      reader.onload = function () {
         setAvatar(reader.result)
      }
      reader.readAsDataURL(files[0])
   }

   return (
      <Fragment>
         <Media>
            <Media className='mr-25' left>
               <Media object className='rounded mr-50' src={avatar} alt='Generic placeholder image' height='80' width='80' />
            </Media>
            {/* <Media className='mt-75 ml-1' body>
               <Button.Ripple tag={Label} className='mr-75' size='sm' color='primary'>
                  Upload
                  <Input type='file' onChange={onChange} hidden accept='image/*' />
               </Button.Ripple>
               <Button.Ripple color='secondary' size='sm' outline>
                  Reset
               </Button.Ripple>
               <p>Allowed JPG, GIF or PNG. Max size of 800kB</p>
            </Media> */}
         </Media>
         <Form className='mt-2' key={data[0]._id}>
            <Row>
               <Col sm='6'>
                  <FormGroup>
                     <Label for='username'>Phone Number</Label>
                     <Input
                        defaultValue={data[0].phone}
                        id='username'
                        name='username'
                        disabled
                     />
                  </FormGroup>
               </Col>
               <Col sm='6'>
                  <FormGroup>
                     <Label for='name'>Name</Label>
                     <Input
                        defaultValue={data[0].name}
                        id='name'
                        name='name'
                        disabled
                     />
                  </FormGroup>
               </Col>
               <Col sm='6'>
                  <FormGroup>
                     <Label for='email'>E-mail</Label>
                     <Input
                        defaultValue={data[0].email}
                        type='email'
                        id='email'
                        name='email'
                        disabled
                     />
                  </FormGroup>
               </Col>
               <Col sm='6'>
                  <FormGroup>
                     <Label for='registeredBy'>Register By</Label>
                     <Input
                        defaultValue={data[0].registeredBy}
                        id='registeredBy'
                        name='registeredBy'
                        disabled
                     />
                  </FormGroup>
               </Col>
               
               <Col sm='12'>
                  <h6 className='section-label mx-1 mb-1 mt-2'>Addresses</h6>
               </Col>
               {data[0].addresses[0] ? (
                  <>
                  <Col sm='6'>
                     <FormGroup>
                        <Label for='mainAddress'>Main Address</Label>
                        <Input
                           defaultValue={data[0]?.addresses[0]?.address1}
                           id='mainAddress'
                           name='mainAddress'
                           disabled />
                     </FormGroup>
                  </Col><Col sm='6'>
                        <FormGroup>
                           <Label for='secondAddress'>Second Address</Label>
                           <Input
                              defaultValue={data[0]?.addresses[0]?.address2}
                              id='secondAddress'
                              name='secondAddress'
                              disabled />
                        </FormGroup>
                     </Col><Col sm='6'>
                        <FormGroup>
                           <Label for='cityName'>City</Label>
                           <Input
                              defaultValue={data[0]?.addresses[0]?.city.name}
                              id='cityName'
                              name='cityName'
                              disabled />
                        </FormGroup>
                     </Col><Col sm='6'>
                        <FormGroup>
                           <Label for='districtName'>Disctrict</Label>
                           <Input
                              defaultValue={data[0]?.addresses[0]?.district.name}
                              id='districtName'
                              name='districtName'
                              disabled />
                        </FormGroup>
                     </Col><Col sm='6'>
                        <FormGroup>
                           <Label for='subDistrictName'>Sub Disctrict</Label>
                           <Input
                              defaultValue={data[0]?.addresses[0]?.sub_district.name}
                              id='subDistrictName'
                              name='subDistrictName'
                              disabled />
                        </FormGroup>
                     </Col><Col sm='6'>
                        <FormGroup>
                           <Label for='stateName'>State</Label>
                           <Input
                              defaultValue={data[0]?.addresses[0]?.state.name}
                              id='stateName'
                              name='stateName'
                              disabled />
                        </FormGroup>
                     </Col><Col sm='6'>
                        <FormGroup>
                           <Label for='label'>Label</Label>
                           <Input
                              defaultValue={data[0]?.addresses[0]?.label}
                              id='label'
                              name='label'
                              disabled />
                        </FormGroup>
                     </Col><Col sm='6'>
                        <FormGroup>
                           <Label for='postCode'>Post Code</Label>
                           <Input
                              defaultValue={data[0]?.addresses[0]?.postcode}
                              id='postCode'
                              name='postCode'
                              disabled />
                        </FormGroup>
                     </Col>
                  </>) : (<div className='mx-2 mb-1'>data Addresses not found</div>)}
               
               {data[0].isEmailVerified === true ? (<div></div>) : (<Col className = 'mt-75' sm = '12'>
                  <Alert className = 'mb-50' color = 'success'>
                     <h4 className = 'alert-heading'>email user is not confirmed. Send email for user to confirm email?</h4>
            <div className='alert-body'>
               <a href='/' className='alert-link' onClick={e => e.preventDefault()}>
                  Send confirmation
               </a>
            </div>
         </Alert>
      </Col>)}
               {data[0].isPhoneVerified === true ? (<div></div>) : (<Col className = 'mt-75' sm = '12'>
                  <Alert className = 'mb-50' color = 'warning'>
                     <h4 className = 'alert-heading'>Phone Number user is not confirmed. Send email for user to confirm Phone Number?</h4>
            <div className='alert-body'>
               <a href='/' className='alert-link' onClick={e => e.preventDefault()}>
                  Send confirmation
               </a>
            </div>
         </Alert>
      </Col>)}
            </Row>
         </Form>
      </Fragment>
   )
}

export default GeneralContent