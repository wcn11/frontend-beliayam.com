// ** React Imports
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { isObjEmpty } from '@utils'

// ** Custom Components
import Avatar from '@components/avatar'
import { getCategoryById, updateCategory } from '../store/action'
import { Upload } from '@src/utility/Upload'

// ** Third Party Components
import { Media, Row, Col, Button, Form, Input, Label, FormGroup } from 'reactstrap'

import { Editor } from 'react-draft-wysiwyg'
import { EditorState, ContentState, convertToRaw } from 'draft-js'
import htmlToDraft from 'html-to-draftjs'
import draftToHtml from 'draftjs-to-html'

import '@styles/react/libs/editor/editor.scss'
import '@styles/base/plugins/forms/form-quill-editor.scss'

const CategoryAccountTab = ({ selectedCategory }) => {

   const dispatch = useDispatch()
   const { id } = useParams()
   
   const { register, errors, handleSubmit } = useForm()
   // ** States
   const [image, setImage] = useState('')
   const [icon, setIcon] = useState('')
   const [imagePreview, setImagePreview] = useState(null)
   const [iconPreview, setIconPreview] = useState(null)
   const [categoryData, setCategoryData] = useState(null)

   const [content, setContent] = useState('')
   const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

   const [contentAdditional, setContentAdditional] = useState('')
   const [additionalEditor, setAdditionalEditor] = useState(() => EditorState.createEmpty())

   useEffect(() => {
      setCategoryData(selectedCategory)

      //rich editor for description
      const contentBlock = htmlToDraft(selectedCategory?.description)
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
      const _editorState = EditorState.createWithContent(contentState)

      setEditorState(_editorState)

      //rich editor for additional
      const additionalBlock = htmlToDraft(selectedCategory?.additional)
      const additionalState = ContentState.createFromBlockArray(additionalBlock.contentBlocks)
      const _additionalState = EditorState.createWithContent(additionalState)

      setAdditionalEditor(_additionalState)
   }, [selectedCategory])

   useEffect(() => {
      setContentAdditional(draftToHtml(convertToRaw(additionalEditor.getCurrentContent())))
      setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())))
   }, [editorState, additionalEditor])
   // ** Function to change user image
   // const onChange = e => {
   //    const reader = new FileReader(),
   //       files = e.target.files
   //    reader.onload = function () {
   //       setImg(reader.result)
   //    }
   //    reader.readAsDataURL(files[0])
   // }

   // ** Update user image on mount or change
   useEffect(() => {
      dispatch(getCategoryById(id))
      // if (selectedCategory !== null || (selectedCategory !== null && categoryData !== null && selectedCategory?._id !== categoryData?._id)) {
      //    setCategoryData(selectedCategory)

      //    // if (selectedCategory?.avatar?.length) {
      //    //    return setImg(selectedCategory?.avatar)
      //    // } else {
      //    //    return setImg(null)
      //    // }
      // }
   }, [id])

   const onSubmit = (values) => {
      console.log(values)
      if (isObjEmpty(errors)) {
         dispatch(
            updateCategory(id, {
               sku: values.sku,
               slug: values.slug,
               name: values.name,
               position: values.position,
               image,
               icon,
               status: values.status,
               additional: contentAdditional,
               description: content
            })
         )
      }
   }

   const onImageUpload = (e) => {
      const file = e.target.files[0]
      setImage(file)
      setImagePreview(URL.createObjectURL(file))
   }

   const onIconUpload = (e) => {
      const file = e.target.files[0]
      setIcon(file)
      setIconPreview(URL.createObjectURL(file))
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
               content={selectedCategory?.name}
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

   if (!categoryData) {
      return <div>ini kosong</div>
   } else {
      return (
         <Row>
            <Col sm='12'>
               <Media className='mb-2'>
                  {/* {renderUserAvatar()} */}
                  <Media className='mt-50' body>
                     <h4>{categoryData?.name} </h4>
                     {/* <div className='d-flex flex-wrap mt-1 px-0'>
                        <Button.Ripple id='change-img' tag={Label} className='mr-75 mb-0' color='primary'>
                           <span className='d-none d-sm-block'>Change Image</span>
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
               <Form onSubmit={handleSubmit(onSubmit)} key={categoryData?._id}>
                  <Row>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='sku'>Sku</Label>
                           <Input
                              type='text'
                              name='sku'
                              id='sku'
                              placeholder='Sku'
                              defaultValue={categoryData?.sku}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='name'>Name</Label>
                           <Input
                              type='text'
                              name='name'
                              id='name'
                              placeholder='Name'
                              defaultValue={categoryData?.name}
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
                              placeholder='Slug'
                              defaultValue={categoryData?.slug}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='slug'>Position</Label>
                           <Input
                              type='text'
                              id='position'
                              name='position'
                              placeholder='Position'
                              defaultValue={categoryData?.position}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='description'>Image Category</Label>
                           <Upload
                              id='image'
                              name='image'
                              onChange={(e) => onImageUpload(e)}
                              img={imagePreview}
                           />
                           <img height={80} src={`https://be-dev.beliayam.com/${categoryData.image}`} alt="" />
                        </FormGroup>
                     </Col>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='icon'>Icon Category</Label>
                           <Upload
                              id='icon'
                              name='icon'
                              onChange={(e) => onIconUpload(e)}
                              img={iconPreview}
                           />
                           <img height={80} src={`https://be-dev.beliayam.com/${categoryData.icon}`} alt="" />
                        </FormGroup>
                     </Col>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='status'>Status</Label>
                           <Input
                              type='select'
                              name='status'
                              id='status'
                              defaultValue={categoryData?.status}
                              innerRef={register({ required: true })}
                           >
                              {/* <option value='disabled'>Disabled</option> */}
                              <option value='active'>Active</option>
                              <option value='nonactive'>Nonactive</option>
                           </Input>
                        </FormGroup>
                     </Col>
                     <Col md='12' sm='12'>
                        <FormGroup>
                           <Label for='additional'>Additional</Label>
                           <Editor editorState={additionalEditor} onEditorStateChange={newState => {
                              setAdditionalEditor(newState)
                              setContentAdditional(draftToHtml(convertToRaw(newState.getCurrentContent())))
                           }} />
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

export default CategoryAccountTab
