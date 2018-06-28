import {axios_get, axios_post} from './axios_preset'

export default{
    fetchDemo({commit},pIn){
        let url = 'https://www.baidu.com'
        let query = `aa=23423&&bb=${pIn}`
        return axios_get({url,query}, commit).then((res)=>{
            console.log(pIn,res);
            commit('demo1','测试1')
        })
    },
    fetchDemo1({commit},pIn){
        let url = 'https://www.csdn.com'
        let query = `aa=23423&&bb=${pIn}`
        return axios_post({url, query}, {}, commit).then((res)=>{
            console.log(pIn,res);
            commit('demo2','测试2')
        })
    },
    fetchGameConfig({commit}){
        let url = 'casinoweb/merchantservice/slot/config'
        return axios_get({url}, commit).then((res)=>{
            console.log(res);
        })
    },
}