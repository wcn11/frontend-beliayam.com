import { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { fetcher } from "@src/utility/axiosHooks"
import {
  Card,
  CardTitle,
  Row,
  Col,
  Button,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap'
import Chart from 'react-apexcharts'
import { GET_USER_FOR_DSB } from "@src/utility/Url"

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

const dayNames = [
  "Sunday", "Monday", "Tuesday", "Wednesday", 
  "Thursday", "Friday", "Saturday"
]

const filterItems = [
  "day",
  "month",
  "year"
]

const d = new Date();

const UserReport = props => {
  const [data, setData] = useState(null)
  const [today, setToday] = useState(new Date())
  console.log('===')
  console.log(today.getDate() - 7)
  console.log(today.setDate(today.getDate() - 7))
  console.log('===')
  const [fromDate, setFromDate] = useState(d.setDate(d.getDate() - 7))
  const lastweek = new Date(fromDate)
  console.log(lastweek)
  const [toDate, setToDate] = useState(new Date())
  const store = useSelector((state) => state.orders)
  const [filter, setFilter] = useState("day")
  const [dorpdownFilters, setFilters] = useState(filterItems)
  const [urlParams, setUrlParams] = useState({});

  useEffect(() => {
    fetcher(GET_USER_FOR_DSB, { params: {fromDate, toDate} }).then(res => setData(res.data))
  }, []) 

  const getUserReport = (selectedFilter) => {  
    console.log(selectedFilter)  
    setFilter(selectedFilter)
    setToDate(d)
    if (selectedFilter === "day") {
      setFromDate(d.getDate - 7)
    } else if (selectedFilter === "month") {
      setFromDate(d.getDate - 7)
    } else {
      // year
      setFromDate(d.getDate - 7)
    }
    setUrlParams({fromDate, toDate})
    axios.get(GET_USER_FOR_DSB, { params: urlParams }).then(res => setData(res.data))
  }  

  const userOptions = {
      chart: {
        stacked: true,
        type: 'bar',
        toolbar: { show: false }
      },
      grid: {
        padding: {
          top: -20,
          bottom: -10
        },
        yaxis: {
          lines: { show: false }
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        labels: {
          style: {
            colors: '#b9b9c3',
            fontSize: '0.86rem'
          }
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      colors: [props.primary, props.warning],
      plotOptions: {
        bar: {
          columnWidth: '17%',
          endingShape: 'rounded'
        },
        distributed: true
      },
      yaxis: {
        labels: {
          style: {
            colors: '#b9b9c3',
            fontSize: '0.86rem'
          }
        }
      }
    },
    userSeries = [
      {
        name: 'Earning',
        data: [95, 177, 284, 256, 105, 63, 168, 218, 72]
      }
    ]

  const budgetSeries = [
      {
        data: [61, 48, 69, 52, 60, 40, 79, 60, 59, 43, 62]
      },
      {
        data: [20, 10, 30, 15, 23, 0, 25, 15, 20, 5, 27]
      }
    ],
    budgetOptions = {
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        type: 'line',
        sparkline: { enabled: true }
      },
      stroke: {
        curve: 'smooth',
        dashArray: [0, 5],
        width: [2]
      },
      colors: [props.primary, '#dcdae3'],
      tooltip: {
        enabled: false
      }
    }

  return data !== null ? (
    <Card className='card-revenue-budget'>
      <Row className='mx-0'>
        <Col className='revenue-report-wrapper' md='8' xs='12'>
          <div className='d-sm-flex justify-content-between align-items-center mb-3'>
            <CardTitle className='mb-50 mb-sm-0'>User Report</CardTitle>
            <div className='d-flex align-items-center'>
              <div className='d-flex align-items-center mr-2'>
                <span className='bullet bullet-primary mr-50 cursor-pointer'></span>
                <span>Earning</span>
              </div>
              {/* <div className='d-flex align-items-center'>
                <span className='bullet bullet-warning mr-50 cursor-pointer'></span>
                <span>Expense</span>
              </div> */}
            </div>
          </div>
          {/* <Chart id='revenue-report-chart' type='bar' height='230' options={revenueOptions} series={revenueSeries} /> */}
        </Col>
        <Col className='budget-wrapper' md='4' xs='12'>
          <UncontrolledButtonDropdown>
            <DropdownToggle className='budget-dropdown' outline color='primary' size='sm' caret>
              {filter}
            </DropdownToggle>
            <DropdownMenu value={filter}>
              {dorpdownFilters.map(item => (
                <DropdownItem className='w-100' key={item} onClick={() => getUserReport(item)} >
                  {item}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledButtonDropdown>
          <h2 className='mb-25'>${data.price}</h2>
          <div className='d-flex justify-content-center'>
            <span className='font-weight-bolder mr-25'>Budget:</span>
            <span>{data.budget}</span>
          </div>
          <Chart id='budget-chart' type='line' height='80' options={budgetOptions} series={budgetSeries} />
          <Button color='primary'>Increase Budget</Button>
        </Col>
      </Row>
    </Card>
  ) : null
}

export default UserReport
