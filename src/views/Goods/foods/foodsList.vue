<template>
  <div class="goodlist" ref="goodlist">
    <div>
      <div v-for="(item,index) of goods" :key="index">
        <div class="list_key" :ref="item.name">{{item.name}}</div>

        <div v-for="(item1,index1) of item.foods" :key="index1" class="foods_item">
          <div class="img_icon">
            <img :src="item1.image" class="icon_img" alt />
          </div>
          <div class="foods_list">
            <div>{{item1.name}}</div>
            <div class="icon_color msg">{{item1.description}}</div>
            <div class="icon_color">月售{{item1.sellCount}}份 好评率{{item1.rating}}%</div>
            <div class="price">￥{{item1.price}}</div>
            <div class="btn">
              <transition name="fade">
                <div class="btn1" v-show="item1.num!=0" @click="pop(item1,index,index1)">-</div>
                </transition>
                <transition name="fade">
                <div class="num" v-show="item1.num!=0">{{item1.num}}</div>
              </transition>
              <div class="btn1" @click="add(item1,index,index1)">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
export default {
  props: {
    goods: Array
  },
  data() {
    return {
      isshow: true,
      num: 0
    };
  },
  created() {
    this.$bus.$on("changekey", data => {
      const msg = this.$refs[data][0];
      console.log(msg.offsetWidth);

      this.scroll.scrollToElement(msg, 1500);
    });
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.goodlist, {
      click: true,
      probeType: 3
    });
  },
  updated() {
    this.scroll.refresh();
    this.$bus.$on("clear", res => {
      this.goods.forEach(i => {
        i.foods.forEach(it => {
          it.num = 0;
        });
      });
    });
  },
  methods: {
    add(i, index, index1) {
      this.goods[index].foods[index1].num++;
      const food = {
        name: i.name,
        price: i.price,
        num: i.num
      };
      this.$store.commit("addfoods", food);
    },
    pop(i, index, index1) {
      this.goods[index].foods[index1].num--;
      const food = {
        name: i.name
      };
      this.$store.commit("popfoods", food);
    }
  }
};
</script>
<style  scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s; 
  
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
 transform: translate(100%);
}

.goodlist {
  position: absolute;
  top: 14rem;
  left: 5rem;
  right: 0;
  bottom: 3rem;
  overflow: hidden;
}
.list_key {
  background-color: #f4f5f7;
  padding-left: 0.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  color: #a1a2a4;
  border-left: 0.2rem solid #dddee0;
}
.foods_item {
  display: flex;
  font-size: 0.86rem;
}
.icon_color {
  color: #a1a2a4;
  font-size: 0.8rem;
}
.price {
  color: rgb(245, 16, 16);
}
.icon_img {
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.2rem;
}
.img_icon {
  width: 25%;
}
.foods_list {
  flex: 1;
  padding-left: 1rem;
  margin-top: 0.5rem;
  position: relative;
}
.msg {
  height: 0.8rem;
  overflow: hidden;
}
.btn {
  display: flex;
  justify-content: flex-end;
  padding: 0 0.1rem;
  position: absolute;
  right: 1rem;
  bottom: 0;
}
.num {
  width: 2rem;
  text-align: center;
  color: #9da2a8;
  line-height: 1rem;
}
.btn1 {
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.8rem;
  text-align: center;
  background-color: #02a774;
  color: #fff;
  border-radius: 50%;
}
</style>