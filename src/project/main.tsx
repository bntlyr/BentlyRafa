import { createRoot } from 'react-dom/client'
import '../index.css'
import Project from './projects.tsx'

createRoot(document.getElementById('root')!).render(
  <Project />
)
