import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </Provider>
  </React.StrictMode>,
)
