import { Fragment, useState, useEffect } from "react"

import Sidebar from "../Sidebar"

import { getOrderByStatus } from "./store/action"
import { useDispatch, useSelector } from "react-redux"

import ReactPaginate from "react-paginate"
import { ChevronDown, Box, Info, Share2 } from "react-feather"
import DataTable from "react-data-table-component"
import { selectThemeColors } from "@utils"
import {
   Card,
   CardHeader,
   CardTitle,
   CardBody,
   Input,
   Row,
   Col,
   Label,
   CustomInput,
   Nav, NavItem, NavLink, TabContent, TabPane,
} from "reactstrap"

import "@styles/react/libs/react-select/_react-select.scss"
import "@styles/react/libs/tables/react-dataTable-component.scss"
import { columnExpired } from "./columnsExpired"


const CustomHeader = ({
   toggleSidebar,
   handlePerPage,
   rowsPerPage,
   handleFilter,
   searchTerm,
}) => {
   return (
      <div className="invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75">
         <Row>
            <Col xl="6" className="d-flex align-items-center p-0">
               <div className="d-flex align-items-center w-100">
                  <Label for="rows-per-page">Show</Label>
                  <CustomInput
                     className="form-control mx-50"
                     type="select"
                     id="rows-per-page"
                     value={rowsPerPage}
                     onChange={handlePerPage}
                     style={{
                        width: "5rem",
                        padding: "0 0.8rem",
                        backgroundPosition:
                           "calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0",
                     }}
                  >
                     <option value="10">10</option>
                     <option value="25">25</option>
                     <option value="50">50</option>
                  </CustomInput>
                  <Label for="rows-per-page">Entries</Label>
               </div>
            </Col>
            <Col
               xl="6"
               className="d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1"
            >
               <div className="d-flex align-items-center mb-sm-0 mb-1 mr-1">
                  <Label className="mb-0" for="search-invoice">
                     Search:
                  </Label>
                  <Input
                     id="search-invoice"
                     className="ml-50 w-100"
                     type="text"
                     value={searchTerm}
                     onChange={(e) => handleFilter(e.target.value)}
                  />
               </div>
               {/* <Button.Ripple color="primary" onClick={toggleSidebar}>
            New Order
          </Button.Ripple> */}
            </Col>
         </Row>
      </div>
   )
}

const TableExpired = () => {
   // ** Store Vars
   const dispatch = useDispatch()
   const store = useSelector((state) => state.ordersExpired)

   // ** States
   const [searchTerm, setSearchTerm] = useState("")
   const [currentPage, setCurrentPage] = useState(1)
   const [rowsPerPage, setRowsPerPage] = useState(10)
   const [sidebarOpen, setSidebarOpen] = useState(false)
   const [sortPerPage, setSortPerPage] = useState("ASC")
   const [status, setStatus] = useState('PAYMENT_EXPIRED')
   const [orderBy, setOrderBy] = useState("name")
   const [platforms, setPlatform] = useState("all")

   const [currentStatus, setCurrentStatus] = useState({
      value: "",
      label: "Select Status",
      number: 0,
   })

   // ** Function to toggle sidebar
   const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
   const toggle = tab => setActiveTab(tab)
   // ** Get data on mount
   useEffect(() => {
      // dispatch(getAllDataOrder())
      dispatch(
         getOrderByStatus({
            page: currentPage,
            show: rowsPerPage,
            sortBy: sortPerPage,
            orderBy,
            status,
            platform: [platforms],
         })
      )
   }, [dispatch])

   // ** User filter options
   // const roleOptions = [
   //     { value: '', label: 'Select Role' },
   //     { value: 'admin', label: 'Admin' },
   //     { value: 'author', label: 'Author' },
   //     { value: 'editor', label: 'Editor' },
   //     { value: 'maintainer', label: 'Maintainer' },
   //     { value: 'subscriber', label: 'Subscriber' }
   // ]

   // const planOptions = [
   //     { value: '', label: 'Select Plan' },
   //     { value: 'basic', label: 'Basic' },
   //     { value: 'company', label: 'Company' },
   //     { value: 'enterprise', label: 'Enterprise' },
   //     { value: 'team', label: 'Team' }
   // ]

   const statusOptions = [
      { value: "pending", label: "Select Status", number: 0 },
      { value: "active", label: "Pending", number: 1 },
      { value: "inactive", label: "Active", number: 2 },
   ]

   // ** Function in get data on page change
   const handlePagination = (page) => {
      dispatch(
         getOrderByStatus({
            page: currentPage,
            show: rowsPerPage,
            sortBy: sortPerPage,
            orderBy,
            status,
            platform: [platforms],
         })
      )
      setCurrentPage(page.selected + 1)
   }

   // ** Function in get data on rows per page
   const handlePerPage = (e) => {
      const value = parseInt(e.currentTarget.value)
      dispatch(
         getOrderByStatus({
            page: currentPage,
            show: rowsPerPage,
            sortBy: sortPerPage,
            orderBy,
            status,
            platform: [platforms],
         })
      )
      setRowsPerPage(value)
   }

   // ** Function in get data on search query change
   const handleFilter = (val) => {
      setSearchTerm(val)
      dispatch(
         getOrderByStatus({
            page: currentPage,
            show: rowsPerPage,
            sortBy: sortPerPage,
            orderBy,
            status,
            platform: [platforms],
         })
      )
   }

   // ** Custom Pagination
   const CustomPagination = () => {
      const count = Number(Math.ceil(store.total / rowsPerPage))

      return (
         <ReactPaginate
            previousLabel={""}
            nextLabel={""}
            pageCount={count || 1}
            activeClassName="active"
            forcePage={currentPage !== 0 ? currentPage - 1 : 0}
            onPageChange={(page) => handlePagination(page)}
            pageClassName={"page-item"}
            nextLinkClassName={"page-link"}
            nextClassName={"page-item next"}
            previousClassName={"page-item prev"}
            previousLinkClassName={"page-link"}
            pageLinkClassName={"page-link"}
            containerClassName={
               "pagination react-paginate justify-content-end my-2 pr-1"
            }
         />
      )
   }

   // ** Table data to render
   const dataToRender = () => {
      const filters = {
         // role: currentRole.value,
         // currentPlan: currentPlan.value,
         status: currentStatus.value,
         q: searchTerm,
      }

      const isFiltered = Object.keys(filters).some(function (k) {
         return filters[k].length > 0
      })

      if (store?.data?.length > 0) {
         return store?.data
      } else if (store?.data?.length === 0 && isFiltered) {
         return []
      } else {
         return store?.allData?.slice(0, rowsPerPage)
      }
   }

   return (
      <Fragment>

         {/* <Card>
        <CardHeader>
          <CardTitle tag="h4">Search Filter</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="4">
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className="react-select"
                classNamePrefix="select"
                options={statusOptions}
                value={currentStatus}
                onChange={(data) => {
                  setCurrentStatus(data)
                  dispatch(
                    getOrder({
                      page: currentPage,
                      perPage: rowsPerPage,
                      // role: currentRole.value,
                      // currentPlan: currentPlan.value,
                      status: data.value,
                      q: searchTerm,
                    })
                  )
                }}
              />
            </Col>
          </Row>
        </CardBody>
      </Card> */}

         <Card>
            <DataTable
               noHeader
               pagination
               paginationServer
               subHeader={true}
               columns={columnExpired}
               responsive={true}
               sortIcon={<ChevronDown />}
               className='react-dataTable'
               defaultSortField='orderId'
               paginationDefaultPage={currentPage}
               paginationComponent={CustomPagination}
               data={dataToRender()}
               subHeaderComponent={
                  <CustomHeader
                     toggleSidebar={toggleSidebar}
                     handlePerPage={handlePerPage}
                     rowsPerPage={rowsPerPage}
                     searchTerm={searchTerm}
                     handleFilter={handleFilter}
                  />
               }
            />
         </Card>

         <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
      </Fragment>
   )
}

export default TableExpired
