import { ref } from 'vue'
import { defineStore } from 'pinia'
import {userLogin,userVerificationCode} from '@/api/user'

export const useUserStore = defineStore('userStore',()=>{
  const userPassWord = ref({})
  const useVerificationCode = ref({})
  //验证码
  const verificationCode = async ()=>{
    useVerificationCode.value = await userVerificationCode()
  } 

  //登录验证
  const login = async (parms:{username:string,password:string})=>{
    userPassWord.value = await userLogin(parms)
  }

  //退出清空token
  const clearUserList = ()=>{
    userPassWord.value = {}
  }
  return{
    userPassWord,
    clearUserList,
    login,
    verificationCode
  }
},
{
  persist: true,
})