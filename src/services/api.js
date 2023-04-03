import axios from 'axios'

const baseUrl = 'https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd'

const apiData = axios.create({
  baseURL: baseUrl
})

export default apiData
