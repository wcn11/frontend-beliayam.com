import { Link } from "react-router-dom"
// import { deleteOrder, getOrderById } from "../store/action"
// import { store } from "@store/storeConfig/store"
import { formatDateTime, numberFormat, toCamelCase } from "@utils"

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
   Edit2
} from "react-feather"

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
      name: "Order ID",
      minWidth: "150px",
      // selector: "order_id",
      sortable: true,
      cell: (row) => (
         <div className="d-flex justify-content-left align-items-center">
            <div className="d-flex flex-column">
               <Link
                  to={`/apps/order/preview/${row.order_id}`}
                  className="user-name text-truncate mb-0"
               >
                  <span className="font-weight-bold">{row.order_id}</span>
               </Link>
            </div>
         </div>
      ),
   },
   {
      name: "Customer",
      minWidth: "250px",
      sortable: true,
      cell: row => {
         const name = row?.user && row?.user?.name ? row?.user?.name : 'Customer Ayam',
            email = row.user ? row.user.email : 'example@mail.com'
         return (
            <div className='d-flex justify-content-left align-items-center'>
               {/* {renderClient(row)} */}
               <div className='d-flex flex-column'>
                  <h6 className='user-name text-truncate mb-0'>{name}</h6>
                  <small className='text-truncate text-muted mb-0'>{email}</small>
               </div>
            </div>
         )
      }
   },
   {
      name: "Platform",
      minWidth: "130px",
      sortable: true,
      // selector: "platform",
      cell: (row) => row.platform
   },
   {
      name: "Order Date",
      minWidth: "130px",
      sortable: true,
      selector: "createdAt",
      cell: (row) => formatDateTime(row.order_status.payment_date)
   },
   {
      name: "Grand Total",
      minWidth: "130px",
      sortable: true,
      // selector: "grand_total",
      cell: (row) => numberFormat(row.grand_total)
   },
   // {
   //    name: "Order Status",
   //    minWidth: "130px",
   //    sortable: true,
   //    // selector: "order_status",
   //    cell: (row) => renderPaymentStatus(row.order_status.status.replace("_", " "))
   // },
   {
      name: "Payment Type",
      minWidth: "130px",
      sortable: true,
      // selector: "payment",
      cell: (row) => row.payment.pg_type
   }
]
