import * as axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { followActionCreator, setUsersActionCreator, unfollowActionCreator, toggleIsFetchingActionCreator } from '../../redux/usersReducer'
import Preloader from '../common/Preloader'
import Users from './Users'
//import UsersC from './UsersС'


let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      isFetching: state.usersPage.isFetching
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followActionCreator(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowActionCreator(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersActionCreator(users))
      },
      toggleIsFetching: (isFetching) => {
         dispatch(toggleIsFetchingActionCreator(isFetching))
      }
   }
}

const UsersContainer = ({ users, follow, unfollow, setUsers, isFetching, toggleIsFetching }) => {

   const [count, setTotalCount] = useState(0)


   useEffect(() => {
      toggleIsFetching(true)
      axios.get('https://jsonplaceholder.typicode.com/users')
         .then(response => {
            toggleIsFetching(false)
            setUsers(response.data)
            setTotalCount(response.data.length)
         });
   }, [])

   return (
      <>
         {isFetching ? <Preloader />
            : <Users users={users} follow={follow} unfollow={unfollow} />}
      </>

   )
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)