// ** Third Party Components
import { Card, CardBody, CardText, Row, Col, Table } from 'reactstrap'

// ** Utils
import { formatDateTime, numberFormat, toCamelCase } from "@utils"

// ** Config
import themeConfig from '@configs/themeConfig'

const PreviewCard = ({ data }) => {
  console.log('ini data di preview man')
  console.log(data)
  return data !== null ? (
    <Card className='invoice-preview-card'>
      <CardBody className='invoice-padding pb-0'>
        {/* Header */}
        <div className='d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0'>
          <div>
            <div className='logo-wrapper'>
              <img src={themeConfig.app.appLogoImage} alt='logo' /> 
              <h3 className='text-primary order-logo'>Beliayam.com</h3>
            </div>

            <p className='card-text mb-25'>Office 8, Level 18-A</p>
            <p className='card-text mb-25'>Jl. Jend. Sudirman Kav. 52-53 SCBD</p>
            <p className='card-text mb-0'>LOT 28, Jakarta Selatan</p>
          </div>
          <div className='mt-md-0 mt-2'>
            <h4 className='invoice-title'>
              Invoice <span className='invoice-number'>
                #{data.order_id} 
              </span>
            </h4>
            <div className='invoice-date-wrapper'>
              <p className='invoice-date-title'>Date Issued:</p>
              <p className='invoice-date'>
                {formatDateTime(data.createdAt)}
              </p>
            </div>
            {/* <div className='invoice-date-wrapper'>
              <p className='invoice-date-title'>Due Date:</p>
              <p className='invoice-date'>
                {data.invoice.dueDate} ini di remark
                </p>
            </div> */}
          </div>
        </div>
        {/* /Header */}
      </CardBody>

      <hr className='invoice-spacing' />

      {/* Address and Contact */}
      <CardBody className='invoice-padding pt-0'>
        <Row className='invoice-spacing'>
          <Col className='p-0' lg='8'>
            <h6 className='mb-2'>Invoice To:</h6>
            <h6 className='mb-25'>{data.user.name ? data.user.name : "belum ada nama"}</h6>
            {/* <CardText className='mb-25'>{data.usercompany}</CardText> */}
            <CardText className='mb-25'>{data.shipping_address.address1 + data.shipping_address.address2}</CardText>
            <CardText className='mb-25'>
              {
                `${data.shipping_address.sub_district.name  }, ${ 
                data.shipping_address.district.name  }, ${ 
                data.shipping_address.city.name  }, ${ 
                data.shipping_address.state.name  } ` 
              }
            </CardText>
            <CardText className='mb-25'>{data.shipping_address.phone}</CardText>
            {/* <CardText className='mb-0'>{data.usercompanyEmail}</CardText>  */}
          </Col>
          <Col className='p-0 mt-xl-0 mt-2' lg='4'>
            <h6 className='mb-2'>Payment Details:</h6>
            <table>
              <tbody>
                <tr>
                  <td className='pr-1'>Total Due:</td>
                  <td>
                    {/* <span className='font-weight-bolder'>{data.paymentDetails.totalDue}</span> */}
                  </td>
                </tr>
                <tr>
                  <td className='pr-1'>Bank name:</td>
                  {/* <td>{data.paymentDetails.bankName}</td> */}
                </tr>
                <tr>
                  <td className='pr-1'>Country:</td>
                  {/* <td>{data.paymentDetails.country}</td> */}
                </tr>
                <tr>
                  <td className='pr-1'>IBAN:</td>
                  {/* <td>{data.paymentDetails.iban}</td> */}
                </tr>
                <tr>
                  <td className='pr-1'>SWIFT code:</td>
                  {/* <td>{data.paymentDetails.swiftCode}</td> */}
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </CardBody>
      {/* /Address and Contact */}

      {/* Invoice Description */}
      <Table responsive>
        <thead>
          <tr>
            <th className='py-1'>Task description</th>
            <th className='py-1'>Rate</th>
            <th className='py-1'>Hours</th>
            <th className='py-1'>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='py-1'>
              <p className='card-text font-weight-bold mb-25'>Native App Development</p>
              <p className='card-text text-nowrap'>
                Developed a full stack native app using React Native, Bootstrap & Python
              </p>
            </td>
            <td className='py-1'>
              <span className='font-weight-bold'>$60.00</span>
            </td>
            <td className='py-1'>
              <span className='font-weight-bold'>30</span>
            </td>
            <td className='py-1'>
              <span className='font-weight-bold'>$1,800.00</span>
            </td>
          </tr>
          <tr className='border-bottom'>
            <td className='py-1'>
              <p className='card-text font-weight-bold mb-25'>Ui Kit Design</p>
              <p className='card-text text-nowrap'>Designed a UI kit for native app using Sketch, Figma & Adobe XD</p>
            </td>
            <td className='py-1'>
              <span className='font-weight-bold'>$60.00</span>
            </td>
            <td className='py-1'>
              <span className='font-weight-bold'>20</span>
            </td>
            <td className='py-1'>
              <span className='font-weight-bold'>$1200.00</span>
            </td>
          </tr>
        </tbody>
      </Table>
      {/* /Invoice Description */}

      {/* Total & Sales Person */}
      <CardBody className='invoice-padding pb-0'>
        <Row className='invoice-sales-total-wrapper'>
          <Col className='mt-md-0 mt-3' md='6' order={{ md: 1, lg: 2 }}>
            <CardText className='mb-0'>
              <span className='font-weight-bold'>Salesperson:</span> <span className='ml-75'>Alfie Solomons</span>
            </CardText>
          </Col>
          <Col className='d-flex justify-content-end' md='6' order={{ md: 2, lg: 1 }}>
            <div className='invoice-total-wrapper'>
              <div className='invoice-total-item'>
                <p className='invoice-total-title'>Subtotal:</p>
                <p className='invoice-total-amount'>$1800</p>
              </div>
              <div className='invoice-total-item'>
                <p className='invoice-total-title'>Discount:</p>
                <p className='invoice-total-amount'>$28</p>
              </div>
              <div className='invoice-total-item'>
                <p className='invoice-total-title'>Tax:</p>
                <p className='invoice-total-amount'>21%</p>
              </div>
              <hr className='my-50' />
              <div className='invoice-total-item'>
                <p className='invoice-total-title'>Total:</p>
                <p className='invoice-total-amount'>$1690</p>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
      {/* /Total & Sales Person */}

      <hr className='invoice-spacing' />

      {/* Invoice Note */}
      <CardBody className='invoice-padding pt-0'>
        <Row>
          <Col sm='12'>
            <span className='font-weight-bold'>Note: </span>
            <span>
              It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance
              projects. Thank You!
            </span>
          </Col>
        </Row>
      </CardBody>
      {/* /Invoice Note */}
    </Card>
  ) : null
}

export default PreviewCard
