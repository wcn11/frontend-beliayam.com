import { useState, useEffect } from 'react'
import classnames from 'classnames'
import Avatar from '@components/avatar'
import { TrendingUp, User, Box, DollarSign } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media } from 'reactstrap'
import { fetcher } from '@src/utility/axiosHooks'
import { TOTAL_REVENUE, TOTAL_ORDERS, TOTAL_PRODUCTS, TOTAL_USERS } from '@src/utility/Url'

const StatsCard = ({ cols }) => {
  const [revenue, setRevenue] = useState('')
  const [sales, setSales] = useState('')
  const [product, setProduct] = useState('')
  const [user, setUser] = useState('')

  // const [data, setData] = useState([
  //   {
  //     title: '30500',
  //     subtitle: 'Revenue',
  //     color: 'light-success',
  //     icon: <DollarSign size={24} />
  //   },
  //   {
  //     title: '2',
  //     subtitle: 'Sales',
  //     color: 'light-primary',
  //     icon: <TrendingUp size={24} />
  //   },
  //   {
  //     title: '4',
  //     subtitle: 'Products',
  //     color: 'light-danger',
  //     icon: <Box size={24} />
  //   },
  //   {
  //     title: '11',
  //     subtitle: 'Users',
  //     color: 'light-info',
  //     icon: <User size={24} />
  //   }
  // ])

  useEffect(() => {
    const getRevenue = async () => {
      await fetcher(TOTAL_REVENUE).then((res) => {
        return res
      }).then((res) => {
        setRevenue(res?.data?.data?.totalRevenue)

      }).catch(err => console.log(err))
    }

    const getSales = async () => {
      await fetcher(TOTAL_ORDERS).then((res) => {
        return res
      }).then((res) => {
        setSales(res?.data?.data?.totalOrder)

      }).catch(err => console.log(err))
    }

    const getProduct = async () => {
      await fetcher(TOTAL_PRODUCTS).then((res) => {
        return res
      }).then((res) => {
        setProduct(Number(res?.data?.data?.totalActiveProducts) + Number(res?.data?.data?.totalNotActiveProducts))
      }).catch(err => console.log(err))
    }

    const getUser = async () => {
      await fetcher(TOTAL_USERS).then((res) => {
        return res
      }).then((res) => {
        setUser(res?.data?.data.totalUser)

      }).catch(err => console.log(err))
    }

    getRevenue()
    getSales()
    getProduct()
    getUser()
  }, [])

  // const renderData = () => {
  //   return data.map((item, index) => {
  //     const margin = Object.keys(cols)
  //     return (
  //       <Col
  //         key={index}
  //         {...cols}
  //         className={classnames({
  //           [`mb-2 mb-${margin[0]}-0`]: index !== data.length - 1
  //         })}
  //       >
  //         <Media>
  //           <Avatar color={item.color} icon={item.icon} className='mr-2' />
  //           <Media className='my-auto' body>
  //             <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
  //             <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
  //           </Media>
  //         </Media>
  //       </Col>
  //     )
  //   })
  // }

  return (
    <Card className='card-statistics'>
      <CardHeader>
        <CardTitle tag='h4'>Statistics</CardTitle>
        {/* <CardText className='card-text font-small-2 mr-25 mb-0'>Updated 1 month ago</CardText> */}
      </CardHeader>
      <CardBody className='statistics-body'>
        {/* <Row>{renderData()}</Row> */}
        <Row>
          <Col className='mb-2'>
          <Media>
              <Avatar color='light-success' icon={<DollarSign size={24} />} className='mr-2' />
             <Media className='my-auto' body>
               <h4 className='font-weight-bolder mb-0'>{revenue}</h4>
              <CardText className='font-small-3 mb-0'>Revenue</CardText>
             </Media>
           </Media>
          </Col>
          <Col className='mb-2'>
            <Media>
              <Avatar color='light-primary' icon={<TrendingUp size={24} />} className='mr-2' />
              <Media className='my-auto' body>
                <h4 className='font-weight-bolder mb-0'>{sales}</h4>
                <CardText className='font-small-3 mb-0'>Sales</CardText>
              </Media>
            </Media>
          </Col>
          <Col className='mb-2'>
            <Media>
              <Avatar color='light-danger' icon={<Box size={24} />} className='mr-2' />
              <Media className='my-auto' body>
                <h4 className='font-weight-bolder mb-0'>{product}</h4>
                <CardText className='font-small-3 mb-0'>Products</CardText>
              </Media>
            </Media>
          </Col>
          <Col className='mb-2'>
            <Media>
              <Avatar color='light-info' icon={<User size={24} />} className='mr-2' />
              <Media className='my-auto' body>
                <h4 className='font-weight-bolder mb-0'>{user}</h4>
                <CardText className='font-small-3 mb-0'>Users</CardText>
              </Media>
            </Media>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default StatsCard
