import Select from 'react-select'
import {reduxForm} from 'redux-form'
import { useForm } from 'react-hook-form'

export const MultipleSelect = ({ input, options, name, id, defaultValue, placeholder}) => {

   const {register} = useForm()

   return (
      <Select 
         id={id}
         name={name}
         placeholder={placeholder}
         // value={input.value}
         isMulti
         defaultValue={defaultValue}
         options={options}
         // onChange={(value) => input.onChange(value)}
         // onBlur={(value) => input.onBlur(value)}
         innerRef={register({ required: true })}
      />
   )
}