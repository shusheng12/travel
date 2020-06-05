<template>
  <div>
    <foods-key :goods="goods" />
    <foods-list :goods="goods" />

    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{head:this.$store.state.cartFoods!=0}">
            <van-icon name="shopping-cart-o" size="2rem" class="ic" @click="showcart" />
          </div>
          <div
            class="num"
            v-show="this.$store.state.cartFoods.length!=0"
          >{{this.$store.state.cartFoods.length}}</div>
        </div>
        <div>
          <div class="price">￥{{total}}</div>
          <div class="desc">另需配送费￥{{info.deliveryPrice}}元</div>
        </div>
      </div>

      <div class="content-right">
        <div class="pay" v-if="total==0">￥{{info.minPrice}}起送</div>
        <div class="pay cha" v-else-if="total<20">￥还差{{20-total}}起送</div>
        <div class="pay jie" v-else>结算</div>
      </div>
    </div>

    <van-popup v-model="show" position="bottom" :style="{ height:'55%'}">
      <div class="cart_title">
        <div>购物车</div>
        <div @click="clear">清空</div>
      </div>

      <scroll ref="cartlist" class="wrapper">
        <div class="shop-header-discounts list" v-for="(i,index) of cart" :key="index">
          <div class="btn">
            <div>{{i.name}}</div>
            <div class="btn2">
              <div>￥{{i.price}}</div>
              <div class="num1">x</div>
              <div class="num1">{{i.num}}</div>
            </div>
          </div>
        </div>
      </scroll>

      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{head:this.$store.state.cartFoods!=0}">
              <van-icon name="shopping-cart-o" size="2rem" class="ic" @click="showcart" />
            </div>
            <div
              class="num"
              v-show="this.$store.state.cartFoods.length!=0"
            >{{this.$store.state.cartFoods.length}}</div>
          </div>
          <div>
            <div class="price">￥{{total}}</div>
            <div class="desc">另需配送费￥{{info.deliveryPrice}}元</div>
          </div>
        </div>

        <div class="content-right">
          <div class="pay" v-if="total==0">￥{{info.minPrice}}起送</div>
          <div class="pay" v-else-if="total<20">￥还差{{20-total}}起送</div>
          <div class="pay" v-else>结算</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import foodsKey from "./foodsKey";
import foodsList from "./foodsList";
import { gethomedata1 } from "@/network/gethomedata";
import scroll from "@/components/common/scroll/Scroll";

import { Dialog } from "vant";
export default {
  components: {
    foodsKey,
    foodsList,
    scroll
  },
  data() {
    return {
      goods: [],
      info: {},
      show: false,
      scroll: null
    };
  },
  created() {
    gethomedata1().then(res => {
      this.goods = res.data.goods;
      this.info = res.data.info;
    });
  },
  methods: {
    showcart() {
      if (this.$store.state.cartFoods == 0) {
        return;
      }
      this.show = !this.show;
    },
    clear() {
      Dialog.confirm({
        title: "消息",
        message: "是否清空购物车"
      })
        .then(() => {
          this.$bus.$emit("clear");
          this.$store.commit("clear");
          this.show = !this.show;
        })
        .catch(() => {
          // on cancel
        });
    }
  },
  computed: {
    cart() {
      return this.$store.state.cartFoods;
    },
    total() {
      let a = 0;
      this.$store.state.cartFoods.forEach(item => {
        a += item.num * item.price;
      });
      return a;
    }
  },
  watch: {
    cart() {
      if (this.show) {
        this.$nextTick(() => {
          // 实现BScroll的实例是一个单例
          if (!this.scroll) {
            this.scroll = new BScroll(".list-content", {
              click: true
            });
          } else {
            this.scroll.refresh(); // 让滚动条刷新一下: 重新统计内容的高度
          }
        })
      }
    }
  }
};
</script>

<style scoped>
.content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #141d27;
  color: #fff;
}
.content-right {
  width: 30%;
  line-height: 3rem;
  background-color: #2b333b;
  text-align: center;
}
.content-left {
  flex: 1;
  display: flex;
}
.logo-wrapper {
  width: 25%;
  text-align: center;
  color: #72777d;
  position: relative;
}
.price {
  margin: 0.2rem 0;
}
.desc {
  color: #72777d;
  font-size: 0.6rem;
}
.logo {
  background-color: #2b343c;
  border-radius: 50%;
  height: 2.8rem;
  width: 2.8rem;
  line-height: 3rem;
}
.ic {
  margin-top: 0.5rem;
}
.num {
  position: absolute;
  top: 0;
  padding: 0.3rem 0;
  right: 0.5rem;
  color: #fff;
  background-color: red;
  font-size: 0.4rem;
  width: 1.5rem;
  text-align: center;
  border-radius: 0.5rem;
}
.cart_title {
  display: flex;
  justify-content: space-between;
  background-color: #f3f5f7;
  border-bottom: 0.1rem solid #dbdee1;
  height: 2rem;
  line-height: 2rem;
  padding: 0 2rem;
  font-size: 0.86rem;
}
.cart_title :nth-child(2) {
  color: #00a0dc;
}
.btn {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  right: 2rem;
  height: 2rem;
  line-height: 2rem;
}
.btn2 {
  display: flex;
  justify-content: flex-end;
  padding: 0 1rem;
  right: 2rem;
}
.btn2 :nth-child(1) {
  color: red;
}
.num1 {
  width: 1rem;
  text-align: center;
  color: #9da2a8;
  line-height: 2rem;
}

.cha {
  color: #7a7a7c;
}
.jie {
  background-color: #07da00;
}
.head {
  background-color: #02a774;
  color: #fff;
}

.wrapper {
  position: absolute;
  top: 2rem;
  bottom: 3rem;
  left: 0;
  right: 0;

}
</style>