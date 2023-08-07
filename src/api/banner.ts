import httpInstance from '@/utils/index'

export const bannerList = () =>{
  return httpInstance({
    url:"/api/carousel"
  })
}