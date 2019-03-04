import axios from 'axios'
import { Message, MessageBox } from 'element-ui'


//接口常量定义

/*
* 大屏测试地址：192.168.10.230:8082
*/

const interConfig = {
  screen: 'http://192.168.10.230:8082' //大屏地址
}

// 创建axios实例
const service = axios.create({
  baseURL: interConfig.screen, //api的base_url process.env.BASE_API
  timeout: 60000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;

    if (res.retCode != '1') {

      if (res.msg) {
        //失败
        Message({
          message: res.msg,
          type: 'error',
          duration: 5 * 1000
        })
      }

      return Promise.reject(res)

    } else {

      //返回响应到组件
      return response.data
    }

  },
  error => {

    //错误打印
    console.log('error-------------------------------' + error);
    console.log(error);

    /*if (error) {
      error = "数据异常"
    }

    Message({
      message: error,
      type: 'error',
      duration: 5 * 1000
    })*/

    //返回错误响应到组件
    return Promise.reject(error).catch(function(reason){
        console.log('catch:', reason);
    });

  }
)

export default service
export const domain = interConfig
