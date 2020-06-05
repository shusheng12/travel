<template>
  <div >
  <van-swipe  :autoplay="3000">
  <van-swipe-item v-for="(item,index) in homeswiper" :key="index" class="my-swipe">
    <img :src="item.imgUrl" alt="">
  </van-swipe-item>

</van-swipe>
   
  </div>
</template>

<script>
export default {
  name: 'swiper',
  props:{
    homeswiper:{
      type:Array,
      default:[]
    }
  }
  
}
</script>

<style scoped>
.my-swipe {
width: 100%;
overflow: hidden;
}
.my-swipe img{
  width: 100%;   
}

</style>
