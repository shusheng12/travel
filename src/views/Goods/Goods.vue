<template>
  <div>
    <goods-header :sup="sup" :info="info" :supports="supports" />
    <router-view/>  
  </div>
</template>
<script>
import { gethomedata1 } from "@/network/gethomedata";
import goodsHeader from "./comps/goodsHeader";

export default {
  components: {
    goodsHeader,
  },
  data() {
    return {
      info: {},
      supports: [],
      sup: {
        name: "",
        content: "",
        type: 0
      }
    };
  },
  created() {
    gethomedata1().then(res => {
      this.info = res.data.info;
      this.supports = res.data.info.supports;
      this.sup = res.data.info.supports[0];
    });
  }
};
</script>
<style scoped>

</style>
