import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const Home=()=>import('../views/Home/Home.vue')
const City=()=>import('../views/city/city')
const Detail=()=>import('../views/detail/detail')
const Advertising=()=>import('@/components/common/advertising/advertising')
const Login=()=>import('@/components/common/login/login')
const Goods=()=>import('../views/Goods/Goods')
const Foods =()=>import('@/views/Goods/foods/foods')
 const ShopRatings =()=>import('@/views/Goods/ShopRatings/ShopRatings')
const Shopinfo =()=>import('@/views/Goods/shopinfo/shopinfo')
const routes = [
  {
    path: '/',
    redirect:'/advertising'
  }, 
  {
    path: '/advertising',
    name: 'advertising',
    component: Advertising,
    meta:{
      title:'旅游网站',
      keepalve:false,
      islogin:false
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta:{
      title:'首页',
      keepalve:false,
      islogin:false
    }
  },
  {
    path: '/City',
    name: 'City',
    component:City,
    meta:{
      title:'城市选择',
      keepalve:false,
      islogin:false
    }
  },
  {
    path: '/Detail',
    name: 'Detail',
    component:Detail,
    meta:{
      title:'详情页',
      keepalve:false,
      islogin:false
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component:Login,
    meta:{
      title:'登录',
      keepalve:false,
      islogin:false
    }
  },
  {
    path: '/Goods',
    name: 'Goods',
    component:Goods,
    meta:{
      title:'点餐',
          keepalve:false,
          islogin:false
    },
    children:[

      {
        path:'/Goods',
        redirect:'/Goods/Foods'
      },
      {
        path: '/Goods/Foods',
        name: 'Foods',
        component:Foods,
        meta:{
          title:'点餐',
          keepalve:false,
          islogin:false
        }
      },
      {
        path: '/Goods/ShopRatings',
        name: 'ShopRatings',
        component:ShopRatings,
        meta:{
          title:'评价',
          keepalve:false,
          islogin:false
        }
      },
      {
        path: '/Goods/Shopinfo',
        name: 'Shopinfo',
        component:Shopinfo,
        meta:{
          title:'商家',
          keepalve:false,
          islogin:false
        }
      }
    ]
  }
]



const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  document.title=to.matched[0].meta.title
  next()
 })


export default router
