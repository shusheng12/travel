const obj={}
import Vue from 'vue'
import toast from './toast.vue'

obj.install=function (){ 
    const newtoast= Vue.extend(toast)
    const Toast =new  newtoast()
    Toast.$mount(document.createElement('div'))
    document.body.appendChild(Toast.$el)  
   // console.log(Toast.$el);
    Vue.prototype.$toast=Toast   
}


export default obj