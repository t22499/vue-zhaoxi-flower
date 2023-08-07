<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ElMessage } from 'element-plus'
import {getFlowerPay} from '@/api/flower'
import { useRouter } from 'vue-router';
  
const router = useRouter()

const goToPay = async ()=>{
  let id:any = window.location.href.match(/Id=(\S*)&Type=/)
  let type = window.location.href.split('Type=')
  const PayParms = ref({})

  const userStore:any = localStorage.getItem('userStore')
  // const token = JSON.parse(userStore).userPassWord.token
  const token = JSON.parse(userStore).userPassWord
  console.log(token)
  if(token.token == null){
    ElMessage.warning("请登录后再点击购买！")
    return;
  }
    const res = await getFlowerPay({token:token,Id:id,Type:type})
    PayParms.value = res
    ElMessage.warning("创建订单成功！")
    router.push({ path: '/personcenter' });
    // ElMessage.warning("创建订单失败，请联系系统管理员！")
    

  }
  
  

onMounted(() => {
  
  // console.log(type[1])
  // console.log(id[1])
})
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <p>请扫码支付</p>
      </el-header>
      <el-main>
        <img style="display: block;width: 300px;margin:0px auto" src="../assets/images/pay/测试二维码.png" />
        <el-button style="display: block;margin:0px auto" type="warning" round @click="goToPay">模拟支付</el-button>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
  padding-left: 0;
}
.el-header{
  display: block;
  margin:0px auto
}
</style>