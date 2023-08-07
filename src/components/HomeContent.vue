<script setup lang="ts">
import {flowerList} from  '@/api/flower'
import { ref,onMounted } from 'vue';

const flowerImage = ref()
const flower = async ()=>{
  const req = await flowerList()
  flowerImage.value = req
  console.log(flowerImage.value)
}

onMounted(()=>{
  flower()
})
</script>
<template>
  <div class="common-layout">
      <el-container>
          <el-header>
              <div class="hd">
                  <a class="more" href="/loveflower">
                      更多爱情鲜花
                      <span class="icon icon-arrow-right"></span>
                  </a>
                  <h3>
                      <a href="/loveflower">爱情鲜花</a>
                      <span>送 · 让你怦然心动的人</span>
                  </h3>
              </div>
          </el-header>
          <el-container>
              <el-aside width="300px">
                <!-- <el-image style="margin-top: 20px;" src=""></el-image> -->
                  <img style="margin-top: 20px;" src="../assets/images/content/home_floor_lover.png" alt="">
              </el-aside>
              <el-main>
                  <div class="fl-products">
                      <div class="fl-products-item" v-for="item in flowerImage" :key="item.id">
                          <a>
                              <div class="img-box">
                                <img 
                                  style="width: 220px; height: 240px"
                                  :src="item.url"
                                  alt="">
                                  <!-- <el-image
                                      style="width: 220px; height: 240px"
                                      src="../assets/images/content/a1.jpg"
                                  /> -->
                              </div>
                              <div class="product-content">
                                  <p class="product-title">{{item.title }}</p>
                                  <p class="product-price">
                                      <span class="price-sign">¥</span>
                                      <span class="price-num">{{item.price }}</span>
                                  </p>
                              </div>
                          </a>
                      </div>
                  </div>
              </el-main>
          </el-container>
      </el-container>
  </div>
</template> 
<style lang="scss">
.common-layout {
  padding-left: 16.5%;
  background-color: #f7f9fa;
}
.more {
  font-size: 14px;
  line-height: 30px;
  color: #71797f;
  float: right;
  margin-right: 21%;
}

.hd {
  text-align: initial;
  h3 {
      font-size: 26px;
      line-height: 30px;
      color: #232628;
      font-weight: bold;
      a {
          color: inherit;
      }
      span {
          padding-left: 15px;
          margin-left: 16px;
          font-size: 20px;
          line-height: 24px;
          font-weight: normal;
          border-left: 1px solid #71797f;
      }
  }
}
.fl-products {
  width: 912px;
  vertical-align: top;
  .fl-products-item {
      display: inline-block;
      width: 212px;
      margin-left: 16px;
      margin-bottom: 16px;
      background-color: #fff;
      vertical-align: top;
      .product-content {
          padding: 10px 8px 14px;
          text-align: center;
          color: #232628;
          .product-title {
              max-width: 100%;
              overflow: hidden;
              -o-text-overflow: ellipsis;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 16px;
              line-height: 20px;
          }
          .product-price {
              margin-top: 5px;
              font-size: 16px;
              font-weight: bold;
              line-height: 20px;
          }
      }
  }
}
</style>