// ** Custom Components
import Sidebar from '@components/sidebar'

import { isObjEmpty } from '@utils'

import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { Button, FormGroup, Label, FormText, Form, Input } from 'reactstrap'

import { addCharge } from '../store/action'
import { useDispatch } from 'react-redux'

const SideBarNewCharge = ({ open, toggleSidebar }) => {
   const dispatch = useDispatch()

   const { register, errors, handleSubmit } = useForm()

   const onSubmit = values => {
      if (isObjEmpty(errors)) {
         toggleSidebar()
         dispatch(
            addCharge({
               chargeName: values.chargeName,
               chargeBy: values.chargeBy,
               chargeValue: values.chargeValue,
               shortDescription: values.shortDescription,
               description: values.description,
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
         toggleSidebar={toggleSidebar}
      >
         <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
               <Label>
                  Charge Name <span className='text-danger'>*</span>
               </Label>
               <Input
                  name='chargeName'
                  id='chargeName'
                  placeholder='Charge Name ...'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['chargeName'] })}
               />
            </FormGroup>
            <FormGroup>
               <Label>
                  Charge By <span className='text-danger'>*</span>
               </Label>
               <Input
                  name='chargeBy'
                  id='chargeBy'
                  placeholder='Charge By ...'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['chargeBy'] })}
               />
            </FormGroup>
            <FormGroup>
               <Label>
                  Charge Value <span className='text-danger'>*</span>
               </Label>
               <Input
                  name='chargeValue'
                  id='chargeValue'
                  placeholder='Charge Value ...'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['chargeValue'] })}
               />
            </FormGroup>
            <FormGroup>
               <Label>
                  Short Description <span className='text-danger'>*</span>
               </Label>
               <Input
                  name='shortDescription'
                  id='shortDescription'
                  placeholder='Short Description ...'
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['shortDescription'] })}
               />
            </FormGroup>
            <FormGroup>
               <Label>
                  Description <span className='text-danger'>*</span>
               </Label>
               <Input
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
                  // value={name}
                  innerRef={register({ required: true })}
                  className={classnames({ 'is-invalid': errors['termsAndConditions'] })}
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

export default SideBarNewCharge