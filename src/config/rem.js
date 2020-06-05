

(function(){
// 设置 rem 函数
function setRem () {

    const baseSize = 50
    const clientWidth=750
    const  width=window.innerWidth

     const clientsize=(width/clientWidth)*32

     document.querySelector('html').style.fontSize =clientsize + 'px'


}


  window.onresize = function () {
  setRem()
} 

document.addEventListener('DOMContentLoaded',setRem)


}())