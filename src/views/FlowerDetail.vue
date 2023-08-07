<script setup lang="ts">
import {ref,onMounted} from 'vue'
import {getDetailList} from '@/api/flower'
import { useRouter } from 'vue-router';
//控制页面的显示
const isShow = ref(false);
const router = useRouter()

let parms = {
    Id:0,
    Type:''
}
const info:any = ref({})
const getDetail = async()=>{
    const res = await getDetailList(parms)
    isShow.value = true
    info.value = res
} 

//购买跳转
const goToPay = ()=>{
    router.push({path:'/pay',query:parms})
}

onMounted(()=>{
    let id:any = window.location.href.match(/id=(\S*)&type=/)
    let type = window.location.href.split('type=')[1]
     
    parms.Id = parseInt(id[1])
    parms.Type = type
    getDetail()
    // console.log(id[1])
    // console.log(type)
})
</script>

<template>
  <div class="common-layout" v-if="isShow">
        <el-container>
            <el-header>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: info.path }">列表页</el-breadcrumb-item>
                    <el-breadcrumb-item>详情页</el-breadcrumb-item>
                </el-breadcrumb>
            </el-header>
            <el-container>
                <el-aside width="500px">
                    <img class="bigImage" src="../assets/images/detail/202004091613483166.jpg" alt="">
                </el-aside>
                <el-main>
                    <ul class="product-info">
                        <li>
                            <h3>{{ info.title }}</h3>
                        </li>
                        <li>
                            <span>{{ info.description }}</span>
                        </li>
                        <li>
                            <span class="left">售价</span>
                            <span class="right" style="color:red;font-size:25px;">￥{{ info.price }}</span>
                        </li>
                        <li>
                            <span class="left">花语</span>
                            <span class="right">{{ info.language }}</span>
                        </li>
                        <li>
                            <span class="left">材料</span>
                            <span class="right">{{ info.material }}</span>
                        </li>
                        <li style="border-bottom:1px solid #e7ebef;">
                            <span class="left">包装</span>
                            <span class="right">{{ info.packing }}</span>
                        </li>
                        <li>
                            <span class="left">配送说明</span>
                            <span class="right">{{ info.deliveryRemarks }}</span>
                        </li>
                    </ul>
                    <el-button type="warning" round @click="goToPay">立即购买</el-button>
                </el-main>
            </el-container>
        </el-container>
        <el-container>
            <el-aside width="240px">
                <h5 style="margin-top: 83px;">热销推荐</h5>
                <ul class="product-recommend">
                    <li>
                        <img src="../assets/images/content/a1.jpg" alt="">
                        <p>韩式系列/公主的假日</p>
                        <p>￥239</p>
                    </li>
                    <li>
                        <img src="../assets/images/content/a2.jpg" alt="">
                        <p>韩式系列/公主的假日</p>
                        <p>￥239</p>
                    </li>
                    <li>
                        <img src="../assets/images/content/a3.jpg" alt="">
                        <p>韩式系列/公主的假日</p>
                        <p>￥239</p>
                    </li>
                    <li>
                        <img src="../assets/images/content/a4.jpg" alt="">
                        <p>韩式系列/公主的假日</p>
                        <p>￥239</p>
                    </li>
                    <li>
                        <img src="../assets/images/content/a5.jpg" alt="">
                        <p>韩式系列/公主的假日</p>
                        <p>￥239</p>
                    </li>
                    <li>
                        <img src="../assets/images/content/a6.jpg" alt="">
                        <p>韩式系列/公主的假日</p>
                        <p>￥239</p>
                    </li>
                    <li>
                        <img src="../assets/images/content/a7.jpg" alt="">
                        <p>韩式系列/公主的假日</p>
                        <p>￥239</p>
                    </li>
                    <li>
                        <img src="../assets/images/content/a8.jpg" alt="">
                        <p>韩式系列/公主的假日</p>
                        <p>￥239</p>
                    </li>
                </ul>
            </el-aside>
            <el-main>
                <div class="product-content">
                    <h3>商品详情</h3>
                    <img src="../assets/images/detail/content/by_1.jpg" alt="">
                    <img src="../assets/images/detail/content/by_2.jpg" alt="">
                    <img src="../assets/images/detail/content/by_3.jpg" alt="">
                    <img src="../assets/images/detail/content/by_4.jpg" alt="">
                    <img src="../assets/images/detail/content/by_5.jpg" alt="">
                    <img src="../assets/images/detail/content/by_6.jpg" alt="">
                    <!-- <img src="../assets/images/detail/content/by_7.jpg" alt=""> -->
                    <!-- <img src="../assets/images/detail/content/by_8.jpg" alt=""> -->
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<style scoped lang="scss">
.bigImage {
    width: 458px;
    height: 500px;
}
.product-info {
    padding-left: 0;
    margin-top: -20px;
    text-align: initial;
    li {
        width: 100%;
        height: 30px;
        margin-bottom: 20px;
        .left {
            display: inline-block;
            width: 80px;
            padding-left: 12px;
            font-size: 13px;
            line-height: 18px;
            color: #71797f;
            vertical-align: top;
        }
        .right {
            display: inline-block;
            width: 580px;
            font-size: 13px;
            line-height: 18px;
            color: #232628;
            vertical-align: top;
            text-align: justify;
            padding-right: 36px;
        }
    }
}
.product-recommend {
    padding-left: initial;
}
.product-content {
    padding: 40px 115px 95px;
    text-align: center;
}
</style>
