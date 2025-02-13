import { MantineProvider } from '@mantine/core'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route } from 'react-router'
import App from './pages/app.tsx'
import '@mantine/core/styles.css'
import './main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <Route path="/" element={<App />} />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
)
