import pandacss from '@pandacss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [pandacss(), vue()],
  server: {
    watch: { ignored: ['!**/node_modules/@ds/**'] },
  },
})
