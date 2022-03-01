import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

import { isObjEmpty } from '@utils'

import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { Button, FormGroup, Label, FormText, Form, Input } from 'reactstrap'

import { addCategory } from '../store/action'
import { useDispatch } from 'react-redux'

const SidebarNewCategory = ({ open, toggleSidebar }) => {
    const [image_category, setImage_category] = useState('')
    const [name, setName] = useState('')

    const dispatch = useDispatch()

    const { register, errors, handleSubmit } = useForm()

    const onSubmit = values => {
        if (isObjEmpty(errors)) {
            toggleSidebar()
            dispatch(
                addCategory({
                    sku: values.sku,
                    slug: values.slug,
                    name,
                    position: values.position,
                    image_category,
                    status: values.status,
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
            toggleSidebar={toggleSidebar}
        >
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <Label>
                        Sku <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        name='category-sku'
                        id='category-sku'
                        placeholder='Sku'
                        innerRef={register({ required: true })}
                        className={classnames({ 'is-invalid': errors['category-sku'] })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Name <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        name='category-name'
                        id='category-main'
                        placeholder='Category Name'
                        innerRef={register({ required: true })}
                        className={classnames({ 'is-invalid': errors['category-name'] })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Choose Image <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        type='file'
                        id='image-category'
                        innerRef={register({ required: true })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Additional <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        name='additional'
                        id='additional'
                        placeholder='Additional'
                        innerRef={register({ required: true })}
                        className={classnames({ 'is-invalid': errors['additional'] })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Additional <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        name='additional'
                        id='additional'
                        placeholder='Additional'
                        innerRef={register({ required: true })}
                        className={classnames({ 'is-invalid': errors['additional'] })}
                    />
                </FormGroup>
            </Form>

        </Sidebar>
    )
}

export default SidebarNewCategory