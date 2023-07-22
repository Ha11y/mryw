import request from '../utils/http/index.js'

export const getMryw= ()=>{
    return request({
        url:'/article/today?dev=1'
    })
}
export const getRandom=()=>{
    return request({
        url:'/article/random?dev=1' 
    })
}

