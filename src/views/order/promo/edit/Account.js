import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { updatePromo, getPromoById } from '../store/action'
import { isObjEmpty } from '@utils'
import { Upload } from '@src/utility/Upload'

import Select from 'react-select'
import { 
   Media, 
   Row, 
   Col, 
   Button, 
   Form, 
   Input, 
   Label, 
   FormGroup, 
   FormText } from 'reactstrap'
import moment from 'moment'
import { getAllDataProduct } from '../../../apps/product/store/action'

const PromoAccountTab = ({selectedPromo}) => {
   const dispatch = useDispatch(),
      { id } = useParams()
   
   const store = useSelector(state => state.products)
   
   const { register, errors, handleSubmit } = useForm()
   const [centeredModal, setCenteredModal] = useState(false)

   const [promoData, setPromoData] = useState(null)
   const [image, setImage] = useState()
   const [imagePreview, setImagePreview] = useState(null)
   const [currentPage, setCurrentPage] = useState(1)
   const [rowsPerPage, setRowsPerPage] = useState(10)
   const [sortPerPage, setSortPerPage] = useState('ASC')
   const [orderBy, setOrderBy] = useState('name')

   const onImageUpload = (e) => {
      const file = e.target.files[0]
      setImage(file)
      setImagePreview(URL.createObjectURL(file))
   }

   useEffect(() => {
      dispatch(getPromoById(id))
   }, [id])

   useEffect(() => {
      setPromoData(selectedPromo)
      dispatch(getAllDataProduct({
         page: currentPage,
         show: rowsPerPage,
         sortBy: sortPerPage,
         // status: currentStatus.value,
         orderBy
      }))
   }, [selectedPromo])


   const onSubmit = (values) => {
      if (isObjEmpty(errors)) {
         dispatch(
            updatePromo(id, {
               name: values.name,
               slug: values.slug,
               tags: values.tags,
               image,
               promoStart: values.promoStart,
               promoEnd: values.promoEnd,
               products: values.products,
               promoValue: values.promoValue,
               promoBy: values.promoBy,
               isActive: values.isActive,
               description: values.description,
               termsAndConditions: values.termsAndConditions,
               products: values.products
            })
         )
      }
   }

   const options = [
      {vale: 'broiler', label: 'broiler'},
      { vale: 'pejantan', label: 'pejantan' },
   ]
   
   // const centerModal = () => {
   //    return (
   //       <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
   //          <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Vertically Centered</ModalHeader>
   //          <ModalBody>
   //             Oat cake ice cream candy chocolate cake chocolate cake cotton candy dragée apple pie. Brownie carrot cake
   //             candy canes bonbon fruitcake topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
   //             liquorice.
   //          </ModalBody>
   //          <ModalFooter>
   //             <Button color='primary' onClick={() => setCenteredModal(!centeredModal)}>
   //                Accept
   //             </Button>{' '}
   //          </ModalFooter>
   //       </Modal>
   //    )
   // }

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
                     {/* <div className='d-flex flex-wrap mt-1 px-0'>
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
                     </div> */}
                  </Media>
               </Media>
            </Col>
            <Col sm='12'>
               <Form onSubmit={handleSubmit(onSubmit)} key={promoData._id}>
                  <Row>
                     <Col md='6' sm='12'>
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
                     <Col md='6' sm='12'>
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
                     <Col md='6' sm='12'>
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
                           <FormText>*Tags promonya diisi yang bener</FormText>
                        </FormGroup>
                     </Col>
                     <Col md='6' sm='12'>
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
                     <Col md='6' sm='12'>
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
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='products'>Add Products</Label>
                           <Input
                              type='select'
                              id='products'
                              isMulti
                              name='products'
                              placeholder='Add product....'
                              innerRef={register({ required: true })}
                           >
                              {store.allData.map((item) => {
                                 return <option key={item._id} value={item._id}>{item.name}</option>
                              })}
                           </Input>
                           <FormText>Add product in promo</FormText>
                        </FormGroup>
                     </Col>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='promoStart'>Promo Start</Label>
                           <Input
                              type='datetime-local'
                              id='promoStart'
                              name='promoStart'
                              placeholder='Promo By....'
                              defaultValue={moment(promoData.promoStart).format('YYYY-MM-DDTHH:mm')}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='promoEnd'>Promo End</Label>
                           <Input
                              type='datetime-local'
                              id='promoEnd'
                              name='promoEnd'
                              placeholder='Promo End....'
                              defaultValue={moment(promoData.promoEnd).format('YYYY-MM-DDTHH:mm')}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='image'>Choose Image Promo</Label>
                           <Upload
                           name='image'
                           id='image'
                           onChange={onImageUpload}
                           img={imagePreview}
                           />
                        </FormGroup>
                        <img height={80} src={`https://be-dev.beliayam.com/${promoData.image_promo}`} alt="" />
                     </Col>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='status'>Status</Label>
                           <Input
                              type='select'
                              id='status'
                              name='status'
                              placeholder='Promo End....'
                              defaultValue={promoData.isActive}
                              innerRef={register({ required: true })}
                           >
                              <option value={true}>Active</option>
                              <option value={false}>Nonactive</option>
                           </Input>
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
                        <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                           Save Changes
                        </Button.Ripple>
                        <Button.Ripple color='secondary' outline>
                           Reset
                        </Button.Ripple>
                     </Col>

                        {/* <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
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
                        </Modal> */}

                  </Row>
               </Form>
            </Col>
         </Row>
      )
   }
}

export default PromoAccountTab