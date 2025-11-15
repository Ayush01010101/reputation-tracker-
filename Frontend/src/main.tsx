import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.tsx'

const ClerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!ClerkKey) {
  throw new Error('ClerkKey Not Found In .ENV')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <ClerkProvider publishableKey={ClerkKey}>
      <App />

    </ClerkProvider>

  </StrictMode >,
)
