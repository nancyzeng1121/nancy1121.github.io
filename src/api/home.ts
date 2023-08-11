/**
 * 获取首页列表
 */
import http from "../utils/http";

const getArticleList = (url: string) =>{
  return new Promise((resolve, reject) => {
    http("get", url).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  })
}

export {
  getArticleList
}
