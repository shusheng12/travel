<template>
  <div>
    <div class="city_key">当前城市</div>
    <div class="button-list">
      <div class="button-wrapper">
        <div class="button">{{this.$store.state.nowcity}}</div>
      </div>
    </div>

    <div class="city_key">热门城市</div>
    <div class="button-list">
      <div class="button-wrapper" v-for="item of hotCities" :key="item.id" @click="changecity(item.name)">
        <div class="button" >{{item.name}}</div>
      </div>
    </div>

    <div v-for="(item,key) of cities" :key="key">
      <div class="city_key" :ref='key'>{{key}}</div>
      <div class="cities_item" v-for="i of item " :key="i.id" @click="changecity(i.name)">{{i.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cityList",
  props: {
    hotCities: {
      type: Array,
      default: []
    },
    cities:{
      type:Object,
      default:{}
    }
  },
  data() {
    return {};
  },
  mounted(){
    this.$bus.$on('getkey', msg=>{
      if(msg){
     const s=this.$refs[msg][0]
     this.$bus.$emit('getel',s)
      }   
    })
  },
  methods:{
    changecity(city){
      this.$store.commit('changecity',city)
      this.$notify({ type: 'success', message: '城市修改成功',duration:750 });
    }
  }
};
</script>

<style scoped>
.city_key {
  background-color: #eeeeee;
  height:1.8rem;
  line-height:1.8rem;
  padding-left: 0.5rem;
  color: #777777;
}
.button-list {
  overflow: hidden;
  margin: 0.5rem 0;
  padding: 0.1rem 1rem 0.1rem 0.1rem;
}
.button-wrapper {
  float: left;
  width: 33.33%;
}
.button {
  margin: 0.3rem;
  border: 0.05rem solid #ccc;
  line-height: 1.5rem;
  text-align: center;
  border-radius: 0.06rem;
}
.cities_item{
  height:1.8rem;
  line-height:1.8rem;
  padding-left:1rem;
  border-bottom:0.01rem solid #ccc;
}
</style>
