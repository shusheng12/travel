<template>
  <div>
    <div class="iconfont back-icon" slot="left" @click="gohome">&#xe624;</div>

    <div class="dl">
      <div class="dl1" :class="ative?'ative':''" @click="yzm">手机号验证码</div>|
      <div class="dl2" :class="ative?'':'ative'" @click="mm">密码登录</div>
    </div>

    <div v-show="ative">
      <van-cell-group>
      <van-field type="tel" v-model="phone1" label="手机号" placeholder="请输入手机号" clearable />
      <van-field v-model="sms" center label="短信验证码" placeholder="请输入短信验证码">
        <template #button>
          <van-button size="small" type="primary" :disabled="farid" v-if="show" @click="time">发送验证码</van-button>
          <van-button size="small" disabled @click="time" v-else>请您{{time1}}后重试</van-button>
        </template>
      </van-field>
      </van-cell-group>
    </div>

    <div v-show="!ative">
      <van-cell-group>
        <van-field type="tel" label="手机号" placeholder="请输入手机号" clearable />
        <van-field type="password" label="密码" placeholder="请输入密码" />
      </van-cell-group>
    </div>


 <div class="xieyi">
  <van-checkbox v-model="istrue" checked-color="#07c160"><span class="aaa">《用户登录安全协议》</span> </van-checkbox>
 </div>
    <van-button type="primary" size="large" class="button" :disabled="show" @click="dl">登录</van-button>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Toast.setDefaultOptions({ duration: 1000 });

Vue.use(Toast);
export default {
  data() {
    return {
      ative: true,
      phone1: "",
      time1: 60,
      show: true,
      sms: "",
      istrue:false
    };
  },

  methods: {
    yzm() {
      this.ative = true;
    },
    mm() {
      this.ative = false;
    },
    gohome() {
      this.$router.go(-1);
    },
    time() {
      Toast.success("验证码发送成功");
      this.show = false;
      const timer = setInterval(() => {
        this.time1--;
        if (this.time1 == 0) {
          clearInterval(timer);
          this.time1 = 60;
          this.show = true;
        }
      }, 1000);
    },
    dl() {
      if (this.sms != "" && this.phone1 != "") {
        Toast.success("登录成功");
        setTimeout(() => {
          this.$router.push("./home");
        }, 1000);
      } else {
        Toast.fail('请输入手机号或验证码');
      }
    }
  },
  computed: {
    farid() {
      let reg = /^1[3456789]\d{9}$/;
      if (reg.test(this.phone1)) {
        return false;
      } else return true;
    }
  }
};
</script>

<style scoped>
.dl {
  display: flex;
  margin-top: 5rem;
  margin-bottom: 2rem;
}
.dl1 {
  flex: 1;
  text-align: end;
}
.dl2 {
  flex: 1;
}
.ative {
  color: #339de2;
}
.button {
  margin-top:1rem;
}
.back-icon {
  margin: 1rem 0 0 1rem;
}
.xieyi{
  margin:3rem 0 0  3rem;
  
}
.aaa{
  color:#007acc;
}
</style>
