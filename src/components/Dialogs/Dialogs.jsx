import React, { useRef } from 'react'
import { Col, Row, Container, Button, Form } from 'react-bootstrap'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

   let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} url={d.imgURL} key={d.id} />)
   let messagesElements = props.dialogsPage.messagesData.map(m => <Message message={m.message} key={m.id} />)
   let newMessageElement = useRef(null)

   let onAddMessage = () => {
      props.addMessage()
   }

   let onMessageChange = () => {
      let text = newMessageElement.current.value
      props.updateNewMessageText(text)
   }

   return (
      <Container>
         <Row className='mb-1'>
            <Col xs={4} md={2}>
               {dialogsElements}
            </Col>
            <Col xs={8} md={10} className='border-start border-primary'>
               {messagesElements}
            </Col>
         </Row>
         <Row >
            <Col xs={12}>
               <Form>
                  <Form.Group>
                     <Form.Label className='fs-3'>Введите ваше сообщение</Form.Label>
                     <Form.Control as='textarea' style={{ resize: 'none' }} placeholder='Введите ваше сообщение' ref={newMessageElement} value={props.dialogsPage.newMessageText}
                        onChange={onMessageChange} />
                  </Form.Group>
               </Form>
               <div className='d-flex justify-content-end mt-1'>
                  <Button onClick={onAddMessage}>Отправить</Button>
               </div>

            </Col>
         </Row>
      </Container>
   )
}

export default Dialogs