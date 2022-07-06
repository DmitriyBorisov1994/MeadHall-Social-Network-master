import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addPost, getPosts, setPosts, updateNewPostText, updateNewPostTitle } from '../../../redux/profileReducer'
import Preloader from '../../common/Preloader'
import MyPosts from './MyPosts'


let mapStateToProps = (state) => {
   return {
      posts: state.profilePage.postsData,
      newPostText: state.profilePage.newPostText,
      newPostTitle: state.profilePage.newPostTitle,
      pageSize: state.profilePage.pageSize,
      totalPostsCount: state.profilePage.totalPostsCount,
      currentPage: state.profilePage.currentPage,
      isPostsFetching: state.profilePage.isPostsFetching
   }
}

const MyPostsContainer = (props) => {

   const { userID } = useParams()

   useEffect(
      () => {
         props.getPosts(userID, props.pageSize, props.currentPage)
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
      props.getPosts(userID, props.pageSize, page)
   }

   return (
      <>
         {props.isPostsFetching ? <Preloader />
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
      getPosts
   })(MyPostsContainer)
