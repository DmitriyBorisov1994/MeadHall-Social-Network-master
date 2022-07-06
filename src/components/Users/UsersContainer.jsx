import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { follow, setUsers, unfollow, getUsers } from '../../redux/usersReducer'
import Preloader from '../common/Preloader'
import Users from './Users'


let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      isUsersFetching: state.usersPage.isUsersFetching
   }
}

const UsersContainer = ({ users, follow, unfollow, isUsersFetching, getUsers }) => {

   /*useEffect(() => {
      toggleIsFetching(true)
      getUsers()
         .then(data => {
            toggleIsFetching(false)
            setUsers(data)
            setTotalCount(data.length)
         });
   }, [])*/

   useEffect(() => {
      getUsers()
   }, [])

   //debugger
   return (
      <>
         {isUsersFetching ? <Preloader />
            : <Users users={users} follow={follow} unfollow={unfollow} />}
      </>

   )
}


export default connect(mapStateToProps,
   {
      follow, setUsers, unfollow,
      getUsers: getUsers
   }
)(UsersContainer)