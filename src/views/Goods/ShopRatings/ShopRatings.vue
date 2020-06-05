<template>
<div>
  <div class="wrapper" ref="wrapper">
    <div>
      <div class="score">
        <div class="sc_1">
          <div>{{info.score}}</div>
          <div>综合评分</div>
          <div>高于周边99%商家</div>
        </div>
        <div class="sc_2">
          <div class="sc_2_1">
            <img src="@/assets/star36_on@3x.png" alt />
            <img src="@/assets/star36_on@3x.png" alt />
            <img src="@/assets/star36_on@3x.png" alt />
            <img src="@/assets/star36_on@3x.png" alt />
            <img src="@/assets/star36_off@2x.png" alt />
            服务态度
            <span class="co">{{info.serviceScore}}</span>
          </div>
          <div class="sc_2_1">
            <img src="@/assets/star36_on@3x.png" alt />
            <img src="@/assets/star36_on@3x.png" alt />
            <img src="@/assets/star36_on@3x.png" alt />
            <img src="@/assets/star36_on@3x.png" alt />
            <img src="@/assets/star36_off@2x.png" alt />
            商品评分
            <span class="co">{{info.foodScore}}</span>
          </div>
          <div class="sc_2_2">
            送达时间：
            <span class="timer">{{info.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>

      <div class="borders"></div>

       

      <div class="rating" ref="aaa" >
        <div class="ratingss" @click="all" :class="{ative:ativeindex==0}">全部{{ratings.length}}</div>
        <div class="ratingss" @click="full" :class="{ative:ativeindex==1}">满意{{ratings.length}}</div>
        <div class="ratingss" @click="unfull" :class="{ative:ativeindex==2}">不满意0</div>
      </div>

      <div>
        <div v-for="(item,index)  of list" :key="index">
          <div class="ratings">
            <div class="img">
              <div>
                <img class="img1" :src="item.avatar" alt />
              </div>
            </div>
            <div class="img_right">
              <div class="img_right_1">{{item.username}}</div>
              <div class="img_right_1">商品评分：{{item.score}}</div>
              <div class="img_right_3">{{item.text}}</div>
              <div class="img_right_4">
                <div v-for="(item1,index)  of item.recommend" :key="index">
                  <van-tag plain type="warning">{{item1}}</van-tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<div class="rating pos" v-show="isshow" >
        <div class="ratingss" @click="all" :class="{ative:ativeindex==0}">全部{{ratings.length}}</div>
        <div class="ratingss" @click="full" :class="{ative:ativeindex==1}">满意{{ratings.length}}</div>
        <div class="ratingss" @click="unfull" :class="{ative:ativeindex==2}">不满意0</div>
      </div>

</div>
</template>

<script>
import BScroll from '@better-scroll/core'
import { gethomedata1 } from "@/network/gethomedata";
import Vue from "vue";
import { Tag } from "vant";
Vue.use(Tag);


export default {
  data() {
    return {
      info: {},
      ratings: [],
      list: [],
      ativeindex: 0,
      scroll:null,
      isshow:false
    };
  },
  created() {
    gethomedata1().then(res => {
      this.info = res.data.info;
      this.ratings = res.data.ratings;
      this.list = res.data.ratings;
    });
  },
  mounted(){
    this.scroll=new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:3
    }) 

 

    this.scroll.on('scroll',pos=>{
      const a=-pos.y-13 
        if(a>this.$refs.aaa.offsetTop) {
            this.isshow=true
        }
        else{
      this.isshow=false
        }
    })   
        
 },

 updated(){
this.scroll.refresh();
 },
  activated(){
console.log('bbbx');
 },
  methods: {
    all() {
      this.ativeindex = 0;
      this.list = this.ratings;
    },
    full() {
      this.ativeindex = 1;
      this.list = this.ratings;
    },
    unfull() {
      this.ativeindex = 2;
      this.list = [];
    }
  },
  activated() {
    this.ativeindex = 0;
  }
};
</script>
<style  scoped>
.ative {
  background-color: #04a875;
  color: #fff;
}
.rating {
  display: flex;
}

.ratings {
  display: flex;
  height: 7.2rem;
}

.img {
  width: 15%;
}
.img div {
  margin: 0.5rem 0.5rem;
  float: right;
  border-radius: 50%;
  overflow: hidden;
  width: 2rem;
  height: 2rem;
}
.img1 {
  width: 100%;
}
.img_right {
  flex: 1;
  overflow: hidden;
}
.img_right_4 {
  display: flex;
  flex-wrap: wrap;
}
.img_right_4 div {
  margin:0.1rem;
}
.img_right_1 {
  color: #c3c4c6;
}

.ratingss {
  background-color: #dadcdb;
  height: 2rem;
  width: 4rem;
  line-height: 2rem;
  border-radius: 0.2rem;
  text-align: center;
  margin: 1rem 0.5rem;
  font-size: 0.86rem;
}

.score {
  display: flex;
  margin: 1rem 0;
  height: 7rem;
  overflow: hidden;
}
.sc_1 {
  width: 20%;
  padding: 2rem;
  text-align: center;
}
.sc_1 :nth-child(1) {
  color: #ffe433;
  font-size: 1.5rem;
}
.sc_1 :nth-child(3) {
  color: #dcdddf;
  font-size: 0.6rem;
}
.sc_2 {
  flex: 1;
  padding: 2rem;
  text-align: center;
}
.sc_2_1 img {
  width: 1rem;
}
.sc_2_1 .co {
  color: #ffe433;
}
.sc_2_2 {
  margin-top: 1rem;
  text-align: left;
}
.timer {
  color: #dcdddf;
}

.borders {
  height: 1rem;
  background-color: #f4f5f7;
}
.ative {
  background-color: #04a875;
  color: #fff;
  z-index: 100;
}
.wrapper{
    position: absolute;
    top:14rem;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}
.pos{
    position: absolute;
    top:14rem;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 1;
}
</style>