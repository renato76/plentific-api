/* eslint-disable comma-dangle */
import axios from 'axios'

const baseUrl = 'https://demo.plentific.com/uk/find-a-pro/api/v2/public/pro/search-pros/'

export const getAllCategories = () => {
  return axios.get('https://d3p0y7b1b87cj.cloudfront.net/production-plentific-static/api-cache/find-a-pro/api/v1/categories/all.json')
}

export const getAllPros = (formData) => {
  const withHeaders = { 
    headers: { 
      'x-pagination-count': null,
      'x-pagination-limit': '200', 
      'x-pagination-offset': '0' },
  }
  return axios.post(`${baseUrl}`, formData, withHeaders)
}

