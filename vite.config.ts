import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import unoCss from 'unocss/vite';
import { presetIcons, presetAttributify, presetUno } from 'unocss';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      dts: 'src/auto-import.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    unoCss({
      presets: [presetAttributify(), presetIcons(), presetUno()],
      rules: [
        ['flex', { display: 'flex' }],
        ['red', { background: 'red' }]
      ],
      shortcuts: {

      }
    }),

  ], server: {
    port: 3333,
    open: true,
    cors: true,
    proxy: {
      '/apiTest': {
        target: 'http://114.132.50.228:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace('/apiTest', '')
      }
    }
  }
})
