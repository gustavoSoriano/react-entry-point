import React from "react"
import { isAuthenticated } from "../services/auth"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import Home from '../pages/home/Index'
import Login from '../pages/auth/Login'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest} 
    render={
      props => isAuthenticated() ? <Component {...props} /> : <Redirect to={{ pathname: "/", state: { from: props.location } }} /> 
    }
  />
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <Login />} />
      <PrivateRoute path="/app" component={() => <Home />} />
    </Switch>
  </BrowserRouter>
)

export default Routes
