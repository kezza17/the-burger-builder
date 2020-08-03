import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://the-burger-builder-d5b1b.firebaseio.com/'
})

export default instance