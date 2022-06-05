import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
   let path = "/dialogs/" + props.id
   return (
      <Row className='mb-2'>
         <Col>
            <img src={props.url} style={{ width: '40px' }} />
            <NavLink to={path} className='text-secondary'>{props.name}</NavLink>
         </Col>
      </Row>
   )
}

export default DialogItem