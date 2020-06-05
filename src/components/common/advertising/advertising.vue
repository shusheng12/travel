<template>
<div>
  <div class="hello">
    <img src="@/assets/7a468ab83f5563f0286ab59fcda151e5.jpg" alt="">
  </div>
  <div class="pos1" @click="to">点我跳过 {{time}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      time:5,
      timer:null
    }
  },
  mounted(){
   this.play()
  },
  methods:{
    play(){
      this.timer=setInterval(this.auto,1000)
    },
    auto(){
      this.time--;
      if(this.time==0){
        this.to()
      }
   },
   to(){
        clearInterval(this.timer)
        this.$router.push('/Home')
      }
  },

 
}

</script>

<style scoped>

.hello{
  height:100vh;
  overflow: hidden;
}
  

.hello img{
  width:100%;
}

.pos1{
   position: absolute;
  right:1rem;
  top: 1rem;
  color: #faf7f2;
}

</style>
