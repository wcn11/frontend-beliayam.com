import Avatar from '@components/avatar'
import * as Icon from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'

const CardTransactions = () => {
  const transactionsArr = [
    {
      title: 'E-Wallet',
      color: 'light-primary',
      subtitle: 'Dana, Ovo, etc',
      amount: '0',
      Icon: Icon['Pocket'],
      down: true
    },
    {
      title: 'Internet Bangking',
      color: 'light-success',
      subtitle: 'Danamon M-Bangking',
      amount: '0',
      Icon: Icon['Check']
    },
    {
      title: 'Qris',
      color: 'light-danger',
      subtitle: 'Shoope Pay Qris',
      amount: '0',
      Icon: Icon['DollarSign']
    },
    {
      title: 'Retail',
      color: 'light-warning',
      subtitle: 'Alfamart',
      amount: '0',
      Icon: Icon['CreditCard'],
      down: true
    },
    {
      title: 'Virtual Account',
      color: 'light-info',
      subtitle: 'Virtual Account BCA, BRI, etc',
      amount: '1',
      Icon: Icon['TrendingUp']
    }
  ]

  const renderTransactions = () => {
    return transactionsArr.map(item => {
      return (
        <div key={item.title} className='transaction-item'>
          <Media>
            <Avatar className='rounded' color={item.color} icon={<item.Icon size={18} />} />
            <Media body>
              <h6 className='transaction-title'>{item.title}</h6>
              <small>{item.subtitle}</small>
            </Media>
          </Media>
          <div className={`font-weight-bolder ${item.down ? 'text-danger' : 'text-success'}`}>{item.amount}</div>
        </div>
      )
    })
  }

  return (
    <Card className='card-transaction'>
      <CardHeader>
        <CardTitle tag='h4'>Transactions Gateway</CardTitle>
      </CardHeader>
      <CardBody>{renderTransactions()}</CardBody>
    </Card>
  )
}

export default CardTransactions
