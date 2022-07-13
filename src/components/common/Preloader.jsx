import React from 'react'
import { Spinner, Container } from 'react-bootstrap'

const Preloader = () => {
   return (
      <Container className='d-flex justify-content-center'>
         <Spinner animation="border" variant="primary" />
      </Container>
   )
}

export default Preloader