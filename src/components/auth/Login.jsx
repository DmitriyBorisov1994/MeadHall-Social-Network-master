import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = () => {
   return (
      <Container className=' p-3 mb-4' >
         <Row>
            <Col xs={12} sm={12} md={24} className='d-flex justify-content-center align-items-center'>
               <Form noValidate validated={false}>
                  <Form.Group className="mb-3" controlId="userLogin">
                     <Form.Label>Логин</Form.Label>
                     <Form.Control
                        required
                        id='userLogin'
                        type="text"
                        placeholder="Введите Ваш логин"
                     />
                     <Form.Control.Feedback type='invalid'>
                        Имя должно начинаться с буквы.
                        В имени допускаются буквы, цифры, тире и нижнее подчеркивание.<br />
                        От 4х до 24х символов.
                     </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Пароль</Form.Label>
                     <Form.Control
                        type="password"
                        placeholder="Введите пароль"
                     />
                     <Form.Control.Feedback type='invalid'>
                        Пароль должен содержать покрайней мере одну строчную букву,
                        одну заглавную букву, одну цифру и один из символов: !@#$%.<br />
                        От 8ми до 24х символов.
                     </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Подтвердите пароль</Form.Label>
                     <Form.Control type="password" placeholder="Подтвердите пароль" />
                     <Form.Control.Feedback type='invalid'>
                        Пароли не совпадают!
                     </Form.Control.Feedback>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                     Submit
                  </Button>
               </Form>
            </Col>
         </Row>
      </Container>
   )
}

export default Login