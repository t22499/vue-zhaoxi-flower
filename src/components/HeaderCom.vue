<script setup lang="ts">
import { ref,computed } from 'vue'
import LoginCom from '@/components/LoginCom.vue';
import RegisterCom from '@/components/RegisterCom.vue';
import {useDialogStore} from '@/stores/dialog'
import {useUserStore} from '@/stores/user'
const activeIndex = ref("/")
const dialogStore = useDialogStore()
const userStore = useUserStore()

//user数据
const user = computed(()=>userStore.userPassWord)

//登录
const login = ()=>{
  dialogStore.OpenLogin()
}
//注册
const register = ()=>{
  dialogStore.OpenRegister()
}
//退出
const logout = ()=>{
  userStore.clearUserList()
}


</script>

<template>
  <div>
    <el-row>
    <el-col :span="24" class="header-top">
      <ul>
        <li v-if="user.name == undefined">
          <el-link :underline="false" @click="login">
            登录
          </el-link>
        </li>
        <li v-if="user.name == undefined">
          <el-link :underline="false" @click="register">注册</el-link>
        </li>
        <li v-if="user.name != undefined">
          <el-link :underline="false">{{ user.name }}</el-link>
        </li>
        <li v-if="user.name != undefined">
          <el-link :underline="false" href="/">个人中心</el-link>
        </li>
        <li v-if="user.name != undefined">
          <el-link :underline="false" @click="logout">注销</el-link>
        </li>
      </ul>
    </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-link class="logo-image" :underline="false" href="/">
          <el-image style="width: 200px; height: 100px" src="/src/assets/images/zhaoxi_logo.png" fit="contain" />
        </el-link>
      </el-col>
      <el-col :span="8">
        <el-input
          class="w-50 m-2"
          style="margin-top: 30px"
          size="large"
          placeholder="商品搜索"
          />
      </el-col>
      <el-col :span="8">
        <div class="service-item">
          <a href="javascript;">
            <span class="icon-headset"></span>
            <span>在线客服</span>
          </a>
        </div>
      </el-col>
    </el-row>
    <!-- 菜单栏 -->
    <el-row>
      <el-col :span="24">
        <el-menu :default-active="activeIndex" class="el-menu-header" mode="horizontal"  router>
          <el-menu-item index="/" exact>首页</el-menu-item>
          <el-menu-item index="/loveflower">爱情鲜花</el-menu-item>
          <el-menu-item index="/birthdayflower">生日鲜花</el-menu-item>
          <el-menu-item index="/friendflower">友情鲜花</el-menu-item>
          <el-menu-item index="/weddingflower">婚庆鲜花</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <!-- <div class="container">
      <ul class="app-header-nav">
        <li class="home">
          <RouterLink  to="/">首页</RouterLink>
        </li>
        <li class="home">
          <RouterLink  to="/loveflower">爱情鲜花</RouterLink>
        </li>
        <li class="home">
          <RouterLink  to="/birthdayflower">生日鲜花</RouterLink>
        </li>
        <li class="home">
          <RouterLink  to="/friendflower">友情鲜花</RouterLink>
        </li>
        <li class="home">
          <RouterLink  to="/weddingflower">婚庆鲜花</RouterLink>
        </li>
      </ul>
    </div> -->
  </div>
  <LoginCom/>
  <RegisterCom/>
</template>

<style lang="scss" scoped>
.header-top{
  ul{
  padding-left: 80%;
  li{
    float: left;
    margin-left: 20px;
  }
}
}
.icon-headset{
  background-image: url(../assets/images/common_sprite.png);
  background-position:-34px -102px;
  width: 30px;  
  height: 30px;
  margin-top: 12px;
  margin-right: 8px;
  background-repeat: no-repeat;
  vertical-align: top;
  display: inline-block;
}
.service-item{
  display: inline-block;
  font-size: 14px;
  color: #71797f;
  vertical-align: top;
  line-height: 47px;
  margin-top: 25px;
  margin-left: -200px;
}
.header-menu{
  text-align: left;
}
.el-menu-header {
  margin-left: 30% !important;
  border-bottom: 0px !important;
  .el-menu-item {
    width: 170px !important;
  }
}

.container {
    display: flex;
    align-items: center;
}
.app-header-nav {
  // width: 820px;
  display: flex;
  padding-left: 480px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 40px;
    width: 70px;
    text-align: center;

    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
      &:hover {
        color: #27ba9b;
        border-bottom: 1px solid #27ba9b;
      }
    }
    .active {
      color: #27ba9b;
      border-bottom: 1px solid #27ba9b;
    }
    
  }
}
</style>