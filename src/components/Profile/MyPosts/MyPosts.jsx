import React, { useRef, useState } from 'react'
import { Container, Form, Button, Modal, Row, Col, ButtonToolbar, ButtonGroup } from 'react-bootstrap'
import Post from './Post/Post'
import { IoAddOutline } from 'react-icons/io5'

const MyPosts = (props) => {

   let pagesCount = Math.ceil(props.totalPostsCount / props.pageSize);
   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }

   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   let newPostTitleElement = useRef(null)
   let newPostBodyElement = useRef(null)

   let postsElements = props.posts.map(p => <Post id={p.id} message={p.body} title={p.title} removePost={props.removePost} />)

   return (
      <div>
         <Container className='p-3 mb-4'>
            <Row>
               <Col xs={'auto'}><h2>Мои посты</h2></Col>
               <Col xs={'auto'}>
                  <Button variant="outline-primary" onClick={handleShow}>
                     <IoAddOutline style={{ width: '25px', height: '25px' }} />
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                     <Modal.Body>
                        <Form>
                           <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                              <Form.Label className='fs-3'>Название</Form.Label>
                              <Form.Control as="textarea" rows={1} placeholder='Название поста' ref={newPostTitleElement} value={props.newPostTitle} onChange={() => props.onPostTitleChange(newPostTitleElement.current.value)} style={{ resize: 'none' }} />
                           </Form.Group>
                           <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                              <Form.Label className='fs-3'>Что у Вас нового?</Form.Label>
                              <Form.Control as="textarea" rows={3} placeholder='Что у вас нового?' ref={newPostBodyElement} value={props.newPostText} onChange={() => props.onPostBodyChange(newPostBodyElement.current.value)} style={{ resize: 'none' }} />
                           </Form.Group>
                        </Form>
                        <Button onClick={() => {
                           props.onAddPost()
                           handleClose()
                        }}>Создать пост</Button>
                     </Modal.Body>
                  </Modal>
               </Col>
            </Row>
         </Container>
         <Container className='p-3 mb-1'>
            <Row className="g-4">
               {postsElements}
            </Row>
         </Container>
         <Container className='p-3 mb-5'>
            <Row>
               <Col xs={12}>
                  <ButtonToolbar className='d-flex justify-content-center'>
                     <ButtonGroup>
                        {pages.map(i => <Button onClick={() => props.changePage(i)}>{i}</Button>)}
                     </ButtonGroup>
                  </ButtonToolbar>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default MyPosts