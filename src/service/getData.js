import fetch from '../config/fetch'

/**
 * 获取首页默认地址
 */
export const getUserInfo = () => fetch('/admin', {}, 'GET')

/**
 * 获取'猜你喜欢'数据
 */
export const getGuessLike = () => fetch('/guessLike', {}, 'GET')

/**
 * 获取'推荐'数据
 */
export const getRecommend = () => fetch('/recommend', {}, 'GET')

/**
 * 登陆
 */
export const login = (account, password) => fetch('/login', {
  account,
  password
}, 'POST')

/**
 * 注册
 */
export const regist = (account, password, phoneNumber) => fetch('/regist', {
  account,
  password,
  phoneNumber
}, 'POST')
