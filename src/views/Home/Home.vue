<template>
  <div class="home">
    <home-header></home-header>

  <home-better-scroll @getpos='pos' class="wrapper" >
    <home-swiper :homeswiper='homeswiper'></home-swiper>
    <icons :icons='icons'></icons>
    <home-recommend :recommendList='recommendList'></home-recommend>
    <home-weekend :weekendList='weekendList'></home-weekend>
</home-better-scroll>

 <div class="foods" v-show="show" @click="togoods" >
   点餐 
 </div>
  </div>
</template>

<script>
import homeHeader from './header';
import homeSwiper from './swiper';
import icons from './icons';
import homeRecommend from './homeRecommend'
import homeWeekend from './homeWeekend' 
import homeBetterScroll from '@/components/common/scroll/Scroll'

import { gethomedata,gethomedata1 } from "@/network/gethomedata";
export default {
  name: "Home",
  components: {
    homeHeader,
    homeSwiper,
    icons,
    homeRecommend,
    homeWeekend,
    homeBetterScroll
  },
  data(){
   return{
     homeswiper:[],
     icons:[],
     recommendList:[],
     weekendList:[],
     show:false,
   }
  },
  mounted(){
    //console.log(1111111111);
    
    gethomedata().then(res=>{
      this.homeswiper=res.data.data.swiperList
      this.icons=res.data.data.iconList
      this.recommendList=res.data.data.recommendList
      this.weekendList=res.data.data.weekendList
    })
  },methods:{
    pos(position){    
      this.show=(-position.y)>500
    },
    togoods(){
      this.$router.push('/Goods') 
       //console.log(this.$toast.sun(1,2));   
    }
  }
};
</script>

<style  scoped>
.foods{
  position:absolute;
  bottom: 2rem;
  left:.5rem;
  width:3rem;
   height:2rem;
   background-color:#86dc34;
   text-align: center;
   line-height:2rem;
   border-radius:.5rem;
   }
.msg_show{
  text-align: center;
}
.wrapper {
  position: absolute;
  top: 2.7rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
