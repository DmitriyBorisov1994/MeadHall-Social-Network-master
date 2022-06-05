import React from 'react'
import { Container, Card, Button, Col, Row } from 'react-bootstrap'
import { NavLink } from "react-router-dom";

const Users = ({ users, follow, unfollow }) => {

   const photosUrl = [
      'https://i.pinimg.com/564x/8e/ef/f7/8eeff7ef9da0604670e887a6c606abc2.jpg',
      'https://i.pinimg.com/564x/29/45/e0/2945e0d4b7f168b561baa8218e17c887.jpg',
      'https://i.pinimg.com/564x/4f/67/09/4f670998614eebafe0df940808c8882d.jpg',
      'https://i.pinimg.com/564x/f2/21/3c/f2213c999236de21f5a30d39ead967b6.jpg',
      'https://i.pinimg.com/564x/d1/17/88/d117889c8db60cc7c15136c08e53d29f.jpg',
   ]

   return (
      <Container className='p-3 mb-4'>
         <Row className="g-4">
            {
               users.map(u =>
                  <Col xs={12} md={6} xl={4}>
                     <Card border='primary' className='mb-4' key={u.id}>
                        <NavLink to={"/profile/" + u.id}>
                           <Card.Img
                              variant='top'
                              src={u.photo ? u.photo : photosUrl[Math.trunc(Math.random() * photosUrl.length)]}
                              alt='photo'
                           />
                        </NavLink>

                        <Card.Body>
                           {u.followed
                              ? <Button text='Unfollow' onClick={() => unfollow(u.id)} className='mb-1'>Отписаться</Button>
                              : <Button text='Follow' onClick={() => follow(u.id)} className='mb-1'>Подписаться</Button>}
                           <Card.Title><strong>{u.name}</strong></Card.Title>
                           <Card.Subtitle className='mb-2'>{u.email}</Card.Subtitle>
                           <Card.Text>{u.address.city} <br />{u.address.street}</Card.Text>
                        </Card.Body>
                     </Card>
                  </Col>
               )
            }
         </Row>
      </Container>
   )
}

export default Users