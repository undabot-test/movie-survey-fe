import { createRoot } from 'react-dom/client'
import { registerWorker } from '@helpers/register-worker.helper'
import { App } from './components/app'

registerWorker()

const root = createRoot(document.getElementById('root')!)
root.render(<App />)
