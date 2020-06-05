<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      startY: true,
      probeType: 3
    });
    this.scroll.on("scroll", pos => {
      this.$emit("getpos", pos);
    });

    this.$bus.$on("getel", msg => {
      if (msg) {
      this.scroll.scrollToElement(msg, 1500);
      }
    });
  },
  updated() {
    this.scroll.refresh();
  }
};
</script>

<style scoped>
</style>
