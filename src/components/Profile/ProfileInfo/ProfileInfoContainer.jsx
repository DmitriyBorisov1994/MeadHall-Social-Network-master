import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ProfileInfo from './ProfileInfo'
import { useParams } from 'react-router-dom'
import { getUserInfo } from '../../../redux/profileReducer'
import Preloader from '../../common/Preloader'

let mapStateToProps = (state) => {
   return {
      infoData: state.profilePage.infoData,
      isUserInfoFetching: state.profilePage.isUserInfoFetching
   }
}

const ProfileInfoContainer = ({ infoData, isUserInfoFetching, getUserInfo }) => {

   const { userID } = useParams()

   useEffect(() => {
      getUserInfo(userID)
   }, [userID])

   return (
      <>
         {isUserInfoFetching ? <Preloader /> : <ProfileInfo infoData={infoData} />}
      </>
   )
}

export default connect(mapStateToProps, { getUserInfo })(ProfileInfoContainer)