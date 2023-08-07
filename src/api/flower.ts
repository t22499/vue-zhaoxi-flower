import httpInstance from '@/utils/index'

export const flowerList = () =>{
  return httpInstance({
    url:"/api/flower"
  })
}

//鲜花列表
export const getFlowersList = (parms:{}) =>{
  return httpInstance({
    url:"/api/flower/GetFlowers",
    method:"POST",
    data:{
      parms
    }
  })
}

//购买页面图片
export const getDetailList = (parms:{}) =>{
  return httpInstance({
    url:"/api/flowerDetail",
    method:"POST",
    data:{
      parms
    }
  })
}


//订单
export const getFlowerPay = (parms:{}) =>{
  return httpInstance({
    url:"/api/flowerPay",
    method:"POST",
    data:{
      parms
    }
  })
}