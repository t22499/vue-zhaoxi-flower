<template>
  <div class="common-layout">
      <el-container>
          <el-header>
              <p>订单列表</p>
          </el-header>
          <el-main>
              <div class="main">
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column prop="date" label="Date" width="180" />
                  <el-table-column prop="name" label="Name" width="180" />
                  <el-table-column prop="address" label="Address" />
                </el-table>
              </div>
          </el-main>
      </el-container>
  </div>
</template>
<script setup >

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
<style lang="scss" scoped>
.common-layout {
  padding-left: 0;
}
.main {
  width: 800px;
  height: 500px;
  margin: 0px auto;
}
</style>