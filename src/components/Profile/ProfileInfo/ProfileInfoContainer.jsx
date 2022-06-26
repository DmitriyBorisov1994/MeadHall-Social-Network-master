import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ProfileInfo from './ProfileInfo'
import { useParams } from 'react-router-dom'
import { setInfoData } from '../../../redux/profileReducer'
import Preloader from '../../common/Preloader'
import { getUser } from '../../../api/axios'

let mapStateToProps = (state) => {
   return {
      infoData: state.profilePage.infoData,
   }
}

const ProfileInfoContainer = ({ infoData, setInfoData }) => {

   const { userID } = useParams()
   const [fetching, setFetching] = useState(false)

   useEffect(() => {
      setFetching(true)
      getUser(userID)
         .then(data => {
            setFetching(false)
            //console.log(response.data)
            setInfoData(data[0])
         });
   }, [userID])
   //console.log(infoData)

   return (
      <>
         {fetching ? <Preloader /> : <ProfileInfo infoData={infoData} />}
      </>
   )
}

export default connect(mapStateToProps, { setInfoData })(ProfileInfoContainer)