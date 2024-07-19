import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import Icons from 'unplugin-icons/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [

      vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
    }),
    Icons({
      //自动引入图标库
      autoInstall: true,
    }),
  ],
  resolve:{
    alias:{
      '@': path.resolve(__dirname, 'src'),
    }
  },
  css:{
    postcss:{
      plugins:[tailwindcss,autoprefixer]
    }
  },
  server:{
    port:8080,
    host: '0.0.0.0',
    https:false,
    open:true,
    hmr:{
      overlay:false
    },
    proxy:{
      "/api":{
        target:"http://localhost:8888",
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/,"")
      }
    },
  },
  //打包输出
  build:{
    sourceMap:false,
    chunkSizeWarningLimit:4000,
    rollupOptions: {
      input:{
        index:path.resolve("index.html")
      },
      output:{
        chunkFileNames:"static/js/[name].[hash].js",
        entryFileNames:"static/js/[name].[hash].js",
        assetFileNames:"static/[ext]/[name]-[hash].[ext]"
      }
    }
  }
})
