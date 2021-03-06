import axios from 'axios'
import {baseURL_config} from './baseURL'
const baseURL = `${baseURL_config}/api/v1`
export default function ajax (options) {
  const ajaxObj = {
    method: options.method,
    baseURL: baseURL,
    url: options.url,
    timeout: 30000,
    params: options.params,
    // params: options.params || '',
    headers: {
      'Content-type': 'application/json;charset=UTF-8'
    },
    // data: JSON.stringify(options.data || '')
    data: JSON.stringify(options.data)
  }
  return window.request ? window.request(ajaxObj) : axios(ajaxObj)
}
