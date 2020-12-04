import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Detail from '../components/Detail'
import MainContent from '../components/MainContent'

export default function Routes() {
  return(
    <Switch>
      <Route path='/' exact component={MainContent}/>
      <Route path='/detail/:name' component={Detail}/>
    </Switch>
  );
}