import { toast, Slide } from 'react-toastify'
import ToastUpdate from '../views/components/toasts/ToastUpdate'
import { Check } from 'react-feather'

export const Toast = ({icon, title, content}) => {
   toast.success(
      <ToastUpdate
         icon={<Check size={12} />}
         title={title}
         content={content}
      />,
      { transition: Slide, hideProgressBar: true, autoClose: 4000 }
   )
}