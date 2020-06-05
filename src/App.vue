<template>
  <div id="app">
    <keep-alive v-if="$route.meta.keepalve">
    <router-view />
    </keep-alive>
    <router-view v-else />
    
    
<van-popup v-model="isshow">
  
  <img class="img_app" src="@/assets/qrcode_for_gh_561538acc56b_258.jpg" alt="">
   <h3 class="msg_show">喜欢我的网页吗，扫描二维码添加我的公众号和我一起学习</h3> 
</van-popup>

  </div>
</template>

<script>
export default {
  data(){
    return{
      isshow:false
    }
  },
  mounted(){
    setTimeout(()=>{
     this.isshow=true
    },50000)
  }
}
</script>

<style>

.img_app{
  width: 100%;
  height: 100%;
}

</style>
