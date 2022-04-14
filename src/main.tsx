import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css'
import 'uno.css'

import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
