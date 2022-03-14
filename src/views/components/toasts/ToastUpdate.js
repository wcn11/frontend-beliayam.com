import { Fragment } from "react";
import Avatar from '@components/avatar'

const ToastUpdate = ({icon, content}) => (
   <Fragment>
      <div className='toastify-header'>
         <div className='title-wrapper'>
            <Avatar size='sm' color='success' icon={icon} />
            <h6 className='toast-title font-weight-bold'>Update Berhasil</h6>
         </div>
      </div>
      <div className='toastify-body'>
         <span>{content} telah berhasil diupdate, silahkan cek kembali!</span>
      </div>
   </Fragment>
)

export default ToastUpdate