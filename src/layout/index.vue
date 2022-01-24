<template>
  <a-layout>
    <a-layout-sider
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
    >
      <div class="logo" :style="{ height: '70px' }">Logo</div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1" @click="gotoPage('home')">
          <user-outlined />
          <span class="nav-text">Home</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header
        :style="{ background: '#fff', paddingLeft: '16px', height: '70px' }"
      >
        你好啊
      </a-layout-header>
      <a-layout-content
        :style="{
          padding: '24px 16px 0',
          overflow: 'initial',
          height: 'calc(100vh - 70px - 70px)',
        }"
      >
        <div
          :style="{
            padding: '24px',
            background: '#fff',
            textAlign: 'center',
            height: '100%',
            overflow: 'auto',
          }"
        >
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center', height: '70px' }">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
} from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  name: 'AppLayout',
  components: {
    UserOutlined,
    // VideoCameraOutlined,
    // UploadOutlined,
    // BarChartOutlined,
    // CloudOutlined,
    // AppstoreOutlined,
    // TeamOutlined,
    // ShopOutlined,
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const gotoPage = (url: string) => {
      router.push({
        path: url,
        query: {
          ...route.query,
        },
      })
    }
    return {
      selectedKeys: ref<string[]>(['4']),
      gotoPage,
    }
  },
})
</script>
<style lang="scss" scoped>
.logo {
  background: rgba(255, 255, 255, 0.2);
  color: $blue;
  display: flex;
  align-items: center;
  // justify-content: center;
  font-size: 32px;
  font-weight: 700;
  padding-left: 20px;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
