import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/* This code is rendering the React application to the DOM. It is using the `createRoot` method from
the `ReactDOM` library to create a root element for the React application, and then calling the
`render` method to render the `App` component inside the root element. The `React.StrictMode`
component is used to enable strict mode for the application, which helps catch potential problems
and improve performance. */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
