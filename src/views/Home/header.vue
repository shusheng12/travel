<template>
  <div >
   <nav-bar color="#00bcd4">
      <router-link  slot="left" tag="div" to="/Login" >登录|注册</router-link>
      <div slot="center" class="center">
        <input type="search" class="input_search" v-model="keywork"  placeholder="输入城市/景点/游玩主题"/>
      </div>
      <div  slot="right" @click="tocity">
        {{this.$store.state.nowcity}}
      </div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from "@/components/common/navbar/nav_bar";
export default {
  name: 'hander',
 components:{
   navBar
 },
 data(){
   return{
 keywork:''
   }
 },
 methods:{
   tocity(){
     this.$router.push('/City')
   }
 }
}
</script>

<style scoped>
.input_search{
width:100%;
line-height:1.7rem;
margin-top:.5rem;
height:1.7rem;
border: 0;
border-radius:.8rem ;
padding: 0 .6rem;

}




</style>
