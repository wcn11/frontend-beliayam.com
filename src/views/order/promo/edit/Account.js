import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { updatePromo, getPromoById } from '../store/action'
import { isObjEmpty } from '@utils'

import Select from 'react-select'
import { toast, Slide } from 'react-toastify'
import ToastUpdate from '../../../components/toasts/ToastUpdate'
import { Check, Edit, Trash2 } from 'react-feather'
import { 
   Media, 
   Row, 
   Col, 
   Button, 
   Form, 
   Input, 
   Label, 
   FormGroup, 
   ModalHeader, 
   ModalBody,
   ModalFooter, 
   Modal,
   FormText } from 'reactstrap'
import moment from 'moment'

const PromoAccountTab = ({selectedPromo}) => {
   const dispatch = useDispatch(),
      { id } = useParams()
   
   const { register, errors, handleSubmit } = useForm()
   const [centeredModal, setCenteredModal] = useState(false)

   const [img, setImg] = useState(null)
   const [promoData, setPromoData] = useState(null)


   const onChange = e => {
      const reader = new FileReader(),
         files = e.target.files
      reader.onload = function () {
         setImg(reader.result)
      }
      reader.readAsDataURL(files[0])
   }

   useEffect(() => {
      dispatch(getPromoById(id))
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
      setPromoData(selectedPromo)
   }, [selectedPromo])


   const onSubmit = (values) => {
      if (isObjEmpty(errors)) {
         dispatch(
            updatePromo(id, {
               name: values.name,
               slug: values.slug,
               tags: values.tags,
               image_promo: values.image_promo,
               description: values.description,
               termsAndConditions: values.termsAndConditions,
               products: values.products
            })
         )
      }

      setCenteredModal(!centeredModal)

      toast.success(
         <ToastUpdate
            icon={<Check size={12} />}
            content='Promo'
         />,
         { transition: Slide, hideProgressBar: true, autoClose: 3000 }
      )
   }

   const options = [
      {vale: 'broiler', label: 'broiler'},
      { vale: 'pejantan', label: 'pejantan' },
   ]
   

   const centerModal = () => {
      return (
         <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
            <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Vertically Centered</ModalHeader>
            <ModalBody>
               Oat cake ice cream candy chocolate cake chocolate cake cotton candy dragée apple pie. Brownie carrot cake
               candy canes bonbon fruitcake topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
               liquorice.
            </ModalBody>
            <ModalFooter>
               <Button color='primary' onClick={() => setCenteredModal(!centeredModal)}>
                  Accept
               </Button>{' '}
            </ModalFooter>
         </Modal>
      )
   }

   if (!promoData) {
      return null
   } else {
      return (
         <Row>
            <Col sm='12'>
               <Media className='mb-2'>
                  {/* {renderUserAvatar()} */}
                  <Media className='mt-50' body>
                     <h4>{selectedPromo.name} </h4>
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
               <Form onClick={e => e.preventDefault(centerModal)}>
                  <Row>
                     <Col md='4' sm='12'>
                        <FormGroup>
                           <Label for='name'>Promo Name</Label>
                           <Input
                              type='text'
                              id='name'
                              name='name'
                              placeholder='Charge Name'
                              defaultValue={promoData.name}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='4' sm='12'>
                        <FormGroup>
                           <Label for='slug'>Slug</Label>
                           <Input
                              type='text'
                              id='slug'
                              name='slug'
                              placeholder='Charge By...'
                              defaultValue={promoData.slug}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='4' sm='12'>
                        <FormGroup>
                           <Label for='tags'>Tags</Label>
                           <Input
                              type='text'
                              id='tags'
                              name='tags'
                              placeholder='Charge Value...'
                              defaultValue={promoData.tags}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     {/* <Col md='4' sm='12'>
                        <FormGroup>
                           <Label for='image_promo'>Image Promo</Label>
                           <Input
                              type='file'
                              id='image_promo'
                              name='image_promo'
                              placeholder='Short Description....'
                              // defaultValue={promoData.image_promo}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col> */}
                     <Col md='4' sm='12'>
                        <FormGroup>
                           <Label for='promoValue'>Promo Value</Label>
                           <Input
                              type='number'
                              id='promoValue'
                              name='promoValue'
                              placeholder='Short Description....'
                              defaultValue={promoData.promoValue}
                              innerRef={register({ required: true })}
                           />
                           <FormText>Hanya masukan nomor (jangan jail)</FormText>
                        </FormGroup>
                     </Col>
                     <Col md='4' sm='12'>
                        <FormGroup>
                           <Label for='promoBy'>Promo By</Label>
                           <Input
                              type='text'
                              id='promoBy'
                              name='promoBy'
                              placeholder='Promo By....'
                              defaultValue={promoData.promoBy}
                              innerRef={register({ required: true })}
                           />
                           <FormText>Price/Percent</FormText>
                        </FormGroup>
                     </Col>
                     <Col md='4' sm='12'>
                        <FormGroup>
                           <Label for='products'>Add Products</Label>
                           <Select
                              id='products'
                              name='products'
                              isMulti
                              options={options}
                              placeholder='Add product....'
                              defaultValue={promoData.products}
                              innerRef={register({ required: true })}
                           />
                           <FormText>Add product in promo</FormText>
                        </FormGroup>
                     </Col>
                     <Col md='4' sm='12'>
                        <FormGroup>
                           <Label for='promoStart'>Promo Start</Label>
                           <Input
                              type='datetime-local'
                              id='promoStart'
                              name='promoStart'
                              placeholder='Promo By....'
                              defaultValue={moment(productData.promoStart).format('YYYY-MM-DDTHH:mm')}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='4' sm='12'>
                        <FormGroup>
                           <Label for='promoEnd'>Promo End</Label>
                           <Input
                              type='datetime-local'
                              id='promoEnd'
                              name='promoEnd'
                              placeholder='Promo End....'
                              defaultValue={moment(productData.promoEnd).format('YYYY-MM-DDTHH:mm')}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='12' sm='12'>
                        <FormGroup>
                           <Label for='termsAndConditions'>Terms And Condition</Label>
                           <Input
                              type='textarea'
                              no-resize='true'
                              rows="8"
                              id='termsAndConditions'
                              name='termsAndConditions'
                              placeholder='Terms And Condition....'
                              defaultValue={promoData.termsAndConditions}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='12' sm='12'>
                        <FormGroup>
                           <Label for='description'>Description</Label>
                           <Input
                              type='textarea'
                              id='description'
                              no-resize='true'
                              rows="8"
                              name='description'
                              placeholder='Short Description....'
                              defaultValue={promoData.description}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
                        <Button.Ripple onClick={() => setCenteredModal(!centeredModal)} className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                           Save Changes
                        </Button.Ripple>
                        <Button.Ripple color='secondary' outline>
                           Reset
                        </Button.Ripple>
                     </Col>

                        <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
                           <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Update Promo</ModalHeader>
                           <ModalBody>
                           Apakah anda yakin untuk mengedit data tersebut?, pastikan sudah benar, cek lagi apa sudah yakin?
                           </ModalBody>
                           <ModalFooter>
                           <Button color='primary' onClick={handleSubmit(onSubmit)}>
                              Accept
                           </Button>{' '}
                              <Button color='primary' outline onClick={() => setCenteredModal(!centeredModal)}>
                                 Cancel
                              </Button>{' '}
                           </ModalFooter>
                        </Modal>

                  </Row>
               </Form>
            </Col>
         </Row>
      )
   }
}

export default PromoAccountTab