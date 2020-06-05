<template>
  <div class="navbar" :style="{ backgroundColor:color}">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props:{
    color:String
  },
  data(){
    return{
      keyword:''
    }
  }
}
</script>
<style scoped>
.navbar{
  display: flex;
 height:2.75rem;
 text-align: center;
 color: #fff;
}
.left{
  width:5.5rem;
  text-align: center;
  height: 2.75rem;
  line-height: 2.75rem;
}
.center{
  flex: 1;
  color: #000;
  height: 100%;
  
}
.right{
  width:4rem;
  height: 2.75rem;
  line-height: 2.75rem;
  color: #fff;
}
</style>
