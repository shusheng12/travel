<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <h4 class="msg">配送信息</h4>
      <div class="msg_1">
        <span>番职转送</span> 有商家提供配送，约28分钟送达，距离超1000米，配送费4元
      </div>
      <div class="borders"></div>

      <h4 class="msg">活动与服务</h4>

      <div class="shop-header-discounts list" v-for="(item,index) in supports" :key="index">
        <div class="discounts-left">
          <div class="activity">
            <span class="content-tag" :class="supportClasses[item.type]">
              <span class="mini-tag">{{item.name}}</span>
            </span>
            <span class="activity-content ellipsis">{{item.content}}</span>
          </div>
        </div>
        <div class="discounts-right">{{supports.length}}个优惠</div>
      </div>
      <div class="borders"></div>
  
      <h4 class="msg">商家实景</h4>
      <div class="msg_2">
        <div v-for="(item,index) in  info.pics" :key="index" class="msg_2_1">
          <img :src="item" alt @load="imgload" />
        </div>
      </div>

      <div class="borders"></div>
      <h4 class="msg">商家信息</h4>

      <div class="msg_3">
        <diV class="msg_3_1">品种</diV>
        <div class="msg_3_2">{{info.category}}</div>
      </div>
      <div class="msg_3">
        <diV class="msg_3_1">商家电话</diV>
        <div class="msg_3_2">{{info.phone}}</div>
      </div>
      <div class="msg_3">
        <diV class="msg_3_1">地址</diV>
        <div class="msg_3_2">{{info.address}}</div>
      </div>
      <div class="msg_3">
        <diV class="msg_3_1">营业时间</diV>
        <div class="msg_3_2">{{info.workTime}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import { gethomedata1 } from "@/network/gethomedata";
export default {
  data() {
    return {
      info: {},
      supports: [],
      supportClasses: ["activity-green", "activity-red", "activity-orange"]
    };
  },
  created() {
    gethomedata1().then(res => {
      this.info = res.data.info;
      this.supports = res.data.info.supports;
    });
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: 3
    });
  },
  methods: {
    imgload() {
      this.scroll.refresh();
    }
  },
  updated(){
this.scroll.refresh();
 },
  activated(){
this.scroll.refresh();
 },
};
</script>

<style scoped>
.msg_3 {
  display: flex;
  justify-content: space-between;
  height: 3rem;
  line-height: 3rem;
  border-bottom: 0.01rem solid #dcdddf;
}
.msg_3_1 {
  font-size: 0.86rem;
  margin-left: 1rem;
}
.msg_3_2 {
  color: #8c908f;
  font-size: 0.86rem;
  margin-right: 1.5rem;
}

.msg {
  margin-left: 2rem;
}
.msg_1 {
  color: #8c908f;
  padding: 0 0.5rem;
}
.msg_1 span {
  display: inline-block;
  background-color: #0498fc;
  color: #fff;
  padding: 0.2rem 0.5rem;
  border-radius: 0.3rem;
}
.borders {
  margin-top: 1rem;
  height: 1rem;
  background-color: #f4f5f7;
}

.shop-header-discounts {
  height: 15px;
  font-size: 14px;
  display: flex;
  width: 90%;
  border: 1px solid #eee;
  padding: 0.2rem;
}
.activity-green {
  background-color: #70bc46;
}
.activity-red {
  background-color: #f07373;
}
.activity-orange {
  background-color: #f1884f;
}
.msg_2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.msg_2_1 {
  width: 31%;
  height: 80px;
  overflow: hidden;
  margin: 0.4rem 0.2rem;
}

.msg_2_1 img {
  width: 100%;
}
.wrapper {
  position: absolute;
  top: 14rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>