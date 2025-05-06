import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    hmr: {
      clientPort: 5173, // Asegura el puerto correcto (opcional)
      overlay: true,    // Muestra errores encima de la app
      timeout: 30000,   // 30 segundos para reconectar (subimos el timeout)
      reconnect: true,  // 🔥 Reintenta reconexión automática
    },
    host: true, // permite conexiones externas
    allowedHosts: ['https://631b-85-138-137-71.ngrok-free.app', '631b-85-138-137-71.ngrok-free.app']
  }
})
