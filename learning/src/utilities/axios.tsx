import { request } from 'http'
import axios from 'axios'

axios.interceptors.request.use((request) => {
  console.log(request)
  request.headers.channelName = 'The next js'
  return request
})
axios.interceptors.response.use((respone) => {
  console.log(respone)
  return respone
})
