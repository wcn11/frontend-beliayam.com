import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { isObjEmpty } from '@utils'

import { updateCharge, getChargeById } from '../store/action'
import { Edit, Trash2 } from 'react-feather'
import {
   Media, Row, Col, Button, Form, Input, Label, FormGroup, ModalHeader,
   ModalBody,
   ModalFooter,
   Modal,
   FormText } from 'reactstrap'

import { Editor } from 'react-draft-wysiwyg'
import { EditorState, ContentState, convertToRaw } from 'draft-js'
import htmlToDraft from 'html-to-draftjs'
import draftToHtml from 'draftjs-to-html'

import '@styles/react/libs/editor/editor.scss'
import '@styles/base/plugins/forms/form-quill-editor.scss'

const ChargeAccountTab = ({ selectedCharge }) => {
   const dispatch = useDispatch(),
      { id } = useParams()

   const { register, errors, handleSubmit } = useForm()
   // ** States
   const [img, setImg] = useState(null)
   const [chargeData, setChargeData] = useState(null)
   const [centeredModal, setCenteredModal] = useState(false)

   const [content, setContent] = useState('')
   const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

   const [contentTerms, setContentTerms] = useState('')
   const [termsEditor, setTermsEditor] = useState(() => EditorState.createEmpty())

   useEffect(() => {
      setChargeData(selectedCharge)

      //rich editor for description
      const contentBlock = htmlToDraft(selectedCharge?.description)
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
      const _editroState = (EditorState.createWithContent(contentState))

      setEditorState(_editroState)

      //rich editor for additional
      const termsBlock = htmlToDraft(selectedCharge?.termsAndConditions)
      const termsState = ContentState.createFromBlockArray(termsBlock.contentBlocks)
      const _termsState = EditorState.createWithContent(termsState)

      setTermsEditor(_termsState)

   }, [selectedCharge])

   useEffect(() => {
      setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())))
      setContentTerms(draftToHtml(convertToRaw(termsEditor.getCurrentContent())))
   }, [editorState, termsEditor])

   const onChange = e => {
      const reader = new FileReader(),
         files = e.target.files
      reader.onload = function () {
         setImg(reader.result)
      }
      reader.readAsDataURL(files[0])
   }

   useEffect(() => {
      dispatch(getChargeById(id))
      // if (selectedCategory !== null || (selectedCategory !== null && categoryData !== null && selectedCategory?._id !== categoryData?._id)) {
      //    // setCategoryData(selectedCategory)

      //    // if (selectedCategory?.avatar?.length) {
      //    //    return setImg(selectedCategory?.avatar)
      //    // } else {
      //    //    return setImg(null)
      //    // }
      // }
   }, [id])

   const onSubmit = (values) => {
      if (isObjEmpty(errors)) {
         dispatch(
            updateCharge(id, {
               chargeName: values.chargeName,
               chargeBy: values.chargeBy,
               chargeValue: values.chargeValue,
               shortDescription: values.shortDescription,
               description: content,
               termsAndConditions: contentTerms,
               isActive: values.isActive
            })
         )
      }

      setCenteredModal(!centeredModal)

   }

   const centerModal = () => {
      return (
         <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
            <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Vertically Centered</ModalHeader>
            <ModalBody>
               Oat cake ice cream candy chocolate cake chocolate cake cotton candy dragée apple pie. Brownie carrot cake
               candy canes bonbon fruitcake topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
               liquorice.
            </ModalBody>
            <ModalFooter>
               <Button color='primary' onClick={() => setCenteredModal(!centeredModal)}>
                  Accept
               </Button>{' '}
            </ModalFooter>
         </Modal>
      )
   }

   if (!chargeData) {
      return null
   } else {
      return (
         <Row>
            <Col sm='12'>
               <Media className='mb-2'>
                  {/* {renderUserAvatar()} */}
                  <Media className='mt-50' body>
                     <h4>{selectedCharge.chargeName} </h4>
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
               <Form onClick={e => e.preventDefault(centerModal)} key={chargeData._id}>
                  <Row>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='chargeName'>Charge Name</Label>
                           <Input
                              type='text'
                              id='chargeName'
                              name='chargeName'
                              placeholder='Charge Name'
                              defaultValue={chargeData.chargeName}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='chargeBy'>Charge By</Label>
                           <Input
                              type='text'
                              id='chargeBy'
                              name='chargeBy'
                              placeholder='Charge By...'
                              defaultValue={chargeData.chargeBy}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='chargeValue'>Charge Value</Label>
                           <Input
                              type='number'
                              id='chargeValue'
                              name='chargeValue'
                              placeholder='Charge Value...'
                              defaultValue={chargeData.chargeValue}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='6' sm='12'>
                        <FormGroup>
                           <Label for='isActive'>Status</Label>
                           <Input
                              type='select'
                              id='isActive'
                              name='isActive'
                              placeholder='Status Charge'
                              defaultValue={chargeData.isActive}
                              innerRef={register({ required: true })}
                           >
                           <option value={true}>Active</option>
                           <option value={false}>Nonactive</option>
                           </Input>
                        </FormGroup>
                     </Col>
                     <Col md='12' sm='12'>
                        <FormGroup>
                           <Label for='shortDescription'>Short Description</Label>
                           <Input
                              type='textarea'
                              id='shortDescription'
                              name='shortDescription'
                              placeholder='Short Description....'
                              defaultValue={chargeData.shortDescription}
                              innerRef={register({ required: true })}
                           />
                        </FormGroup>
                     </Col>
                     <Col md='12' sm='12'>
                        <FormGroup>
                           <Label for='termsAndConditions'>Terms And Condition</Label>
                           <Editor editorState={termsEditor} onEditorStateChange={newState => {
                              setTermsEditor(newState)
                              setContentTerms(draftToHtml(convertToRaw(newState.getCurrentContent())))
                           }}/>
                        </FormGroup>
                     </Col>
                     <Col md='12' sm='12'>
                        <FormGroup>
                           <Label for='description'>Description</Label>
                           <Editor editorState={editorState} onEditorStateChange={newState => {
                              setEditorState(newState)
                              setContent(draftToHtml(convertToRaw(newState.getCurrentContent())))
                           }}/>
                        </FormGroup>
                     </Col>
                     <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
                        <Button.Ripple onClick={() => setCenteredModal(!centeredModal)} className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                           Save Changes
                        </Button.Ripple>
                        <Button.Ripple color='secondary' outline>
                           Reset
                        </Button.Ripple>

                        <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
                           <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Update Charge</ModalHeader>
                           <ModalBody>
                              Apakah anda yakin untuk mengedit data tersebut?, pastikan sudah benar, cek lagi apa sudah yakin?
                           </ModalBody>
                           <ModalFooter>
                              <Button color='primary' onClick={handleSubmit(onSubmit)}>
                                 Accept
                              </Button>{' '}
                              <Button color='primary' outline onClick={() => setCenteredModal(!centeredModal)}>
                                 Cancel
                              </Button>{' '}
                           </ModalFooter>
                        </Modal>

                     </Col>
                  </Row>
               </Form>
            </Col>
         </Row>
      )
   }
}

export default ChargeAccountTab