import {request} from './request'
export function getdetaildata() {
return request({
    url:'/static/detail.json'
})
}