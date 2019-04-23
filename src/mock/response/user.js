import Mock from 'mockjs'

const Random = Mock.Random

export const getUserInfo = (options) => {
  const template = {
    msg: Random.range(3, 20, 3)
  }
  return Mock.mock(template)
}
