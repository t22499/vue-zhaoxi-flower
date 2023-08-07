import httpInstance from '@/utils/index'

//登录
export const userLogin = (parms:{})=>{
  return httpInstance({
    url:'/api/login',
    method:'POST',
    data:{
      parms
    }
  })
}
//验证码
export const userVerificationCode = ()=>{
  return httpInstance({
    url:'/api/verificationCode',
  })
}
