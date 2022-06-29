<template>
  <div class="common-layout">
    <el-container class="common-layout">
      <el-aside :width="collapse ? '62.882px' : '300px'">
        <div class="home-log">
          <img
            class="log"
            src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
            alt=""
          />

          <h1 class="logo-title" v-if="!collapse">imooc-admin</h1>
        </div>
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          :collapse="collapse"
          :collapse-transition="false"
        >
          <el-menu-item index="2">
            <el-icon
              ><svg-icon
                @click="collapse = false"
                className="svg-personnel"
                icon="personnel"
              ></svg-icon
            ></el-icon>
            <span>个人中心</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon
              ><svg-icon
                @click="collapse = false"
                className="svg-introduce"
                icon="introduce "
              ></svg-icon
            ></el-icon>
            <span>数据可视化</span>
          </el-menu-item>
          <el-sub-menu index="1">
            <template #title>
              <el-icon
                ><svg-icon
                  @click="collapse = false"
                  className="svg-personnel"
                  icon="personnel"
                ></svg-icon
              ></el-icon>
              <span>用户</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">员工管理</el-menu-item>
              <el-menu-item index="1-2">角色列表</el-menu-item>
              <el-menu-item index="1-3">权限列表</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="4">
            <template #title>
              <el-icon
                ><svg-icon
                  @click="collapse = false"
                  className="svg-article"
                  icon="article"
                ></svg-icon
              ></el-icon>
              <span>文章</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">文章排名</el-menu-item>
              <el-menu-item index="2-2">创建文章</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="headone">
            <el-icon v-if="collapse == true"
              ><svg-icon
                class="icon"
                @click="collapse = false"
                className="svg-hamburger-closed"
                icon="hamburger-closed"
              ></svg-icon
            ></el-icon>
            <el-icon
              ><svg-icon
                class="icon"
                @click="collapse = true"
                v-if="collapse == false"
                className="svg-hamburger-opened"
                icon="hamburger-opened"
              ></svg-icon
            ></el-icon>
            <p>{{ value.joy }}</p>
          </div>
        </el-header>
        <el-main> </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
const collapse = ref(false)
const value = reactive({
  joy: 'value'
})
</script>
<style>
.el-icon {
  /* margin-right: 10px; */
  padding-right: 20px !important;
}
.icon {
  margin-top: 5px;
  /* font-size: 30px; */
  /* width: 30px; */
  /* font-size: 30px; */
  width: 30px;
}
.headone {
  width: 10%;
  font-size: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.home-log {
  /* width: 100%; */
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.logo-title {
  margin-top: 20px;
  margin-left: 10px;
  color: #fff;
  font-weight: 600;
  line-height: 60px;
  font-size: 20px;
  white-space: nowrap;
}
.log {
  margin-top: 26px;
  height: 50px;
  width: 50px;
}
.el-menu {
  height: 90%;
  margin: 0;
}
.common-layout,
.el-aside {
  height: 100%;
}
.el-menu span {
  font-size: 25px;
  color: rgb(219, 219, 219);
}
.el-menu .el-menu-item {
  font-size: 20px;
  color: rgb(219, 219, 219);
}
.el-aside .el-menu,
.home-log,
.el-sub-menu__title {
  background-color: rgb(48, 65, 86) !important;
}
.el-menu-item.is-active {
  color: white !important;
}
</style>
