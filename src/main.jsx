import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'aos/dist/aos.css';  // Importa los estilos de AOS
import './index.css'
import AOS from 'aos';

AOS.init();  // Inicializa AOS

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
