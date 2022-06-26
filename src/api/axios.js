import * as axios from 'axios'

const instance = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const getUsers = () => {
   return instance.get('users')
      .then(response => {
         return response.data
      })
}

export const getUser = (id) => {
   return instance.get(`users?id=${id}`)
      .then(response => {
         return response.data
      })
}

export const getPosts = (id, pageSize, currentPage) => {
   return instance.get(`posts?userId=${id}&_limit=${pageSize}&_page=${currentPage}`)
}