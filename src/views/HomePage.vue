<script setup lang="ts">
import {ref,onMounted} from 'vue'
import {bannerList} from '@/api/banner'
import HomeContent from '@/components/HomeContent.vue'

// const images = ref([
//   {
//     imageUrl:'/src/assets/images/banners/21_birthday_banner_pc.jpg',
//     courseUrl:'https://www.baidu.com/?tn=15007414_3_dg'
//   },
//   {
//     imageUrl:'/src/assets/images/banners/21_brand_banner_pc.jpg',
//     courseUrl:'https://www.baidu.com/?tn=15007414_3_dg'
//   },
//   {
//     imageUrl:'/src/assets/images/banners/21_syz_banner_pc.jpg',
//     courseUrl:'https://www.baidu.com/?tn=15007414_3_dg'
//   },
// ])
const images = ref()
const banner = async() => {
  const res = await bannerList()
  images.value = res
}

onMounted (()=>{
  banner()
})


</script>

<template>
  <div class="block text-center">
    <el-carousel  class="el-carousel-style">
      <el-carousel-item v-for="item in images" :key="item">
        <el-link :href="item.url" target="_blank">
          <el-image :src="item.url"></el-image>
        </el-link>
      </el-carousel-item>
    </el-carousel>
  </div>
  <HomeContent></HomeContent>
</template>

<style scoped lang="scss">
.el-carousel-style{
  height: 480px;
  margin-top: 10px;
}
</style>
