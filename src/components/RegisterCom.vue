<script setup lang="ts">
import { ref,reactive, computed } from 'vue'
import {useDialogStore} from '@/stores/dialog'

const dialogStore = useDialogStore()
//控制打开或关闭的变量
const dialogVisible = computed(()=>dialogStore.IsShowRegister)
//取消注册
const cancel = ()=>{
  dialogStore.CloseRegister()
} 
//表单定义数据
const ruleForm = reactive({
  name:'',
  user: '',
  password: '',
  verificationCode:'',
})

//准备规则对象
const rules = {
  name:[
    {required:true,message:'用户名不可为空',trigger:'blur'}
  ],
  user:[
    {required:true,message:'账号不可为空',trigger:'blur'}
  ],
  password:[
  {required:true,message:'密码不能为空',trigger:'blur'},
  {min:6,max:14,message:'密码长度不正确',trigger:'blur'}
  ],
}

const handleClose = (done: () => void) => {
  dialogStore.CloseRegister()
  done()
}
</script>
<template>
  <el-dialog
    v-model="dialogVisible"
    title="注册"
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
    <el-form-item label="用户名" prop="name">
        <el-input 
          v-model="ruleForm.name"
          type="input"
          autocomplete="off"
          clearable />
    </el-form-item>
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
        />
      </el-form-item>
      <!-- <el-form-item 
        label="验证码"
        >
        <el-input 
          v-model="ruleForm.verificationCode"
          type="verificationCode"
          autocomplete="off"
           />
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary">确认</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<style lang="scss" scoped>

</style>
