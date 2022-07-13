import * as axios from 'axios'

const instance = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const fetchUsers = () => {
   return instance.get('users')
      .then(response => {
         return response.data
      })
}

export const fetchUser = (id) => {
   return instance.get(`users?id=${id}`)
      .then(response => {
         return response.data
      })
}

export const fetchPosts = (id, pageSize, currentPage) => {
   return instance.get(`posts?userId=${id}&_limit=${pageSize}&_page=${currentPage}`)
}