/* eslint-disable comma-dangle */
import axios from 'axios'

const baseUrl = 'https://demo.plentific.com/uk/find-a-pro/api/v2/public/pro/search-pros/'



export const searchForPros = (formData) => {
  const withHeaders = { 
    headers: { 
      'x-pagination-limit': '10', 
      'x-pagination-offset': '0' },
  }
  return axios.post(`${baseUrl}`, formData, withHeaders)
}

