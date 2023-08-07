<script setup lang="ts">
import { ref,reactive, computed ,onMounted} from 'vue'
import {useDialogStore} from '@/stores/dialog'
import {useUserStore} from '@/stores/user'

//打开或关闭登录或注册的pinia
const dialogStore = useDialogStore()
//登录的pinia
const userLogin = useUserStore()

//控制打开或关闭的变量
const dialogVisible = computed(()=>dialogStore.IsShowLogin)
//取消登录
const cancel = ()=>{
  dialogStore.CloseLogin()
} 
//表单定义数据
const ruleForm = reactive({
  user: 'user2',
  password: 'password2',
  verificationCode:'',
})

//准备规则对象
const rules = {
  user:[
    {required:true,message:'用户名不可为空',trigger:'blur'}
  ],
  password:[
  {required:true,message:'密码不能为空',trigger:'blur'},
  {min:6,max:14,message:'密码长度不正确',trigger:'blur'}
  ],
}

const handleClose = (done: () => void) => {
  dialogStore.CloseLogin()
  done()
}

//确认
const {user,password} = ruleForm
const login = async ()=>{
 const res = await userLogin.login({username:user,password:password})
 console.log(res)
 dialogStore.CloseLogin()
}

// const verificationList= async ()=>{
//   ruleForm.verificationCode = await userLogin.verificationCode()
// }

// onMounted(() => {
//   verificationList()
// })
</script>
<template>
  <el-dialog
    v-model="dialogVisible"
    title="登录"
    width="30%"
    :before-close="handleClose"
  >
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="账号" prop="user">
        <el-input 
          v-model="ruleForm.user"
          type="input"
          autocomplete="off"
          clearable />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
          clearable
        />
      </el-form-item>
      <!-- <el-form-item 
        label="验证码"
        >
        <el-input 
          v-model="ruleForm.verificationCode"
          type="verificationCode"
          autocomplete="off"
          clearable
           />
           <el-text class="mx-1">{{ ruleForm.verificationCode }}</el-text>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="login">确认</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<style lang="scss" scoped>

</style>