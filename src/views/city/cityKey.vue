<template>
  <div class="citykey">
    <div
      v-for="(item,key) of cities"
      :ref="key"
      :key="key"
      class="item_key"
      @click="getkey"
      @touchstart="headtouchstart"
      @touchmove="headtouchmove"
      @touchend="headtouchend"
    >
      <div :class="{ative:key===isshow}">{{key}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "citykey",
  props: {
    cities: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      isshow: ""
    };
  },
  methods: {
    getkey(e) {
      this.isshow = e.target.innerText;
      this.$bus.$emit("getkey", e.target.innerText);
    },
    headtouchstart(e) {
      //console.log(e);
    },
    headtouchmove(e) {
      //console.log(e.touches[0].clientY-185);
      const index = Math.floor((e.touches[0].clientY - 180) / 19);

      //const h=this.$refs['A'][0]

      //console.log(this.letter);

      //const index=
      // console.dir(index);

       this.$bus.$emit("getkey",this.letter[index]);
    },
    headtouchend(e) {
      //console.log(e.target.innerText);
    }
  },
  computed: {
    letter() {
      const city = [];
      for (let i in this.cities) {
        city.push(i);
      }

      return city;
    }
  }
};
</script>

<style scoped>
.citykey {
  position: absolute;
  top: 6rem;
  bottom: 0;
  right: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.item_key {
  line-height: 1.2rem;
  text-align: center;
  color: #5cc2c6;
}
.ative {
  border-radius: 50%;
  background-color: #007acc;
}
</style>
