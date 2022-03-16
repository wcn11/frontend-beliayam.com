import { Fragment } from "react";
import Avatar from '@components/avatar'

const ToastUpdate = ({icon, content, title}) => (
   <Fragment>
      <div className='toastify-header'>
         <div className='title-wrapper'>
            <Avatar size='sm' color='success' icon={icon} />
            <h6 className='toast-title font-weight-bold'>{title}</h6>
         </div>
      </div>
      <div className='toastify-body'>
         <span>{content}</span>
      </div>
   </Fragment>
)

export default ToastUpdate