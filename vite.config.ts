import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'
import { fileURLToPath, URL } from 'url';
import { resolve } from 'path'
const config: UserConfig = {
  plugins: [vue(), ssr()],
  server: {
    port: 3333,
    open: true,
    cors: true,
    proxy: {
      '/api': {
          // target: 'http://localhost:3000',
        target: 'http://114.132.50.228:3000',
        changeOrigin: true,
        // rewrite: (path) => path.replace('/api', '')
      }
    }
  },
  // resolve:{
  //   alias:{
  //     '@':fileURLToPath(new URL('./src',import.meta.url)),
  //     '@images':resolve('./src/assets/img')
  //   }
  // }
}

export default config
