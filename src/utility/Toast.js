import { toast, Slide } from 'react-toastify'
import ToastUpdate from '../views/components/toasts/ToastUpdate'
import ToastError from '../views/components/toasts/ToastError'

export const Toast = ({icon, title, content}) => {
   toast.success(
      <ToastUpdate
         icon={icon}
         title={title}
         content={content}
      />,
      { transition: Slide, hideProgressBar: true, autoClose: 4000 }
   )
}

export const ToastWarning = ({ icon, title, content }) => {
   toast.warning(
      <ToastError
         icon={icon}
         title={title}
         content={content}
      />,
      { transition: Slide, hideProgressBar: true, autoClose: 4000 }
   )
}