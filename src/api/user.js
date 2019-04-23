import axios from './index'

export const getUserInfo = ({ userId }) => {
  return axios.request({
    url: '/index/getUserInfo',
    method: 'post',
    data: {
      userId
    }
  })
}
