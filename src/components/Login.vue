<template>
  <div class="login">
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">122</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">3353</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">444</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">555</div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    line-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>