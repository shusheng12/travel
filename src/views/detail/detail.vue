<template>
  <div>
   <banner :banner='banner' :sightName='sightName' :gallaryImgs='gallaryImgs'></banner>

   <div> <div class="iconfont back-icon" slot="left" @click="gohome">&#xe624;</div></div>

   <div v-for="(i,index) of categoryList" :key="index" class="categorylist"> 
      <van-icon name="gold-coin" color="#0dbc79" />
     {{i.title}}
     </div>
    
  </div>
</template>

<script>
import {getdetaildata} from '@/network/getdetaildata'

import Banner from './banner'
export default {
  name: 'detail',
  components:{
  Banner
  },
  data(){
    return{
    banner:'',
    sightName:'',
    gallaryImgs:[],
    categoryList:[]
    }
  },
  created(){
    getdetaildata().then(res=>{
      this.banner=res.data.data.bannerImg
      this.sightName=res.data.data.sightName
      this.gallaryImgs=res.data.data.gallaryImgs
      this.categoryList=res.data.data.categoryList
      
    })
  },
  methods:{
    gohome(){
      this.$router.go(-1)
    }
  }

}
</script>

<style scoped>
.back-icon{
  position:absolute;
  left:.5rem;
  top: .5rem;
  z-index: 3;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  text-align: center;
  line-height: 2rem;
}
.categorylist{
 
padding: .5rem;
font-weight: 600;
border-bottom:.01rem solid #000 ;

}
</style>
