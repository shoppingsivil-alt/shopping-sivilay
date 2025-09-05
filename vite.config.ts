import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // If deploying to https://<USER>.github.io/<REPO>/, set base to '/<REPO>/'
  base: '/shopping-sivilay/',
})
