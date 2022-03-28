import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { updatePromo, getPromoById } from '../store/action'
import { isObjEmpty } from '@utils'
import { Upload } from '@src/utility/Upload'
import { AsyncPaginate } from "react-select-async-paginate";
import { 
   Media, 
   Row, 
   Col, 
   Button, 
   Form, 
   Input, 
   Label, 
   FormGroup, 
   FormText } from 'reactstrap'
import moment from 'moment'
import { fetcher } from '@src/utility/axiosHooks'

import { Editor } from 'react-draft-wysiwyg'
import { EditorState, ContentState, convertToRaw } from 'draft-js'
import htmlToDraft from 'html-to-draftjs'
import draftToHtml from 'draftjs-to-html'

import '@styles/react/libs/editor/editor.scss'
import '@styles/base/plugins/forms/form-quill-editor.scss'

const PromoAccountTab = ({selectedPromo}) => {
   const [promoData, setPromoData] = useState(null)
   const [image, setImage] = useState()
   const [imagePreview, setImagePreview] = useState(null)
   const [currentPage, setCurrentPage] = useState(1)
   const [rowsPerPage, setRowsPerPage] = useState(10)
   const [sortPerPage, setSortPerPage] = useState('ASC')
   const [orderBy, setOrderBy] = useState('name')
   const [product, setProduct] = useState([])

   const [content, setContent] = useState('')
   const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

   useEffect(() => {
      setPromoData(selectedPromo)

      const contentBlock = htmlToDraft(selectedPromo?.description)
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
      const _editorState = EditorState.createWithContent(contentState)

      setEditorState(_editorState)

   }, [selectedPromo])

   const dispatch = useDispatch(),
      { id } = useParams()

   const { register, errors, handleSubmit } = useForm()

   const onImageUpload = (e) => {
      const file = e.target.files[0]
      setImage(file)
      setImagePreview(URL.createObjectURL(file))
   }

   const sleep = ms => new Promise(resolve => {
         setTimeout(() => {
            resolve()
         }, ms)
      })

   const options = async (search, prevOptions, {page}) => {
      await sleep(1000)
      const res = await fetcher(`https://be-dev.beliayam.com/api/v1/admin/product?page=${page}&show=${rowsPerPage}&sortBy=${sortPerPage}&orderBy=${orderBy}`)
      const data = res.data.data
      const productData = data.map((item) => {
         return {
            value: item._id,
            label: item.name
         }
      })
      let filteredOptions = []
      if (!search) {
         filteredOptions = productData
      } else {
         const searchLower = search.toLowerCase()

         filteredOptions = productData.filter(({ label }) => label.toLowerCase().includes(searchLower))
      }
      // const hasMore = productData?.length > prevOptions?.length + 10
      const hasMore = true
      const slicedOptions = filteredOptions.slice(
         prevOptions?.length,
         prevOptions?.length + 10
      )

      return {
         options: slicedOptions,
         hasMore,
         additional: {
            page: page + 1,
         },
      }
   }

   console.log(product)

   useEffect(() => {
      dispatch(getPromoById(id))
   }, [id])

   const onSubmit = (values) => {
      if (isObjEmpty(errors)) {
         dispatch(
            updatePromo(id, {
               name: values.name,
               slug: values.slug,
               tags: values.tags,
               image,
               promoStart: values.promoStart,
               promoEnd: values.promoEnd,
               products: product,
               promoValue: values.promoValue,
               promoBy: values.promoBy,
               isActive: values.isActive,
               description: editorState,
               termsAndConditions: values.termsAndConditions,
               products: product
            })
         )
      }
   }

   if (!promoData) {
      return null
   } else {
      return (
         <Row>
            <Col sm='12'>
               <Media className='mb-2'>
                  {/* {renderUserAvatar()} */}
                  <Media className='mt-50' body>
                     <h4>{selectedPromo.name} </h4>
                  </Media>
               </Media>
            </Col>
            <Col sm='12'>
               <Form onSubmit={handleSubmit(onSubmit)} key={promoData._id}>
                  <Row>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='name'>Promo Name</Label>
                           <Input
                              type='text'
                              id='name'
                              name='name'
                              placeholder='Charge Name'
                              defaultValue={promoData.name}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='slug'>Slug</Label>
                           <Input
                              type='text'
                              id='slug'
                              name='slug'
                              placeholder='Charge By...'
                              defaultValue={promoData.slug}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='tags'>Tags</Label>
                           <Input
                              type='text'
                              id='tags'
                              name='tags'
                              placeholder='Charge Value...'
                              defaultValue={promoData.tags}
                              innerRef={register({ required: true })}
                           />
                           <FormText>*Tags promonya diisi yang bener</FormText>
                        </FormGroup>
                     </Col>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='promoValue'>Promo Value</Label>
                           <Input
                              type='number'
                              id='promoValue'
                              name='promoValue'
                              placeholder='Short Description....'
                              defaultValue={promoData.promoValue}
                              innerRef={register({ required: true })}
                           />
                           <FormText>Hanya masukan nomor (jangan jail)</FormText>
                        </FormGroup>
                     </Col>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='promoBy'>Promo By</Label>
                           <Input
                              type='text'
                              id='promoBy'
                              name='promoBy'
                              placeholder='Promo By....'
                              defaultValue={promoData.promoBy}
                              innerRef={register({ required: true })}
                           />
                           <FormText>Price/Percent</FormText>
                        </FormGroup>
                     </Col>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='isActive'>Status</Label>
                           <Input
                              type='select'
                              id='isActive'
                              name='isActive'
                              placeholder='Promo End....'
                              defaultValue={promoData.isActive}
                              innerRef={register({ required: true })}
                           >
                              <option value={true}>Active</option>
                              <option value={false}>Nonactive</option>
                           </Input>
                        </FormGroup>
                     </Col>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='promoStart'>Promo Start</Label>
                           <Input
                              type='datetime-local'
                              id='promoStart'
                              name='promoStart'
                              placeholder='Promo By....'
                              defaultValue={moment(promoData.promoStart).format('YYYY-MM-DDTHH:mm')}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='promoEnd'>Promo End</Label>
                           <Input
                              type='datetime-local'
                              id='promoEnd'
                              name='promoEnd'
                              placeholder='Promo End....'
                              defaultValue={moment(promoData.promoEnd).format('YYYY-MM-DDTHH:mm')}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='image'>Choose Image Promo</Label>
                           <Upload
                           name='image'
                           id='image'
                           onChange={onImageUpload}
                           img={imagePreview}
                           />
                        </FormGroup>
                        <img height={80} src={`https://be-dev.beliayam.com/${promoData.image_promo}`} alt="" />
                     </Col>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='products'>Add Products</Label>
                           <AsyncPaginate
                              isSearchable={true}
                              closeMenuOnSelect={false}
                              id='products'
                              className='react-select'
                              name='products'
                              placeholder='Add product....'
                              isMulti
                              value={product}   
                              loadOptions={options}
                              onChange={setProduct}
                              additional={{
                                 page: 1,
                              }}
                              innerRef={register({ required: true })}
                           />
                           <FormText>Add product in promo</FormText>
                        </FormGroup>
                     </Col>
                     <Col md='12' sm='12'>
                        <FormGroup>
                           <Label for='termsAndConditions'>Terms And Condition</Label>
                           <Input
                              type='textarea'
                              no-resize='true'
                              rows="8"
                              id='termsAndConditions'
                              name='termsAndConditions'
                              placeholder='Terms And Condition....'
                              defaultValue={promoData.termsAndConditions}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='12' sm='12'>
                        <FormGroup>
                           <Label for='description'>Description</Label>
                           <Editor editorState={editorState} onEditorStateChange={newState => {
                              setEditorState(newState)
                              setContent(draftToHtml(convertToRaw(newState.getCurrentContent())))
                           }} />
                        </FormGroup>
                     </Col>
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

export default PromoAccountTab