// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// ⚠️ Note: This is for local testing only.
// Before running `npm run build` for deployment, switch `base` back to '/ReadyNav/'
export default defineConfig({
  plugins: [react(), svgr()],
  base: '/', // <-- Local testing base path
})
