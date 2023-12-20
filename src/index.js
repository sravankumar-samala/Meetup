import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {MeetupContextProvider} from './context/meetupContext'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MeetupContextProvider>
        <App />
      </MeetupContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
