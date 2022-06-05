import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { GiVikingHead } from 'react-icons/gi'


const ProfileInfo = ({ infoData }) => {
   const {
      name,
      address = {},
      email,
   } = infoData
   //debugger
   return (
      <Container className='p-3 border-bottom border-primary border-2 mb-4'>
         <Row>
            <Col md={'2'}>
               <GiVikingHead style={{ width: '100px', height: '100px' }} />
            </Col>
            <Col md={'10'}>
               <div className={'text-dark fs-1'}><b>{name}</b></div>
               <div className={'text-secondary fs-3'}>City: {address.city}</div>
               <div className={'text-secondary fs-6'}>Email: {email}</div>
            </Col>
         </Row>
      </Container >
   )
}

export default ProfileInfo