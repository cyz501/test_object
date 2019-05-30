import Cookies from 'js-cookie'

export const getTitle = (title) => {
  window.document.title = title || '页面'
}

export const setToken = (token, tokenName = 'token') => {
  Cookies.set(tokenName, token)
}

export const getToken = (tokenName = 'token') => {
  return Cookies.get(tokenName)
}
