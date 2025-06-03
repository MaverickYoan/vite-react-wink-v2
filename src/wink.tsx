import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import wink from './wink.tsx'
import './wink.css'

createRoot(document.getElementById('wink')!).render(
    <StrictMode>
        <wink />
    </StrictMode>,
)
