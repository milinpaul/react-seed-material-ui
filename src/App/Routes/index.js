import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../Pages/Home'
import About from '../Pages/About'

const index = () => {
  return (
    <Switch>
      <Route exact={true} path='/' component={Home} />
      <Route exact={true} path='/about-us' component={About} />
    </Switch>
  )
}

export default index
