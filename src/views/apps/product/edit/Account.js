import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { isObjEmpty } from '@utils'

import ToastUpdate from '../../../components/toasts/ToastUpdate'
import Avatar from '@components/avatar'

import { updateProduct, getProductById } from '../store/action'
import { toast, Slide } from 'react-toastify'
import { Check, Edit, Trash2 } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput } from 'reactstrap'

const ProductAccountTab = ({ selectedProduct }) => {
    const dispatch = useDispatch(),
        { id } = useParams()

    const { register, errors, handleSubmit } = useForm()
    // ** States
    const [img, setImg] = useState(null)
    const [productData, setProductData] = useState(null)
    const [disc, setDisc] = useState(false)

    // ** Function to change user image
    const onChange = e => {
        const reader = new FileReader(),
            files = e.target.files
        reader.onload = function () {
            setImg(reader.result)
        }
        reader.readAsDataURL(files[0])
    }

    // ** Update user image on mount or change
    useEffect(() => {
        dispatch(getProductById(id))
        // if (selectedCategory !== null || (selectedCategory !== null && categoryData !== null && selectedCategory?._id !== categoryData?._id)) {
        //    // setCategoryData(selectedCategory)

        //    // if (selectedCategory?.avatar?.length) {
        //    //    return setImg(selectedCategory?.avatar)
        //    // } else {
        //    //    return setImg(null)
        //    // }
        // }
    }, [id])

    useEffect(() => {
        setProductData(selectedProduct)
    }, [selectedProduct])

    const onSubmit = (values) => {
        if (isObjEmpty(errors)) {
            console.log('berhasil diupdate')
            dispatch(
                updateProduct(id, {
                    category_id: values.category_id,
                    sku: values.sku,
                    slug: values.slug,
                    name: values.name,
                    position: values.position,
                    price: values.price,
                    stock: values.stock,
                    weight: values.weight,
                    image_category: values.image_category,
                    status: values.status,
                    additional: values.additional,
                    description: values.description,
                    isDiscount: values.isDiscount
                    // discount: values.discount,
                    // discountStart: values.discountStart,
                    // discountEnd: values.discountEnd,
                    // priceAfterDiscount: values.priceAfterDiscount
                })
            )
        }

        toast.success(
            <ToastUpdate
                icon={<Check size={12} />}
                content='Product'
            />,
            { transition: Slide, hideProgressBar: true, autoClose: 8000 }
        )
    }

    const discount = (hargaAwal) => {
        hargaAwal = productData.price
        const discount = productData.hasDiscount.discount
        const hargaDiscount = hargaAwal - discount

        return hargaDiscount
    }

    // ** Renders User
    const renderUserAvatar = () => {
        if (img === null) {
            const stateNum = Math.floor(Math.random() * 6),
                states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
                color = states[stateNum]
            return (
                <Avatar
                    initials
                    color={color}
                    className='rounded mr-2 my-25'
                    content={selectedProduct.fullName}
                    contentStyles={{
                        borderRadius: 0,
                        fontSize: 'calc(36px)',
                        width: '100%',
                        height: '100%'
                    }}
                    style={{
                        height: '90px',
                        width: '90px'
                    }}
                />
            )
        } else {
            return (
                <img
                    className='user-avatar rounded mr-2 my-25 cursor-pointer'
                    src={img}
                    alt='user profile avatar'
                    height='90'
                    width='90'
                />
            )
        }
    }

    if (!productData) {
        return null
    } else {
        return (
            <Row>
                <Col sm='12'>
                    <Media className='mb-2'>
                        {/* {renderUserAvatar()} */}
                        <Media className='mt-50' body>
                            <h4>{selectedProduct.name} </h4>
                            {/* <div className='d-flex flex-wrap mt-1 px-0'>
                                <Button.Ripple id='change-img' tag={Label} className='mr-75 mb-0' color='primary'>
                                    <span className='d-none d-sm-block'>Change</span>
                                    <span className='d-block d-sm-none'>
                                        <Edit size={14} />
                                    </span>
                                    <input type='file' hidden id='change-img' onChange={onChange} accept='image/*' />
                                </Button.Ripple>
                                <Button.Ripple color='secondary' outline>
                                    <span className='d-none d-sm-block'>Remove</span>
                                    <span className='d-block d-sm-none'>
                                        <Trash2 size={14} />
                                    </span>
                                </Button.Ripple>
                            </div> */}
                        </Media>
                    </Media>
                </Col>
                <Col sm='12'>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col md='4' sm='12'>
                                <FormGroup>
                                    <Label for='name'>Name</Label>
                                    <Input
                                        type='text'
                                        id='name'
                                        name='name'
                                        placeholder='Product name'
                                        defaultValue={productData.name}
                                        innerRef={register({ required: true })}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md='4' sm='12'>
                                <FormGroup>
                                    <Label for='sku'>Sku</Label>
                                    <Input
                                        type='text'
                                        id='sku'
                                        name='sku'
                                        placeholder='Sku'
                                        defaultValue={productData.sku}
                                        innerRef={register({ required: true })}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md='4' sm='12'>
                                <FormGroup>
                                    <Label for='slug'>Slug</Label>
                                    <Input
                                        type='text'
                                        id='slug'
                                        name='slug'
                                        placeholder='Slug'
                                        defaultValue={productData.slug}
                                        innerRef={register({ required: true })}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md='4' sm='12'>
                                <FormGroup>
                                    <Label for='status'>Status</Label>
                                    <Input
                                        type='select'
                                        name='status'
                                        id='status'
                                        defaultValue={productData.status}
                                        innerRef={register({ required: true })}
                                    >
                                        <option value='pending'>Pending</option>
                                        <option value='active'>Active</option>
                                        <option value='nonactive'>Nonactive</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md='4' sm='12'>
                                <FormGroup>
                                    <Label for='category_id'>Categori</Label>
                                    <Input
                                        type='select'
                                        name='category_id'
                                        id='category_id'
                                        defaultValue={productData.category[0].name}
                                        innerRef={register({ required: true })}
                                    >
                                        <option value={productData.category[0]._id}>{productData.category[0].name}</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md='4' sm='12'>
                                <FormGroup>
                                    <Label for='position'>Position</Label>
                                    <Input
                                        type='number'
                                        id='position'
                                        name='position'
                                        defaultValue={productData.position}
                                        placeholder='Position...'
                                        innerRef={register({ required: true })}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md='4' sm='12'>
                                <FormGroup>
                                    <Label for='price'>Price</Label>
                                    <Input
                                        type='text'
                                        id='price'
                                        name='price'
                                        defaultValue={productData.price}
                                        placeholder='Price...'
                                        innerRef={register({ required: true })}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md='4' sm='12'>
                                <FormGroup>
                                    <Label for='stock'>Stock</Label>
                                    <Input
                                        type='text'
                                        id='stock'
                                        name='stock'
                                        defaultValue={productData.stock}
                                        placeholder='Stock...'
                                        innerRef={register({ required: true })}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md='4' sm='12'>
                                <FormGroup>
                                    <Label for='weight'>Weight</Label>
                                    <Input
                                        type='text'
                                        id='weight'
                                        name='weight'
                                        defaultValue={productData.weight}
                                        placeholder='Weight...'
                                        innerRef={register({ required: true })}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md='4' sm='12'>
                                <FormGroup>
                                    <Label for='additional'>Additional</Label>
                                    <Input
                                        type='text'
                                        id='additional'
                                        name='additional'
                                        defaultValue={productData.additional}
                                        placeholder='additional..'
                                        innerRef={register({ required: true })}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md='4' sm='12'>
                                <FormGroup>
                                    <Label for='description'>Description</Label>
                                    <Input
                                        type='text'
                                        id='description'
                                        name='description'
                                        defaultValue={productData.description}
                                        placeholder='description...'
                                        innerRef={register({ required: true })}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md='4' sm='12'>
                                <FormGroup>
                                    <Label for='isDiscount'>Is Discount?</Label>
                                    <Input
                                        type='select'
                                        name='isDiscount'
                                        id='isDiscount'
                                        defaultValue={productData.hasDiscount.isDiscount}
                                        innerRef={register({ required: true })}
                                        onChange={e => setDisc(e.target.value)}
                                    >
                                        <option value={true}>Active</option>
                                        <option value={false}>Nonactive</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            {disc ? (<>
                                <Col sm='12'>
                                    <Media className='mb-2'>
                                        {/* {renderUserAvatar()} */}
                                        <Media className='mt-50' body>
                                            <h4>Discount (optional)</h4>
                                            {/* <div className='d-flex flex-wrap mt-1 px-0'>
                                <Button.Ripple id='change-img' tag={Label} className='mr-75 mb-0' color='primary'>
                                    <span className='d-none d-sm-block'>Change</span>
                                    <span className='d-block d-sm-none'>
                                        <Edit size={14} />
                                    </span>
                                    <input type='file' hidden id='change-img' onChange={onChange} accept='image/*' />
                                </Button.Ripple>
                                <Button.Ripple color='secondary' outline>
                                    <span className='d-none d-sm-block'>Remove</span>
                                    <span className='d-block d-sm-none'>
                                        <Trash2 size={14} />
                                    </span>
                                </Button.Ripple>
                            </div> */}
                                        </Media>
                                    </Media>
                                </Col>
                                <Col md='4' sm='12'>
                                    <FormGroup>
                                        <Label for='discount'>Discount</Label>
                                        <Input
                                            type='number'
                                            id='discount'
                                            name='discount'
                                            onWheel={(e) => e.target.blur()}
                                            defaultValue={productData.hasDiscount.discount}
                                            placeholder='description...'
                                            innerRef={register({ required: false })}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md='4' sm='12'>
                                    <FormGroup>
                                        <Label for='discountStart'>Discount Start</Label>
                                        <Input
                                            type='datetime-local'
                                            id='discountStart'
                                            name='discountStart'
                                            onWheel={(e) => e.target.blur()}
                                            defaultValue={productData.hasDiscount.discountStart}
                                            placeholder='discount start ...'
                                            innerRef={register({ required: false })}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md='4' sm='12'>
                                    <FormGroup>
                                        <Label for='discountEnd'>Discount End</Label>
                                        <Input
                                            type='datetime-local'
                                            id='discountEnd'
                                            name='discountEnd'
                                            onWheel={(e) => e.target.blur()}
                                            defaultValue={productData.hasDiscount.discountEnd}
                                            placeholder='discount end ...'
                                            innerRef={register({ required: false })}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md='4' sm='12'>
                                    <FormGroup>
                                        <Label for='priceAfterDiscount'>Price After Discount</Label>
                                        <Input
                                            type='number'
                                            id='priceAfterDiscount'
                                            name='priceAfterDiscount'
                                            onWheel={(e) => e.target.blur()}
                                            defaultValue={discount(productData.price)}
                                            placeholder='price after discount ...'
                                            disabled
                                            innerRef={register({ required: false })}
                                        />
                                    </FormGroup>
                                </Col></>) : (<div></div>)}

                            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
                                <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                                    Save Changes
                                </Button.Ripple>
                                <Button.Ripple color='secondary' outline>
                                    Reset
                                </Button.Ripple>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default ProductAccountTab