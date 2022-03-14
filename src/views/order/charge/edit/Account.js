import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { isObjEmpty } from '@utils'

import { updateCharge, getChargeById } from '../store/action'
import { toast, Slide } from 'react-toastify'
import ToastUpdate from '../../../components/toasts/ToastUpdate'
import { Check, Edit, Trash2 } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput } from 'reactstrap'

const ChargeAccountTab = ({ selectedCharge }) => {
   const dispatch = useDispatch(),
      { id } = useParams()

   const { register, errors, handleSubmit } = useForm()
   // ** States
   const [img, setImg] = useState(null)
   const [chargeData, setChargeData] = useState(null)

   const onChange = e => {
      const reader = new FileReader(),
         files = e.target.files
      reader.onload = function () {
         setImg(reader.result)
      }
      reader.readAsDataURL(files[0])
   }

   useEffect(() => {
      dispatch(getChargeById(id))
      // if (selectedCategory !== null || (selectedCategory !== null && categoryData !== null && selectedCategory?._id !== categoryData?._id)) {
      //    // setCategoryData(selectedCategory)

      //    // if (selectedCategory?.avatar?.length) {
      //    //    return setImg(selectedCategory?.avatar)
      //    // } else {
      //    //    return setImg(null)
      //    // }
      // }
   }, [id])

   useEffect(() => {
      setChargeData(selectedCharge)
   }, [selectedCharge])

   const onSubmit = (values) => {
      if (isObjEmpty(errors)) {
         dispatch(
            updateCharge(id, {
               chargeName: values.chargeName,
               chargeBy: values.chargeBy,
               chargeValue: values.chargeValue,
               shortDescription: values.shortDescription,
               description: values.description,
               termsAndConditions: values.termsAndConditions,
            })
         )
      }

      toast.success(
         <ToastUpdate
            icon={<Check size={12} />}
            content='Charge'
         />,
         { transition: Slide, hideProgressBar: true, autoClose: 8000 }
      )
   }

   if (!chargeData) {
      return null
   } else {
      return (
         <Row>
            <Col sm='12'>
               <Media className='mb-2'>
                  {/* {renderUserAvatar()} */}
                  <Media className='mt-50' body>
                     <h4>{selectedCharge.chargeName} </h4>
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
               <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                     <Col md='4' sm='12'>
                        <FormGroup>
                           <Label for='chargeName'>Charge Name</Label>
                           <Input
                              type='text'
                              id='chargeName'
                              name='chargeName'
                              placeholder='Charge Name'
                              defaultValue={chargeData.chargeName}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='4' sm='12'>
                        <FormGroup>
                           <Label for='chargeBy'>Charge By</Label>
                           <Input
                              type='text'
                              id='chargeBy'
                              name='chargeBy'
                              placeholder='Charge By...'
                              defaultValue={chargeData.chargeBy}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='4' sm='12'>
                        <FormGroup>
                           <Label for='chargeValue'>Charge Value</Label>
                           <Input
                              type='number'
                              id='chargeValue'
                              name='chargeValue'
                              placeholder='Charge Value...'
                              defaultValue={chargeData.chargeValue}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='4' sm='12'>
                        <FormGroup>
                           <Label for='shortDescription'>Short Description</Label>
                           <Input
                              type='text'
                              id='shortDescription'
                              name='shortDescription'
                              placeholder='Short Description....'
                              defaultValue={chargeData.shortDescription}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='4' sm='12'>
                        <FormGroup>
                           <Label for='description'>Description</Label>
                           <Input
                              type='text'
                              id='description'
                              name='description'
                              placeholder='Short Description....'
                              defaultValue={chargeData.description}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='4' sm='12'>
                        <FormGroup>
                           <Label for='termsAndConditions'>Terms And Condition</Label>
                           <Input
                              type='text'
                              id='termsAndConditions'
                              name='termsAndConditions'
                              placeholder='Terms And Condition....'
                              defaultValue={chargeData.termsAndConditions}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
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

export default ChargeAccountTab