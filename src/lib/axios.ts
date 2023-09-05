/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"

import { API_CONFIG, REFRESH_TOKEN_KEY, TOKEN_KEY } from "@/configs"
import { appLocalStorage } from "@/services/AppLocalStorage"

export const getOptions = (options: any) => {
  const opts = {
    headers: {
      "Content-Type": "application/json"
    },
    ...options
  }

  const token = appLocalStorage.getItem(TOKEN_KEY)
  if (token) {
    opts.headers.Authorization = "Bearer " + token
  }

  return opts
}

export const GET = (path: string, params: any, options = { isFullPath: false }) => {
  const _params = params
    ? Object.keys(params)
        .map((key) => {
          let valueParam = params[key]
          let adjustParam = ""
          if (Array.isArray(valueParam)) {
            // TODO with "all" value;
            adjustParam = valueParam
              .map((paramDetail) => `${key}=${encodeURIComponent(paramDetail != "all" ? paramDetail : "")}`)
              .join("&")
          } else {
            // TODO with "all" value;
            valueParam = valueParam != "all" ? valueParam : ""
            adjustParam = `${key}=${encodeURIComponent(valueParam)}`
          }
          return adjustParam
        })
        .join("&")
    : ""

  const _url = (options.isFullPath ? path : API_CONFIG.BASE_API + path) + (_params === "" ? "" : "?" + _params)

  const _options = getOptions(options)
  _options.urlPath = path

  return axios.get(_url, _options).then((response) => response.data)
}

export const POST = (path: string, params: any, options = { isFullPath: false }) => {
  const _url = options.isFullPath ? path : API_CONFIG.BASE_API + path
  const _options = getOptions(options)
  _options.urlPath = path

  return axios.post(_url, params, _options).then((response) => response.data)
}

export const PUT = (path: string, params: any, options = { isFullPath: false }) => {
  const _url = options.isFullPath ? path : API_CONFIG.BASE_API + path
  const _options = getOptions(options)
  _options.urlPath = path

  return axios.put(_url, params, _options).then((response) => response.data)
}

export const PATCH = (path: string, params: any, options = { isFullPath: false }) => {
  const _url = options.isFullPath ? path : API_CONFIG.BASE_API + path
  const _options = getOptions(options)
  _options.urlPath = path

  return axios.patch(_url, params, _options).then((response) => response.data)
}

export const DELETE = (path: string, params: any, options = { isFullPath: false }) => {
  const _url = options.isFullPath ? path : API_CONFIG.BASE_API + path
  const _options = getOptions(options)
  _options.urlPath = path

  // delete with params;
  if (params) {
    _options.data = params
  }

  return axios.delete(_url, _options).then((response) => response.data)
}

export const UPLOAD = (path: string, files: Blob | File, options: any, onProgress = () => {}) => {
  const _url = options.isFullPath ? path : API_CONFIG.BASE_API + path

  const _form = new FormData()
  _form.append("type", files.type)
  _form.append("files", files)

  const _options = getOptions(options)
  _options.headers["Content-Type"] = "multipart/form-data"
  _options.onUploadProgress = onProgress
  _options.urlPath = path

  return axios.post(_url, _form, _options).then((response) => response.data)
}

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response
  },
  async function (err) {
    const originalConfig = err.config
    if (originalConfig.urlPath !== "/account/login" && err.response) {
      if (err.response.status === 401 && !originalConfig._retry && appLocalStorage.getItem(REFRESH_TOKEN_KEY)) {
        originalConfig._retry = true
        try {
          const rs = await axios.post(API_CONFIG.BASE_API + "/account/access-token", {
            refresh_token: appLocalStorage.getItem(REFRESH_TOKEN_KEY)
          })
          if (rs.data?.access_token) appLocalStorage.setItem(TOKEN_KEY, rs.data?.access_token)
          if (rs.data?.refresh_token) appLocalStorage.setItem(REFRESH_TOKEN_KEY, rs.data?.refresh_token)

          originalConfig.headers.Authorization = "Bearer " + rs.data?.access_token
          return await axios(originalConfig)
        } catch (_err) {
          return Promise.reject(_err)
        }
      }
    }
    if (err?.response?.data) {
      return Promise.reject(err.response.data)
    }
    return Promise.reject(err)
  }
)
