import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialogStore',()=>{
  const IsShowLogin = ref(false)
  const IsShowRegister = ref(false)

  //打开登录
  const OpenLogin = ()=>{
    IsShowLogin.value = true
  }
  //关闭登录
  const CloseLogin = ()=>{
    IsShowLogin.value = false
  }
  //打开注册
  const OpenRegister = ()=>{
    IsShowRegister.value = true
  }
   //关闭注册
   const CloseRegister = ()=>{
    IsShowRegister.value = false
   }
  return{
    IsShowRegister,
    IsShowLogin,
    CloseLogin,
    OpenLogin,
    OpenRegister,
    CloseRegister
  }
})