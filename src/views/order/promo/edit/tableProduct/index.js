import { Fragment, useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { columnsProducts } from './columns'

import { getProductsByPromo } from "./store/action"
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


const CustomHeader = ({
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
            </Col>
         </Row>
      </div>
   )
}

const TableProductPromo = () => {
   const dispatch = useDispatch()
   const store = useSelector((state) => state.productsPromo)
   const { id } = useParams()

   // ** States
   const [searchTerm, setSearchTerm] = useState("")
   const [currentPage, setCurrentPage] = useState(1)
   const [rowsPerPage, setRowsPerPage] = useState(10)
   const [sortPerPage, setSortPerPage] = useState('ASC')
   const [orderBy, setOrderBy] = useState('name')
   const [platform, setPlatform] = useState('all')

   const [currentStatus, setCurrentStatus] = useState({
      value: "",
      label: "Select Status",
      number: 0,
   })
   // ** Get data on mount
   useEffect(() => {
      // dispatch(getAllDataOrder())
      dispatch(
         getProductsByPromo(id, {
            page: currentPage,
            show: rowsPerPage,
            sortBy: sortPerPage,
            orderBy,
            platform
         })
      )
   }, [dispatch])

   // ** Function in get data on page change
   const handlePagination = (page) => {
      dispatch(
         getProductsByPromo(id, {
            page: page.selected + 1,
            show: rowsPerPage,
            sortBy: sortPerPage,
            orderBy,
            platform
         })
      )

      setCurrentPage(page.selected + 1)
   }

   // ** Function in get data on rows per page
   const handlePerPage = (e) => {
      const value = parseInt(e.currentTarget.value)
      dispatch(
         getProductsByPromo(id, {
            page: currentPage,
            show: value,
            sortBy: sortPerPage,
            orderBy
         })
      )
      setRowsPerPage(value)
   }

   // ** Function in get data on search query change
   const handleFilter = (val) => {
      setSearchTerm(val)
      dispatch(
         getProductsByPromo(id, {
            page: currentPage,
            show: rowsPerPage,
            sortBy: sortPerPage,
            orderBy
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
                    getProductsByPromo({
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
               columns={columnsProducts}
               responsive={true}
               sortIcon={<ChevronDown />}
               className='react-dataTable'
               defaultSortField='orderId'
               paginationDefaultPage={currentPage}
               paginationComponent={CustomPagination}
               data={dataToRender()}
               subHeaderComponent={
                  <CustomHeader
                     handlePerPage={handlePerPage}
                     rowsPerPage={rowsPerPage}
                     searchTerm={searchTerm}
                     handleFilter={handleFilter}
                  />
               }
            />
         </Card>

      </Fragment>
   )
}

export default TableProductPromo