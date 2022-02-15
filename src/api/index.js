import axios from 'axios'
import { SEARCH_API_BASE_URL, LOGIN_TOKEN } from '../config'
import { mockData } from './mock/data'

axios.defaults.baseURL = SEARCH_API_BASE_URL

const searchApi = async (keyword) =>
  await axios.post('/keyword_search', {
    login_token: LOGIN_TOKEN,
    search_phrase: keyword,
  })

const searchApiMock = async (keyword) =>
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (keyword) {
        if(keyword === 'hat'){
          resolve(mockData)
        }else{
          resolve({
            product_trends:[]
          })
        }
      } else {
        reject('Please input search keyword!')
      }
    }, 3000)
  })

const search = process.env.REACT_APP_ENV === 'mock' ? searchApiMock : searchApi

export const API = {
  search
}
