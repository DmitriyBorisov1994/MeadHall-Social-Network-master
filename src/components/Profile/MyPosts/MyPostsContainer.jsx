import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addPost, setCurrentPage, setPosts, setTotalPostsCount, updateNewPostText, updateNewPostTitle } from '../../../redux/profileReducer'
import Preloader from '../../common/Preloader'
import MyPosts from './MyPosts'


let mapStateToProps = (state) => {
   return {
      posts: state.profilePage.postsData,
      newPostText: state.profilePage.newPostText,
      newPostTitle: state.profilePage.newPostTitle,
      pageSize: state.profilePage.pageSize,
      totalPostsCount: state.profilePage.totalPostsCount,
      currentPage: state.profilePage.currentPage
   }
}
/*let mapDispatchToProps = (dispatch) => {
   return {
      updateNewPostTitle: (title) => {
         dispatch(updateNewPostTitleActionCreator(title))
      },
      updateNewPostText: (text) => {
         dispatch(updateNewPostTextActionCreator(text))
      },
      addPost: () => {
         dispatch(addPostActionCreator())
      },
      setPosts: (posts) => {
         dispatch(setPostsActionCreator(posts))
      },
      setCurrentPage: (currentPage) => {
         dispatch(setCurrentPageActionCreator(currentPage))
      },
      setTotalPostsCount: (postsCount) => {
         dispatch(setTotalPostsCountActionCreator(postsCount))
      }
   }
}*/

const MyPostsContainer = (props) => {

   const [fetching, setFetching] = useState(false)
   const { userID } = useParams()

   useEffect(
      () => {
         setFetching(true)
         axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userID}&_limit=${props.pageSize}&_page=${props.currentPage}`)
            .then(response => {
               setFetching(false)
               //console.log(userID)
               //console.log(response.data)
               props.setPosts(response.data)
               props.setTotalPostsCount(response.headers['x-total-count'])
            })
      }, [])

   let removePost = (id) => {
      props.setPosts(props.posts.filter((post) => post.id !== id))
   }

   let onAddPost = () => {
      props.addPost()
   }

   let onPostTitleChange = (title) => {
      props.updateNewPostTitle(title)
   }

   let onPostBodyChange = (text) => {
      props.updateNewPostText(text)
   }

   let changePage = (page) => {
      //console.log(page)
      props.setCurrentPage(page)
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userID}&_limit=${props.pageSize}&_page=${page}`)
         .then(response => {
            props.setPosts(response.data)
         })
   }

   return (
      <>
         {fetching ? <Preloader />
            : <MyPosts
               totalPostsCount={props.totalPostsCount}
               pageSize={props.pageSize}
               posts={props.posts}
               newPostText={props.newPostText}
               newPostTitle={props.newPostTitle}
               onAddPost={onAddPost}
               removePost={removePost}
               onPostTitleChange={onPostTitleChange}
               onPostBodyChange={onPostBodyChange}
               changePage={changePage}
            />}
      </>

   )
}

export default connect(mapStateToProps,
   {
      updateNewPostTitle,
      updateNewPostText,
      addPost,
      setPosts,
      setCurrentPage,
      setTotalPostsCount
   })(MyPostsContainer)
