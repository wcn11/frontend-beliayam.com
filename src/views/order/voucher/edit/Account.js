import { useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import ToastUpdate from '../../../components/toasts/ToastUpdate'
import { isObjEmpty } from '@utils'
import { updateVoucher, getVoucherById } from '../store/action'
import { toast, Slide } from 'react-toastify'
import { Edit, Trash2, Check } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput } from 'reactstrap'

const VoucherAccountTab = ({ selectedVoucher }) => {
   const dispatch = useDispatch(),
      { id } = useParams()

   const { register, errors, handleSubmit } = useForm()

   const [img, setImg] = useState(null)
   const [voucherData, setVoucherData] = useState(null)

   const onChange = e => {
      const reader = new FileReader(),
         files = e.target.files
      reader.onload = function () {
         setImg(reader.result)
      }
      reader.readAsDataURL(files[0])
   }

   useEffect(() => {
      dispatch(getVoucherById(id))
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
      setVoucherData(selectedVoucher)
   }, [selectedVoucher])

   const onSubmit = (values) => {
      if (isObjEmpty(errors)) {
         dispatch(
           updateVoucher(id, {
             voucherName: values.voucherName,
             voucherCode: values.voucherCode,
             discountBy: values.discountBy,
             discountValue: values.discountValue,
             discountStart: values.discountStart,
             discountEnd: values.discountEnd,
             minimumOrderValue: values.minimumOrderValue,
             termsAndConditions: values.termsAndConditions,
           })
         )
      }

      toast.success(
        <ToastUpdate 
        icon={<Check size={12}/>} 
        content='Voucher'
        />,  
        { transition: Slide, hideProgressBar: true, autoClose: 5000 }
      )

   }

   if (!voucherData) {
      return null
   } else {
      return (
        <Row>
          <Col sm='12'>
            <Media className='mb-2'>
              {/* {renderUserAvatar()} */}
              <Media className='mt-50' body>
                <h4>{selectedVoucher.voucherName} </h4>
                <div className='d-flex flex-wrap mt-1 px-0'>
                  <Button.Ripple
                    id='change-img'
                    tag={Label}
                    className='mr-75 mb-0'
                    color='primary'>
                    <span className='d-none d-sm-block'>Change</span>
                    <span className='d-block d-sm-none'>
                      <Edit size={14} />
                    </span>
                    <input
                      type='file'
                      hidden
                      id='change-img'
                      onChange={onChange}
                      accept='image/*'
                    />
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
                    <Label for='voucherName'>Voucher Name</Label>
                    <Input
                      type='text'
                      id='voucherName'
                      name='voucherName'
                      placeholder='Charge Name'
                      defaultValue={voucherData.voucherName}
                      innerRef={register({ required: true })}
                    />
                  </FormGroup>
                </Col>
                <Col md='4' sm='12'>
                  <FormGroup>
                    <Label for='voucherCode'>Voucher Code</Label>
                    <Input
                      type='text'
                      id='voucherCode'
                      name='voucherCode'
                      placeholder='Voucher Code...'
                      defaultValue={voucherData.voucherCode}
                      innerRef={register({ required: true })}
                    />
                  </FormGroup>
                </Col>
                <Col md='4' sm='12'>
                  <FormGroup>
                    <Label for='discountBy'>Discount By</Label>
                    <Input
                      type='text'
                      id='discountBy'
                      name='discountBy'
                      placeholder='Discount By...'
                      defaultValue={voucherData.discountBy}
                      innerRef={register({ required: true })}
                    />
                  </FormGroup>
                </Col>
                <Col md='4' sm='12'>
                  <FormGroup>
                    <Label for='discountValue'>Discount Value</Label>
                    <Input
                      type='number'
                      id='discountValue'
                      name='discountValue'
                      placeholder='Discount Value....'
                      defaultValue={voucherData.discountValue}
                      innerRef={register({ required: true })}
                    />
                  </FormGroup>
                </Col>
                <Col md='4' sm='12'>
                  <FormGroup>
                    <Label for='discountStart'>Discount Start </Label>
                    <Input
                      type='datetime-local'
                      id='discountStart'
                      name='discountStart'
                      placeholder='Discount Start....'
                      defaultValue={voucherData.discountStart}
                      innerRef={register({ required: true })}
                    />
                  </FormGroup>
                </Col>
                <Col md='4' sm='12'>
                  <FormGroup>
                    <Label for='discountEnd'>Discount End</Label>
                    <Input
                      type='datetime-local'
                      id='discountEnd'
                      name='discountEnd'
                      placeholder='Discount End....'
                      defaultValue={voucherData.discountEnd}
                      innerRef={register({ required: true })}
                    />
                  </FormGroup>
                </Col>
                <Col md='4' sm='12'>
                  <FormGroup>
                    <Label for='minimumOrderValue'>Minimum Order Value</Label>
                    <Input
                      type='number'
                      id='minimumOrderValue'
                      name='minimumOrderValue'
                      placeholder='Minimum Order Value....'
                      defaultValue={voucherData.minimumOrderValue}
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
                      defaultValue={voucherData.termsAndConditions}
                      innerRef={register({ required: true })}
                    />
                  </FormGroup>
                </Col>
                <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
                  <Button.Ripple
                    className='mb-1 mb-sm-0 mr-0 mr-sm-1'
                    type='submit'
                    color='primary'>
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

export default VoucherAccountTab