import { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { DollarSign, CreditCard } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { fetcher } from '@src/utility/axiosHooks'
import { ORDER_BY_PAYMENT_METHOD } from '@src/utility/Url'

const ChartjsRadarChart = ({ tooltipShadow }) => {
  const [dataPayment, setDataPayment] = useState({
    datasets: [
      {
        labels: ['COD', 'Payment Gateway'],
        data: [110, 80],
        backgroundColor: ['#d83030', '#ff9f43'],
        borderWidth: 0,
        pointStyle: 'rectRounded'
      }
    ]
  })

  useEffect(() => {
    const getDataPayment = async () => {
      await fetcher(ORDER_BY_PAYMENT_METHOD).then((res) => {
        return res
      }).then((res) => {
        const dataCod = res.data.data.totalPaymentCod
        const dataTransfer = res.data.data.totalPaymentTransfer

        const codName = 'COD'
        const transferName = 'Payment Gateway'

        setDataPayment({
          datasets: [
            {
              labels: ['COD', 'Payment Gateway'],
              data: [dataCod, dataTransfer],
              backgroundColor: ['#d83030', '#ff9f43'],
              borderWidth: 0,
              pointStyle: 'rectRounded'
            }
          ],
          labels: [codName, transferName]
        })
      }).catch((err) => {
        console.log(err)
      })
    }
    getDataPayment()
  }, [])
  
  const options = {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      cutoutPercentage: 60,
      legend: { display: false },
      // tooltips: {
      //   callbacks: {
      //     label(tooltipItem, data) {
      //       const label = data.datasets[0].labels[tooltipItem.index] || '',
      //         value = data.datasets[0].data[tooltipItem.index]
      //       const output = ` ${label} : ${value} %`
      //       return output
      //     }
      //   },
      //   // Updated default tooltip UI
      //   shadowOffsetX: 1,
      //   shadowOffsetY: 1,
      //   shadowBlur: 8,
      //   shadowColor: tooltipShadow,
      //   backgroundColor: '#fff',
      //   titleFontColor: '#000',
      //   bodyFontColor: '#000'
      // }
    }

  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
        <CardTitle tag='h4'>Transaction Payment Method</CardTitle>
      </CardHeader>
      <CardBody>
        <div style={{ height: '275px' }}>
          <Doughnut data={dataPayment} options={options} height={275} />
        </div>
        <div className='d-flex justify-content-between mt-3 mb-1'>
          <div className='d-flex align-items-center'>
            <CreditCard size={17} className='text-primary' />
            <span className='font-weight-bold ml-75 mr-25'>COD</span>
          </div>
        </div>
        <div className='d-flex justify-content-between mb-1'>
          <div className='d-flex align-items-center'>
            <DollarSign size={17} className='text-warning' />
            <span className='font-weight-bold ml-75 mr-25'>Payment Gateway</span>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default ChartjsRadarChart
