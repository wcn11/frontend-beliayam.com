import { AsyncPaginate } from "react-select-async-paginate";
import { useForm } from 'react-hook-form'

export const MultipleSelect = ({ loadOptions, name, id, defaultValue, placeholder}) => {

   const {register} = useForm()

   return (
      <AsyncPaginate
         isSearchable={true}
         closeMenuOnSelect={false}
         id={id}
         name={name}
         placeholder={placeholder}
         isMulti
         defaultValue={defaultValue}
         loadOptions={loadOptions}
         innerRef={register({ required: true })}
      />
   )
}