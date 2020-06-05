import {request} from './request'
export function getcitydata() {
return request({
    url:'/static/city.json'
})
}