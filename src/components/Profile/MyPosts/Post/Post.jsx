import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { IoTrashOutline } from 'react-icons/io5'
const Post = (props) => {
   return (
      <Col xs={12} md={6} xl={4}>
         <Card border="primary" className='p-3 mb-1'>
            <Card.Body>
               <Card.Title>
                  {props.title}
               </Card.Title>
               <Card.Text>
                  {props.message}
               </Card.Text>
               <div>
                  <Button variant='outline-primary' onClick={() => props.removePost(props.id)}>
                     <IoTrashOutline style={{ width: '25px', height: '25px' }} />
                  </Button>
               </div>
            </Card.Body>
         </Card>
      </Col>
   )
}

export default Post