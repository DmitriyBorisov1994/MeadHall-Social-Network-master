import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Auth = ({ validName, validPwd, validMatch, onEnterLogin,
   onEnterPwd, onEnterMatch, login, pwd, matchPwd, success, onSuccess }) => {

   const handleSubmit = (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!validName || !validPwd || !validMatch) {
         console.log('no validation')
      } else {
         console.log('yes validation')
         onSuccess(true);
      }

   };

   return (
      <Container className=' p-3 mb-4' >
         <Row>
            <Col xs={12} sm={12} md={24} className='d-flex justify-content-center align-items-center'>
               <Form noValidate validated={success} onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="userLogin">
                     <Form.Label>Логин</Form.Label>
                     <Form.Control
                        required
                        type="text"
                        placeholder="Введите Ваш логин"
                        value={login}
                        onChange={(e) => {
                           onEnterLogin(e.target.value)
                        }}
                        isInvalid={!(login === '') && !validName}
                     />
                     <Form.Control.Feedback type='invalid'>
                        Имя должно начинаться с буквы.
                        В имени допускаются буквы, цифры, тире и нижнее подчеркивание.<br />
                        От 4х до 24х символов.
                     </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="userPwd">
                     <Form.Label>Пароль</Form.Label>
                     <Form.Control
                        required
                        type="password"
                        placeholder="Введите пароль"
                        value={pwd}
                        onChange={(e) => onEnterPwd(e.target.value)}
                        isInvalid={!(pwd === '') && !validPwd}
                     />
                     <Form.Control.Feedback type='invalid'>
                        Пароль должен содержать покрайней мере одну строчную букву,
                        одну заглавную букву, одну цифру и один из символов: !@#$%.<br />
                        От 8ми до 24х символов.
                     </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="matchPassword">
                     <Form.Label>Подтвердите пароль</Form.Label>
                     <Form.Control
                        required
                        type="password"
                        placeholder="Подтвердите пароль"
                        value={matchPwd}
                        onChange={(e) => onEnterMatch(e.target.value)}
                        isInvalid={!(matchPwd === '') && !validMatch}
                     />
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

export default Auth