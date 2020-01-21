import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import theme from './Theme'
import Layout from './Components/Layout'
import Routes from './Routes'
import Loader from './Components/Loader'

const history = createBrowserHistory()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Layout>
          <React.Suspense fallback={<Loader />}>
            <Routes />
          </React.Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
