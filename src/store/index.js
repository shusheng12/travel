import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowcity:'怀集',
    cartFoods:[],
    goods:[]
  },
  mutations: {
    changecity(state,city){
      this.state.nowcity=city;
    },
    addfoods(state,food){
      
      if(food.num==1){
        this.state.cartFoods.push(food)
      }
      else{
        this.state.cartFoods.forEach(el=> {
         if(el.name==food.name){
           el.num++
         }
        });
      }
    },
    popfoods(state,food){
      this.state.cartFoods.forEach((el,index)=>{
     if(el.name==food.name){
       el.num--
         if(el.num==0){
           this.state.cartFoods.splice(index, 1);
         }
      
     }
       })  
    },
    clear(state){
      this.state.cartFoods=[]
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{ 
  

  }
})
