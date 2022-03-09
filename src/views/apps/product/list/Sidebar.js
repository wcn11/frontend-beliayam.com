import Sidebar from '@components/sidebar'

import { isObjEmpty } from '@utils'

import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { Button, FormGroup, Label, FormText, Form, Input } from 'reactstrap'

import Select from 'react-select'

import { addProduct } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllDataCategory } from '../../category/store/action'

const SidebarNewProduct = ({ open, toggleSidebar }) => {
    const dispatch = useDispatch(),
        store = useSelector(state => state.categories)

    const { register, errors, handleSubmit } = useForm()

    useEffect(() => {
        dispatch(getAllDataCategory())
    }, [dispatch])

    const onSubmit = values => {

        if (isObjEmpty(errors)) {
            toggleSidebar()
            dispatch(
                addProduct({
                    category_id: values.category_id,
                    sku: values.sku,
                    slug: values.slug,
                    name: values.name,
                    position: values.position,
                    image_product: values.image_product,
                    price: values.price,
                    stock: values.stock,
                    weight: values.weight,
                    additional: values.additional,
                    description: values.description
                })
            )
        }
    }

    return (
        <Sidebar
            size='lg'
            open={open}
            title='New Category'
            headerClassName='mb-1'
            contentClassName='pt-0'
            toggleSidebar={toggleSidebar}>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <Label for='status'>Choose Category</Label>
                    <Input
                        type='select'
                        name='category_id'
                        id='category_id'
                        innerRef={register({ required: true })}
                    >
                        {store.allData.map((item) => {
                            return <option value={item._id}>{item.name}</option>
                        })}

                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>
                        Sku <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        name='sku'
                        id='sku'
                        placeholder='Sku'
                        innerRef={register({ required: true })}
                        className={classnames({ 'is-invalid': errors['sku'] })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Slug <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        name='slug'
                        id='slug'
                        placeholder='Slug'
                        innerRef={register({ required: true })}
                        className={classnames({ 'is-invalid': errors['slug'] })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Name <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        name='name'
                        id='name'
                        placeholder='Product Name'
                        // value={name}
                        innerRef={register({ required: true })}
                        className={classnames({ 'is-invalid': errors['name'] })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Position <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        type='number'
                        name='position'
                        id='position'
                        placeholder='Position'
                        innerRef={register({ required: true })}
                        className={classnames({ 'is-invalid': errors['position'] })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Choose Image <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        type='file'
                        name='image_category'
                        id='image_category'
                        innerRef={register({ required: false })}
                        className={classnames({ 'is-invalid': errors['image_category'] })}
                    />
                    <FormText color='muted'>receive format JPG, JPEG, PNG, SVG</FormText>
                </FormGroup>
                <FormGroup>
                    <Label>
                        Price <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        type='number'
                        name='price'
                        id='price'
                        placeholder='Position'
                        onWheel={(e => e.target.blur())}
                        innerRef={register({ required: true })}
                        className={classnames({ 'is-invalid': errors['price'] })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Stock <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        type='number'
                        name='stock'
                        id='stock'
                        onWheel={(e => e.target.blur())}
                        placeholder='Position'
                        innerRef={register({ required: true })}
                        className={classnames({ 'is-invalid': errors['stock'] })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Weight <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        type='number'
                        name='weight'
                        id='weight'
                        placeholder='Position'
                        innerRef={register({ required: true })}
                        className={classnames({ 'is-invalid': errors['weight'] })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Additional <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        name='additional'
                        id='additional'
                        placeholder='Additional...'
                        innerRef={register({ required: true })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Description <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        name='description'
                        id='description'
                        placeholder='description...'
                        innerRef={register({ required: true })}
                    />
                </FormGroup>
                <Button type='submit' className='mr-1' color='primary'>
                    Submit
                </Button>
                <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
                    Cancel
                </Button>
            </Form>
        </Sidebar>
    )
}

export default SidebarNewProduct