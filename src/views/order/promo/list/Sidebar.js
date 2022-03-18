import Sidebar from '@components/sidebar'

import { isObjEmpty } from '@utils'

import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { Button, FormGroup, Label, FormText, Form, Input } from 'reactstrap'

import Select from 'react-select'
import { addPromo } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllDataProduct } from '../../../apps/product/store/action'

const SidebarNewVoucher = ({ open, toggleSidebar }) => {
   const dispatch = useDispatch(),
      store = useSelector(state => state.products)
   
   const { register, errors, handleSubmit } = useForm()
   
   // useEffect(() => {
   //    dispatch(getAllDataProduct())
   // }, [dispatch])

   const onSubmit = values => {
      if (isObjEmpty(errors)) {
         toggleSidebar()
         dispatch(
            addPromo({
               name: values.name,
               slug: values.slug,
               tags: values.tags,
               promoValue: values.promoValue,
               promoBy: values.promoBy,
               promoStart: values.promoStart,
               image_promo: velues.image_promo,
               promoEnd: values.promoEnd,
               termsAndConditions: values.termsAndConditions,
            })
         )
      }
   }

   return (
      <Sidebar
         size='lg'
         open={open}
         title='New Charge'
         headerClassName='mb-1'
         contentClassName='pt-0'
         toggleSidebar={toggleSidebar}>
         <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
               <Label>
                  Promo Name <span className='text-danger'>*</span>
               </Label>
               <Input
                  name='name'
                  id='name'
                  placeholder='Voucher Name ...'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['name'] })}
               />
            </FormGroup>
            <FormGroup>
               <Label>
                  Slug <span className='text-danger'>*</span>
               </Label>
               <Input
                  name='slug'
                  id='slug'
                  placeholder='Voucher Code ...'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['slug'] })}
               />
            </FormGroup>
            <FormGroup>
               <Label>
                   Tags <span className='text-danger'>*</span>
               </Label>
               <Input
                  name='tags'
                  id='tags'
                  placeholder='Discount By ...'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['tags'] })}
               />
            </FormGroup>
            <FormGroup>
               <Label>
                  Add Product <span className='text-danger'>*</span>
               </Label>
               <Select
                  isMulti
                  name='products'
                  id='products'
                  placeholder='Discount By ...'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['products'] })}
               />
               {store.allData.map((item) => {
                  return <option key={item._id} value={item._id}>{item.name}</option>
               })}
            </FormGroup>
            <FormGroup>
               <Label>
                  Promo Value <span className='text-danger'>*</span>
               </Label>
               <Input
                  type='number'
                  name='promoValue'
                  id='promoValue'
                  placeholder='Charge Value ...'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['promoValue'] })}
               />
            </FormGroup>
            <FormGroup>
               <Label>
                  Promo By <span className='text-danger'>*</span>
               </Label>
               <Input
                  name='promoBy'
                  id='promoBy'
                  placeholder='Charge Value ...'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['promoBy'] })}
               />
               <FormText>*Berdasarkan price/percent</FormText>
            </FormGroup>
            <FormGroup>
               <Label>
                  Promo Start <span className='text-danger'>*</span>
               </Label>
               <Input
                  type='datetime-local'
                  name='promoStart'
                  id='promoStart'
                  placeholder='Discount Start ...'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['promoStart'] })}
               />
            </FormGroup>
            <FormGroup>
               <Label>
                  Promo End <span className='text-danger'>*</span>
               </Label>
               <Input
                  type='datetime-local'
                  name='promoEnd'
                  id='promoEnd'
                  placeholder='Discount End ...'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['promoEnd'] })}
               />
            </FormGroup>
            <FormGroup>
               <Label>
                  Image Promo <span className='text-danger'>*</span>
               </Label>
               <Input
                  type='file'
                  name='image_promo'
                  id='image_promo'
                  placeholder='Discount End ...'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['image_promo'] })}
               />
            </FormGroup>
            <FormGroup>
               <Label>
                  Description <span className='text-danger'>*</span>
               </Label>
               <Input
                  type='textarea'
                  name='description'
                  id='description'
                  placeholder='Description ...'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['description'] })}
               />
            </FormGroup>
            <FormGroup>
               <Label>
                  Trems And Condition <span className='text-danger'>*</span>
               </Label>
               <Input
                  name='termsAndConditions'
                  id='termsAndConditions'
                  placeholder='Trems And Condition ...'
                  innerRef={register({ required: true })}
                  className={classnames({
                     'is-invalid': errors['termsAndConditions'],
                  })}
               />
            </FormGroup>
            <Button type='submit' className='mr-1' color='primary'>
               Submit
            </Button>
            <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
               Cancel
            </Button>
         </Form>
      </Sidebar>
   )
}

export default SidebarNewVoucher