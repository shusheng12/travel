<template>
    <div class="key">
      <div
        v-for="(item,index) of goods"
        :key="index"
        class="goods_key"
        @click="ative(index,item.name)"
        :class="{ative:index===ativeindex}"
      >
        <img class="icon" :src="item.icon" v-if="item.icon" />
        <div>{{item.name}}</div>
      </div>
    </div>
</template>
<script>
export default {
    props:{
    goods:Array
    },
    data() {
    return {
      ativeindex:null
    };
  },
   methods:{
ative(index,data){
  this.ativeindex=index
  this.$bus.$emit('changekey',data)
}
  }
}
</script>
<style scoped>
.key {
  position: absolute;
  top:14rem;
  left: 0;
  bottom:3rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content:space-between;
  background-color: #f4f5f7;
}

.goods_key {
  padding: 0.5rem;
  display: flex;
  align-items: center;
  }
.icon {
  display: inline-block;
  vertical-align: top;
  width: 12px;
  height: 12px;
  margin-right: 2px;
  background-size: 12px 12px;
  background-repeat: no-repeat;
}
.ative{
  color: #04a271;
}
</style>
