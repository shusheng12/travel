<template>
  <div>
    <div class="recommend_title">热销推荐</div>
    <router-link to='/Detail' tag="div">
      <div class="recommend" v-for="item of recommendList" :key="item.id">
        <div class="recommend_img">
          <img :src="item.imgUrl" alt />
        </div>
        <div class="rem_msg">
          <div class="rem_title">{{item.title}}</div>
          <div class="rem_desc">{{item.desc}}</div>
          <div class="rem_btn">
            <div class="rem_btn_msg">查看详情</div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "homeRecommend",
  props: {
    recommendList: {
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped>
.recommend_title {
  background-color: #eeeeee;
  height: 2rem;
  line-height: 2rem;
  padding-left: 1rem;
  margin: 0.5rem 0;
}
.recommend {
  width: 100%;
  height: 0;
  padding-bottom: 25%;
  overflow: hidden;
  display: flex;
}
.recommend_img {
  width: 25%;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
}

.recommend_img img {
  padding: 0.5rem;
  width: 100%;
}
.rem_msg {
  flex: 1;
  height: 5rem;
  display: flex;
  margin: 1rem 0;
  padding-left: 1rem;
  flex-direction: column;
}
.rem_title {
  font-weight: 600;
  height: 1.5rem;
}
.rem_desc {
  flex: 1;
  line-height: 2rem;
  overflow: hidden;
}
.rem_btn {
  height: 1.5rem;
}
.rem_btn_msg {
  box-shadow: rgb(0, 0, 0.1);
  background-color: #ff9200;
  border-radius: 0.2rem;
  color: #fff;
  text-align: center;
  height: 1.3rem;
  line-height: 1.3rem;
  width: 5rem;
}
</style>
