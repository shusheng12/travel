<template>
  <div>
    <nav-bar color="#00bcd5">
      <div class="iconfont back-icon" slot="left" @click="tohome">&#xe624;</div>
      <div class="city_header" slot="center">城市选择</div>
    </nav-bar>

    <van-search shape="round" v-model="keyword" background="#00bcd5" placeholder="请输入搜索关键词" />

    <search-better-scroll v-show="keyword" class="wrapper">
        <div>
          <div class="cities_item" v-for="(item,index) in list" :key="index" @click="changecity(item.name)">{{item.name}}</div>
          <div v-show="!list.length">没有搜索结果</div>
        </div>
    </search-better-scroll>

  </div>
</template>

<script>
import navBar from "@/components/common/navbar/nav_bar";
import searchBetterScroll from "@/components/common/scroll/Scroll";
export default {
  name: "",
  components: {
    navBar,
    searchBetterScroll
  },
  props: {
    cities: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      keyword: "",
      list: []
    };
  },
  methods: {
    tohome() {
      this.$router.go(-1);
    },
     changecity(city){
       this.$notify({ type: 'success', message: '城市修改成功',duration:750 });
      this.$store.commit('changecity',city)
    }
    
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  }
};
</script>

<style scoped>
.city_header {
  text-align: center;
  line-height: 2.75rem;
  color: #fff;
}

.cities_item {
  height: 1.8rem;
  line-height: 1.8rem;
  padding-left: 1rem;
  border-bottom: 0.01rem solid #ccc;
}

.wrapper{
 z-index: 10;
  overflow: hidden;
  position: absolute;
  top: 6rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
}
</style>
