import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ProfileInfo from './ProfileInfo'
import { useParams } from 'react-router-dom'
import { setInfoData } from '../../../redux/profileReducer'
import Preloader from '../../common/Preloader'

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
      axios.get(`https://jsonplaceholder.typicode.com/users?id=${userID}`)
         .then(response => {
            setFetching(false)
            //console.log(response.data)
            setInfoData(response.data[0])
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