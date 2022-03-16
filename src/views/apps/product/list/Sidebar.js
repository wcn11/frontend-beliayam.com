import Sidebar from '@components/sidebar'

import { isObjEmpty } from '@utils'

import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { Button, FormGroup, Label, FormText, Form, Input } from 'reactstrap'

import { addProduct } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllDataCategory } from '../../category/store/action'

const SidebarNewProduct = ({ open, toggleSidebar }) => {
    const dispatch = useDispatch(),
        store = useSelector(state => state.categories)

    const { register, errors, handleSubmit } = useForm()
    const [img, setImg] = useState('')

    const onChange = e => {
        const reader = new FileReader(),
            files = e.target.files
        reader.onload = function () {
            setImg(reader.result)
        }
        reader.readAsDataURL(files[0])
    }

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
                    image: values.image,
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
                            return <option key={item._id} value={item._id}>{item.name}</option>
                        })}

                    </Input>
                    <FormText>*Pilih category untuk product</FormText>
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
                    <FormText>*Stock Keeping Unit. contoh: 0001xxx</FormText>
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
                    <FormText>*Jangan beri spasi tapi ganti dengan dash. contoh: ayam-ku</FormText>
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
                    <FormText>*beri angka 1-10 saja, jangan jaill ya :)</FormText>
                </FormGroup>
                <FormGroup>
                    <Label>
                        Choose Image <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        type='file'
                        name='image'
                        id='image'
                        // onChange={onChange}
                        innerRef={register({ required: true })}
                        className={classnames({ 'is-invalid': errors['image'] })}
                    />
                    <FormText color='muted'>menerima format JPG, JPEG, PNG, SVG</FormText>
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
                    <FormText>*Jangan diinputkan mahal-mahal biar cepet laku hehe :)</FormText>
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
                    <FormText>*Minimal stock yang bisa diinputkan 3</FormText>
                </FormGroup>
                <FormGroup>
                    <Label>
                        Weight <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        type='number'
                        name='weight'
                        onWheel={(e => e.target.blur())}
                        id='weight'
                        placeholder='Position'
                        innerRef={register({ required: true })}
                        className={classnames({ 'is-invalid': errors['weight'] })}
                    />
                    <FormText>*Minimal berat yang bisa diinputkan 0.1</FormText>
                </FormGroup>
                <FormGroup>
                    <Label>
                        Additional <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        name='additional'
                        id='additional'
                        name='additional'
                        placeholder='Additional...'
                        innerRef={register({ required: false })}
                    />
                    <FormText>*Beri additional(tambahan) jika diperlukan</FormText>
                </FormGroup>
                <FormGroup>
                    <Label>
                        Description <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        name='description'
                        id='description'
                        name='description'
                        placeholder='description...'
                        innerRef={register({ required: false })}
                    />
                    <FormText>*Beri description jika diperlukan</FormText>
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