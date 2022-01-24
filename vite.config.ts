import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
// @ts-ignore
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      // 配置选项
      cache: false
    }),
    vueJsx({

    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 全局scss变量
        additionalData: "@import '@/styles/var.scss';"
      }
    }
  },
  server: {
    proxy: {
      '/admin': {
        target: 'https://shop.fed.lagounews.com/api',
        changeOrigin: true
      }
    }
  }
})
