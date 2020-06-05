<template>
  <div>
    <van-swipe :show-indicators="false">
      <van-swipe-item v-for="(item,index) in pages" :key="index">
        <div class="grid">
          <van-grid :border="false" >
            <van-grid-item v-for="(item,index) in item" :key="index" class="icons">
              <img :src="item.imgUrl" />
              <div>{{item.desc}}</div>
            </van-grid-item>
          </van-grid>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "icons",
  props: {
    icons: {
      type: Array,
      default: []
    }
  },
  computed: {
    pages() {
      const pages = [];
      this.icons.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  },
  methods: {
    
  }
};
</script>

<style scoped>
.icons img {
  width: 100%;
}
.grid {
  height: 0;
  padding-bottom: 65%;
}
</style>
