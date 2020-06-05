import {request} from './request'
export function gethomedata() {
return request({
    url:'/static/index.json'
})
}

export function gethomedata1() {
    return request({
        url:'/static/data.json'
    })
    }
