// ** Custom Components
import Sidebar from '@components/sidebar'

import { isObjEmpty } from '@utils'

import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { Button, FormGroup, Label, FormText, Form, Input } from 'reactstrap'

import { addVoucher } from '../store/action'
import { useDispatch } from 'react-redux'

const SidebarNewVoucher = ({ open, toggleSidebar }) => {
   const dispatch = useDispatch()

   const { register, errors, handleSubmit } = useForm()

   const onSubmit = values => {
      if (isObjEmpty(errors)) {
         toggleSidebar()
         dispatch(
            addVoucher({
               voucherName: values.voucherName,
               voucherCode: values.voucherCode,
               discountBy: values.discountBy,
               discountValue: values.discountValue,
               discountStart: values.discountStart,
               discountEnd: values.discountEnd,
               isActive: values.isActive,
               minimumOrderValue: values.minimumOrderValue,
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
                  Voucher Name <span className='text-danger'>*</span>
               </Label>
               <Input
                  name='voucherName'
                  id='voucherName'
                  placeholder='Voucher Name ...'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['voucherName'] })}
               />
            </FormGroup>
            <FormGroup>
               <Label>
                  Voucher Code <span className='text-danger'>*</span>
               </Label>
               <Input
                  name='voucherCode'
                  id='voucherCode'
                  placeholder='Voucher Code ...'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['voucherCode'] })}
               />
            </FormGroup>
            <FormGroup>
               <Label>
                  Discount By <span className='text-danger'>*</span>
               </Label>
               <Input
                  type='select'
                  name='discountBy'
                  id='discountBy'
                  placeholder='Discount By ...'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['discountBy'] })}
               >
                  <option value='percent'>Percent</option>
                  <option value='price'>Price</option>
               </Input>
            </FormGroup>
            <FormGroup>
               <Label>
                  Discount Value <span className='text-danger'>*</span>
               </Label>
               <Input
                  name='discountValue'
                  id='discountValue'
                  placeholder='Charge Value ...'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['discountValue'] })}
               />
            </FormGroup>
            <FormGroup>
               <Label>
                  Discount Start <span className='text-danger'>*</span>
               </Label>
               <Input
                  type='datetime-local'
                  name='discountStart'
                  id='discountStart'
                  placeholder='Discount Start ...'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['discountStart'] })}
               />
            </FormGroup>
            <FormGroup>
               <Label>
                  Discount End <span className='text-danger'>*</span>
               </Label>
               <Input
                  type='datetime-local'
                  name='discountEnd'
                  id='discountEnd'
                  placeholder='Discount End ...'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['discountEnd'] })}
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
            <FormGroup>
               <Label>
                  Status <span className='text-danger'>*</span>
               </Label>
               <Input
                  name='isActive'
                  id='isActive'
                  placeholder='Trems And Condition ...'
                  innerRef={register({ required: true })}
                  className={classnames({
                     'is-invalid': errors['isActive'],
                  })}
               >
                  <option value={true}>active</option>
                  <option value={false}>nonactive</option>
               </Input>
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
