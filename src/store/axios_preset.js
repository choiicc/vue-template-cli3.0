/* eslint-disable */
import axios from 'axios'

// axios基本配置
var __ajax = axios.create({
    timeout: 30000
});

// 添加响应拦截器
__ajax.interceptors.response.use(
    function (res) {
        console.log('interceptors 响应拦截成功', res)
        return res;
    },
    function (error) {
        console.log('interceptors 错误拦截', error)
        return Promise.reject(error);
    }
);

/**
 * get请求
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
export const axios_get = ({ url, query }, commit) => {
    var currLang = $vue.$localStorage.get('lang');
    currLang !== 'undefined' ? currLang : currLang = $vue.$localStorage.get('defaultLang');
    let _url
    if (query) {
        _url = `/${url}?${query}&lang=${currLang}`
    } else {
        _url = `/${url}?lang=${currLang}`
    }

    return __ajax.get(_url).then(res => {
        if (res.status >= 200 && res.status < 300) {
            return res.data
        }
        console.log('get 返回码异常捕获')
        return Promise.reject(new Error(res.status))
    }).catch(error => {
        return Promise.reject(error)
    })
}

/**
 * post请求
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @param  {JSON} params POST body参数
 * @return {Promise}               Promise
 */
export const axios_post = ({ url, query }, params, commit) => {
    var currLang = $vue.$localStorage.get('lang');
    currLang !== 'undefined' ? currLang : currLang = $vue.$localStorage.get('defaultLang');
    let _url
    if (query) {
        _url = `/${url}?${query}&lang=${currLang}`
    } else {
        _url = `/${url}?lang=${currLang}`
    }
    return __ajax.post(_url, params).then(res => {
        if (res.status >= 200 && res.status < 300) {
            res = res.data;
            return res
        }
        console.log('post 返回码异常捕获', res.status)
        return Promise.reject(new Error(res.status))
    }).catch(error => {
        console.log('post err 异常捕获', error)
        return Promise.reject(error)
    })
}

export default { axios_get, axios_post }
