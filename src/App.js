import React, { Component } from 'react'
//router dom creates routes to navigate within react front end
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from './components/layout/NavBar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetail from './components/projects/ProjectDetail'
import ProjectSummary from './components/projects/ProjectSummary'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        {/* switch is going to match the first route that comes up */}
        <Switch>
          {/* exact make sure it only works if path matchs 100% */}
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetail} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
