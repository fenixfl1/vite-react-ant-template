import axios, { AxiosError } from 'axios'
import { BASE_API_PATH } from 'src/constants/routes'
import { getSessionToken } from 'src/lib/session'

export interface ApiResponse<T> {
  data: {
    status?: 'success' | 'error'
    data: T
    message?: string
  }
  error: AxiosError
}

export const api = axios.create({
  baseURL: BASE_API_PATH,
  headers: {
    'Content-Type': 'application/json',
    Authorization: getSessionToken(),
  },
})

export const postRequest = async <T, TData = unknown>(
  url: string,
  data: TData
): Promise<ApiResponse<T>> => {
  return api.post(url, data)
}

export const putRequest = async <T, TData = unknown>(
  url: string,
  data: TData
): Promise<ApiResponse<T>> => {
  return api.put(url, data)
}

export const getRequest = async <T>(url: string): Promise<ApiResponse<T>> => {
  return api.get(url)
}
