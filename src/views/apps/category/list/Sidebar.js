// ** Custom Components
import Sidebar from '@components/sidebar'

import { isObjEmpty } from '@utils'

import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { Button, FormGroup, Label, FormText, Form, Input } from 'reactstrap'

import { addCategory } from '../store/action'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { Upload } from '@src/utility/Upload'

const SidebarNewCategory = ({ open, toggleSidebar }) => {
    const dispatch = useDispatch()

    const { register, errors, handleSubmit } = useForm()
    const [image, setImage] = useState('')
    const [imagePreview, setImagePreview] = useState(null)

    const onSubmit = values => {
        if (isObjEmpty(errors)) {
            console.log('data masuk')
            toggleSidebar()
            dispatch(
                addCategory({
                    sku: values.sku,
                    slug: values.slug,
                    name: values.name,
                    position: values.position,
                    image,
                    status: values.status,
                    additional: values.additional,
                    description: values.description
                })
            )
        }
    }

    const onImageUpload = (e) => {
        const file = e.target.files[0]
        setImage(file)
        setImagePreview(URL.createObjectURL(file))
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
                        placeholder='Category Name'
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
                        Status <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        type='select'
                        name='status'
                        id='status'
                        placeholder='status'
                        innerRef={register({ required: true })}
                        className={classnames({ 'is-invalid': errors['status'] })}
                    >
                    <option value="disabled">Disabled</option>
                    <option value="active">Active</option>
                    <option value="nonactive">Nonactive</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>
                        Choose Image <span className='text-danger'>*</span>
                    </Label>
                    <Upload
                        name='image'
                        id='image'
                        onChange={(e) => onImageUpload(e)}
                        img={imagePreview}
                        innerRef={register({ required: true })}
                        className={classnames({ 'is-invalid': errors['image'] })}
                    />
                    <FormText color='muted'>menerima format JPG, JPEG, PNG</FormText>
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

export default SidebarNewCategory