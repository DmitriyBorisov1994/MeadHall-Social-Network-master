import * as axios from 'axios'
import { Button } from 'bootstrap';
import React from 'react'

class UsersC extends React.Component {
   photosUrl = [
      'https://i.pinimg.com/564x/8e/ef/f7/8eeff7ef9da0604670e887a6c606abc2.jpg',
      'https://i.pinimg.com/564x/29/45/e0/2945e0d4b7f168b561baa8218e17c887.jpg',
      'https://i.pinimg.com/564x/4f/67/09/4f670998614eebafe0df940808c8882d.jpg',
      'https://i.pinimg.com/564x/f2/21/3c/f2213c999236de21f5a30d39ead967b6.jpg',
      'https://i.pinimg.com/564x/63/90/20/639020e85ba153b4856ab651134ad5e6.jpg',
      'https://i.pinimg.com/564x/d1/17/88/d117889c8db60cc7c15136c08e53d29f.jpg',
      'https://i.pinimg.com/564x/13/dd/f4/13ddf47f05d11ea1c00c8ca71e09d456.jpg'
   ]
   componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/users?_limit=5')
         .then(response => {
            this.props.setUsers(response.data)
         });
   }
   render() {
      return (
         <div>
            {
               this.props.users.map(u =>
                  <div key={u.id}>
                     <div>
                        <div><img src={u.photo ? u.photo : this.photosUrl[Math.trunc(Math.random() * this.photosUrl.length)]} style={{ width: '100px', height: '100px' }} alt='photo' /></div>
                        <div>
                           {u.followed
                              ? <Button onClick={() => this.props.unfollow(u.id)}>Unfollow</Button>
                              : <Button onClick={() => this.props.follow(u.id)}>Follow</Button>}
                        </div>
                     </div>
                     <div>
                        <div>
                           <div><strong>{u.name}</strong></div>
                           <div>{u.email}</div>
                        </div>
                        <div>
                           <div>{u.address.city}</div>
                           <div>{u.address.street}</div>
                        </div>
                     </div>
                  </div>)
            }
         </div>
      )
   }
}

export default UsersC