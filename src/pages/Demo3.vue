<template>
  <div>
    <div>
      <h3>[demo3] elem ui模块使用</h3>
    </div>
    <div class="section">
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
      <el-button type="" icon="search">搜索</el-button>
      <el-button type="primary" icon="search">搜索</el-button>
      <el-button type="success" icon="search">搜索</el-button>
      <el-button type="warning" icon="search">搜索</el-button>
      <el-button type="danger" icon="search">搜索</el-button>
      <el-button type="primary" v-bind:loading="loading" @click="press">加载中</el-button>
      <el-button-group>
        <el-button type="primary" icon="edit"></el-button>
        <el-button type="primary" icon="share"></el-button>
        <el-button type="primary" icon="delete"></el-button>
      </el-button-group>
      <el-button type="primary" size="large">大型按钮</el-button>
      <el-button type="primary">正常按钮</el-button>
      <el-button type="primary" size="small">小型按钮</el-button>
      <el-button type="primary" size="mini">超小按钮</el-button>
      <el-switch on-text="" off-text="" v-model="delivery"></el-switch>
    </div>
    <hr>
    <div>
      <el-row :gutter="5">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row :gutter="5">
        <el-col :span="24"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
    <hr>
    <div>
      <el-button type="text" @click="showMsg">点击打开 Dialog</el-button>

      <el-dialog title="提示" v-model="dialogVisible" size="tiny">
        <span>{{msg}}</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <hr>
    <div>
      <div class="block">
        <span class="demonstration">默认 Hover 指示器触发</span>
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 3">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <hr>
    <div>
      <el-button type="success" @click="open1">成功</el-button>
      <el-button type="warning" @click="open2">警告</el-button>
      <el-button type="info" @click="open3">消息</el-button>
      <el-button type="danger" @click="open4">错误</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      delivery: false,
      dialogVisible: false,
      msg: '',
    }
  },
  methods: {
    press() {
      this.loading = true;
      setTimeout(o => {
        this.loading = false;
      }, 2000);
    },
    showMsg() {
      this.dialogVisible = true;
      this.msg = Date.now();
    },
    open1() {
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success'
      });
    },
    open2() {
      this.$notify.warning({
        title: '警告',
        message: '这是一条警告的提示消息',
        type: 'success'
      });
    },
    open3() {
      this.$notify.info({
        title: '消息',
        message: '这是一条消息的提示消息'
      });
    },
    open4() {
      this.$notify.error({
        title: '错误',
        message: '这是一条错误的提示消息'
      });
    }
  }
}
</script>

<style scoped>
h3 {
  line-height: 50px;
}
.section {
  line-height: 50px;
}

.el-row {
  margin-bottom: 10px;
  margin-top: 10px;
}
.bg-purple {
  background: #d3dce6;
}
.grid-content {
  min-height: 36px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
