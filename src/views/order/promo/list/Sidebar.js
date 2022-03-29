import { useState } from 'react'
import Sidebar from '@components/sidebar'

import { isObjEmpty } from '@utils'

import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { Button, FormGroup, Label, FormText, Form, Input } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { addPromo } from '../store/action'
import { Upload } from '@src/utility/Upload'

const SidebarNewVoucher = ({ open, toggleSidebar }) => {
   const dispatch = useDispatch()
   const [image_promo, setImage_Promo] = useState('')
   const [imagePreview, setImagePreview] = useState(null)

   const { register, errors, handleSubmit } = useForm()
   
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
               image_promo,
               promoEnd: values.promoEnd,
               isActive: values.isActive,
               description: values.description,
               termsAndConditions: values.termsAndConditions,
            })
         )
      }
   }

   const onImageUpload = (e) => {
      const file = e.target.files[0]
      setImage_Promo(file)
      setImagePreview(URL.createObjectURL(file))
   }

   return (
      <Sidebar
         size='lg'
         open={open}
         title='New Promo'
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
                  placeholder='Tags ...'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['tags'] })}
               />
               <FormText>*Tags promo yang ditampilkan diproduct</FormText>
            </FormGroup>
            <FormGroup>
               <Label>
                  Promo By <span className='text-danger'>*</span>
               </Label>
               <Input
                  type='select'
                  name='promoBy'
                  id='promoBy'
                  placeholder='Promo By ...'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['promoBy'] })}
               >
                  <option value="price">Price</option>
                  <option value="percent">Percent</option>
               </Input>
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
               <FormText>*Promo value sesuaikan berdasarkan promo by</FormText>
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
                  Status <span className='text-danger'>*</span>
               </Label>
               <Input
                  type='select'
                  name='isActive'
                  id='isActive'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['isActive'] })}
               >
                  <option value={true}>Active</option>
                  <option value={false}>Nonactive</option>
               </Input>
            </FormGroup>
            <FormGroup>
               <Label>
                  Image Promo <span className='text-danger'>*</span>
               </Label>
               <Upload
                  name='image_promo'
                  id='image_promo'
                  onChange={(e) => onImageUpload(e)}
                  img={imagePreview}
                  className={classnames({ 'is-invalid': errors['image_promo'] })}
               />
               <FormText>*Menerima Format Png, Jpg, Jpeg</FormText>
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