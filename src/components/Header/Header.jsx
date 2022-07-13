import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GiVikingLonghouse } from 'react-icons/gi'


const Header = () => {
   return (
      <Container className=' p-3 mb-4 bg-primary text-white rounded' >
         <Row>
            <Col xs={12} sm={6} className='d-flex align-items-center'>
               <GiVikingLonghouse style={{ height: '50px', width: '50px' }} />
               <h1 className="ms-3 mb-0 lh-base">Mead Hall</h1>
            </Col>
            <Col xs={12} sm={6} className='d-flex justify-content-end align-items-center'><div>Sharing stories since 793 A.D.</div></Col>
         </Row>
      </Container>
   );
};

export default Header;
