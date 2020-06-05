<template>
  <div>
    <div class="shop-nav" :style="{backgroundImage: `url(${info.bgImg})`}">
      <a class="back" @click="to">
        <i class="iconfont back-icon">&#xe624;</i>
      </a>
    </div>

    <div class="shop-content">
      <img class="content-image" :src="info.avatar" />
      <div class="header-content">
        <h3 @click="isshow=!isshow">
          <span class="content-tag">
            <span class="mini-tag">品牌</span>
          </span>
          <span class="content-name">{{info.name}}</span>
          <span class="icon">
            <van-icon name="play" size="1rem" />
          </span>
        </h3>
        <div class="shop-message">
          <span>{{info.score}}</span>
          <span>月售{{info.sellCount}}单</span>
          <span>
            <span>专送</span>
            <span>约{{info.deliveryTime}}分钟</span>
          </span>
          <span>距离{{info.distance}}</span>
        </div>
      </div>
    </div>

    <div class="shop-header-discounts" @click="show=!show">
      <div class="discounts-left">
        <div class="activity">
          <span class="content-tag" :class="supportClasses[sup.type]">
            <span class="mini-tag">{{sup.name}}</span>
          </span>
          <span class="activity-content ellipsis">{{sup.content}}</span>
        </div>
      </div>
      <div class="discounts-right">
        {{supports.length}}个优惠
        <van-icon name="arrow-down" />
      </div>
    </div>

    <div class="router_nav">
      <div :class="{ative:ative===0}" @click="ative=0">
        <router-link tag="span" to="/Goods/Foods">点餐</router-link>
      </div>
      <div :class="{ative:ative===1}" @click="ative=1">
        <router-link tag="span" to="/Goods/ShopRatings">评价</router-link>
      </div>
      <div :class="{ative:ative===2}" @click="ative=2">
        <router-link tag="span" to="/Goods/Shopinfo">商家</router-link>
      </div>
    </div> 

    <van-popup v-model="show" closeable position="bottom" :style="{ height: '40%' }">
      <h4>优惠活动</h4>

      <div class="shop-header-discounts list" v-for="(item,index) in  supports" :key="index">
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
    </van-popup>

    <van-dialog v-model="isshow">
      <h3 slot="title">
        <span class="content-tag">
          <span class="mini-tag">品牌</span>
        </span>
        <span class="content-name">{{info.name}}</span>
      </h3>

      <div class="shop-message1">
        <div class="fl">
          <span>{{info.score}}</span>
          <span>评分</span>
        </div>
        <div class="fl">
          <span>{{info.sellCount}}单</span>
          <span>月售</span>
        </div>

        <div class="fl">
          <span>专送</span>
          <span>约{{info.deliveryTime}}分钟</span>
        </div>
        <div class="fl">
          <span>4元</span>
          <span>配送费用</span>
        </div>

        <div class="fl">
          <span>{{info.distance}}</span>
          <span>距离</span>
        </div>
      </div>

      <div class="alert">公告</div>
      <div class="alert_down">{{info.bulletin}}</div>
    </van-dialog>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object
    },
    supports: {
      type: Array,
      default: []
    },
    sup: {
      type: Object,
      default: {
        name: "",
        content: "",
        type: 0
      }
    }
  },

  data() {
    return {
      show: false,
      isshow: false,
      supportClasses: ["activity-green", "activity-red", "activity-orange"],
      ative: 0
    };
  },
  methods: {
    to() {
      this.$router.push('/home');
    }
  },activated(){
    this.ative=0
  }
};
</script>
<style scoped>
.shop-nav {
  background-size: cover;
  background-repeat: no-repeat;
  height: 40px;
  padding: 5px 10px;
  position: relative;
  background-color: rgba(122, 88, 161, 0.43);
}
.back {
  position: absolute;
  top: 10px;
  left: 0;
}

.back-icon {
  display: block;
  padding: 5px;
  font-size: 20px;
  color: #fff;
}
.content-image {
  position: absolute;
  top: 0;
  left: 50%;
  width: 66px;
  height: 66px;
  border-radius: 2px;
  margin-left: -33px;
  margin-top: 20px;
}
.header-content {
  margin-top: 2.5rem;
  text-align: center;
}

.content-tag {
  background-color: #ffe433;
  border-radius: 0.2rem;
  margin-right: 0.5rem;
}
.mini-tag {
  padding: 0 0.6rem;
}
.shop-message {
  width: 80%;
  margin-left: 10%;
  margin-bottom: 0.5rem;
  display: flex;
  height: 12px;
  font-size: 11px;
  color: #333;
  justify-content: space-around;
}
.shop-message1 {
  display: flex;

  justify-content: space-evenly;
}
.fl {
  display: flex;
  flex-direction: column;
  justify-items: center;
  text-align: center;
}
.fl :nth-child(2) {
  color: #b0b0b0;
}
.alert {
  text-align: center;
  color: #b0b0b0;
  margin: 0.5rem 0;
}
.alert_down {
  color: #4c4c4c;
  padding: 0 0.6rem 0.5rem;
}

.shop-header-discounts {
  height: 12px;
  font-size: 11px;
  display: flex;
  width: 90%;
  margin-left: 0.5rem;
  border: 1px solid #eee;
  justify-content: space-around;
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
.content-name {
  padding: 0 0.1rem;
}
.icon {
  line-height: 25px;
}
.list {
  display: flex;
  text-align: left;
  border: 0;
  justify-content: left;
}
.router_nav {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  color: #909493;
  height:2.1rem;
  border-bottom: .01rem solid #dcdddf;
  
}
.ative {
  color: #07a471;
  border-bottom: 0.1rem solid #07a471;
}
</style>