import { Link } from "react-router-dom"
import { formatDateTime, numberFormat, toCamelCase } from "@utils"
import { store } from '@store/storeConfig/store'
import {
   Badge,
   UncontrolledDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
} from "reactstrap"
import {
   Slack,
   User,
   Settings,
   Database,
   Edit2,
   MoreVertical, 
   Trash2
} from "react-feather"
import { deleteProductFromPromo } from "./store/action"
import { useSelector } from "react-redux"

const renderClient = (row) => {
   const stateNum = Math.floor(Math.random() * 6),
      states = [
         "light-success",
         "light-danger",
         "light-warning",
         "light-info",
         "light-primary",
         "light-secondary",
      ],
      color = states[stateNum]
   // if (row.avatar.length) {
   //   return <Avatar className='mr-1' img={row.avatar} width='32' height='32' />
   // } else {
   //   return <Avatar color={color || 'primary'} className='mr-1' content={row.fullName} initials />
   // }
}

const renderRole = (row) => {
   const roleObj = {
      subscriber: {
         class: "text-primary",
         icon: User,
      },
      maintainer: {
         class: "text-success",
         icon: Database,
      },
      editor: {
         class: "text-info",
         icon: Edit2,
      },
      author: {
         class: "text-warning",
         icon: Settings,
      },
      admin: {
         class: "text-danger",
         icon: Slack,
      },
   }

   const Icon = roleObj[row.role] ? roleObj[row.role].icon : Edit2

   return (
      <span className="text-truncate text-capitalize align-middle">
         <Icon
            size={18}
            className={`${roleObj[row.name] ? roleObj[row.name].class : ""} mr-50`}
         />
         {row.name}
      </span>
   )
}

const statusObj = {
   active: "light-success",
   inactive: "light-secondary",
}

const renderPaymentStatus = (status) => {
   const words = status.toLowerCase().split(" ")

   for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1)
   }

   return words.join(" ")
}

export const columnsProductsPromo = [
   {
      name: "Product ID",
      minWidth: "150px",
      // selector: "order_id",
      sortable: true,
      cell: (row) => (         
         <div className="d-flex justify-content-left align-items-center">
            <div className="d-flex flex-column">
               <Link
                  to={`/apps/order/preview/${row._id}`}
                  className="user-name text-truncate mb-0"
               >
                  <span className="font-weight-bold">{row._id}</span>
               </Link>
            </div>
         </div>
      ),
   },
   {
      name: "Name",
      minWidth: "250px",
      sortable: true,
      cell: row => {
         return (
            <div className='d-flex justify-content-left align-items-center'>
               {/* {renderClient(row)} */}
               <div className='d-flex flex-column'>
                  <h6 className='user-name text-truncate mb-0'>{row.name}</h6>
                  <small className='text-truncate text-muted mb-0'>{row.sku}</small>
               </div>
            </div>
         )
      }
   },
   {
      name: "Price",
      minWidth: "130px",
      sortable: true,
      // selector: "platform",
      cell: (row) => numberFormat(row.price)
   },
   {
      name: 'Actions',
      minWidth: '100px',
      cell: row => {
         const storeData = useSelector((state) => state.productsPromo)
         return (
            <UncontrolledDropdown>
               <DropdownToggle tag='div' className='btn btn-sm'>
                  <MoreVertical size={14} className='cursor-pointer' />
               </DropdownToggle>
               <DropdownMenu right>
                  <DropdownItem className='w-100' onClick={() => {
                     // console.log(store.productsPromo)
                     store.dispatch(deleteProductFromPromo(row._id, storeData.data))
                  }}>
                     <Trash2 size={14} className='mr-50' />
                     <span className='align-middle'>Delete</span>
                  </DropdownItem>
               </DropdownMenu>
            </UncontrolledDropdown>
         )
      }
   },
]
//