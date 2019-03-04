import request from '../request.js'
import qs from 'qs'


//左上屏
export function getLeftTopData() {
  return request({
    url: '/datapot-screen/screen/lftUpScreen',
    method: 'GET',
    data: ''
  })
}

//左中屏
export function getLeftCenterData() {
  return request({
    url: '/datapot-screen/screen/lftMidScreen',
    method: 'GET',
    data: ''
  })
}

//左下屏
export function getLeftBottomData() {
  return request({
    url: '/datapot-screen/screen/lftDownScreen',
    method: 'GET',
    data: ''
  })
}

//中上屏
export function getCenterTopData() {
  return request({
    url: '/datapot-screen/screen/midUpScreen',
    method: 'GET',
    data: ''
  })
}

//中右屏
export function getCenterRightData() {
  return request({
    url: '/datapot-screen/screen/midRgtScreen',
    method: 'GET',
    data: ''
  })
}

//中左屏
export function getCenterLeftData() {
  return request({
    url: '/datapot-screen/screen/midLftScreen',
    method: 'GET',
    data: ''
  })
}

//右上屏
export function getRightTopData() {
  return request({
    url: '/datapot-screen/screen/rgtUpScreen',
    method: 'GET',
    data: ''
  })
}

//右中屏
export function getRightCenterData() {
  return request({
    url: '/datapot-screen/screen/rgtMidScreen',
    method: 'GET',
    data: ''
  })
}

