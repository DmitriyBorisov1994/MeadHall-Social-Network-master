import React from 'react'
import { Card } from 'react-bootstrap'

const Message = (props) => {
   return (
      <Card bg='light' className='p-3 mb-3'>
         <Card.Text className='text-secondary'>{props.message}</Card.Text>
      </Card>
   )
}

export default Message