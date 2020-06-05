<template>
  <div>
    <city-header  :cities='cities'></city-header>

<better-scroll @getpos='pos' ref="scroll" class="wrapper">
    <city-list :hotCities='hotCities' :cities='cities' ></city-list>
</better-scroll>

  <div class="icon" v-show="isshow" @click="totop"> 
    <van-icon name="arrow-up"  size="1.5rem" />
   </div>

    <city-key :cities='cities'></city-key>
  </div>
</template>

<script>
import cityHeader from "./cityHeader";
import cityList from "./cityList";
import cityKey from "./cityKey";

import betterScroll from '@/components/common/scroll/Scroll'

import {getcitydata} from '@/network/getcitydata'

export default {
  name: "city",
  components: {
    cityHeader,
    cityList,
    cityKey,
    betterScroll
  },
  data(){
    return{
    hotCities:[],
    cities:{},
    isshow:false
    }
  },
  created(){
    getcitydata().then(res=>{
      this.hotCities=res.data.data.hotCities
      this.cities=res.data.data.cities
    })
  },
 methods:{
  pos(p){
    this.isshow=(-p.y)>1500 
  },
  totop(){
  this.$refs.scroll.scroll.scrollTo(0,0,1500)
  }
 },
 computed:{
 }
};
</script>

<style scoped>
.icon{
  position:absolute;
  background-color: #00bcd5;
  right: 2rem;
  bottom: 2rem;
  width:2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  text-align: center;
  line-height: 3rem;
  z-index:8;
}

.wrapper{
position: absolute;;
top:6rem;
left: 0;
right: 0;
bottom: 0;
overflow: hidden;
}
</style>
