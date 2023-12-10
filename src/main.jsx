import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css'
import { Authenticator } from '@aws-amplify/ui-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Authenticator>
    <App />
  </Authenticator>
  </React.StrictMode>,
)
