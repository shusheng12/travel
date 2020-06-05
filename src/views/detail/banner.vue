<template>
  <div>
    <div class="banner_img">
      <img :src="banner" alt />
      <div class="banner_title">
        <div class="banner_msg">{{sightName}}</div>
        <div class="banner-number" @click="imgshow">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import Vue from "vue";
import { ImagePreview } from "vant";
import { Lazyload } from "vant";
import { Uploader } from "vant";
Vue.use(Uploader);
Vue.use(ImagePreview);
export default {
  props: {
    banner: String,
    sightName: String,
    gallaryImgs: Array
  },
  data() {
    return {
    };
  },
  methods: {
    imgshow() {
      ImagePreview({
        images: this.gallaryImgs,
        closeable: true
      });
    }
  }
};
</script>

<style scoped>
.banner_img {
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;
}

.banner_img img {
  width: 100%;
}
.banner_title {
  display: flex;
  position: absolute;
  left: 1rem;
  right: 0;
  bottom: 0;
  color: #fff;
  line-height: 2rem;
  font-size: 1rem;
}
.banner_msg {
  flex: 1;
}
.banner-number {
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  line-height: 1rem;
  height: 1rem;
  padding: 0 0.4rem;
  border-radius: 0.2rem;
  background: rgba(0, 0, 0, 0.5);
}
</style>
