<template>
  <div >
   <div class="weekend_title">周末去哪儿</div>
   <div v-for="item of weekendList" :key="item.id">
   <div class="weekend_img">
     <img :src="item.imgUrl" alt="">
   </div>
   <div class="we_title">
     {{item.title}}
   </div>
   <div class="we_desc">
     {{item.desc}}
   </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'homeWeekend',
  props:{
    weekendList:{
      type:Array,
      default:[]
    }
  }
 
}
</script>

<style scoped>
.weekend_title{
background-color: #eeeeee;
height:2rem;
line-height:2rem;
padding-left:1rem;
margin:.5rem 0;
}
.weekend_img{
   overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;
}
.weekend_img img{
  width: 100%;
}
.we_title{
  padding-left:.5rem;
  font-weight: 600;
}
.we_desc{
  color: #d2d2d2;
  margin-bottom:.5rem;
}
</style>
