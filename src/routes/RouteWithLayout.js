import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const RouteWithLayout = ({ layout: Layout, component: Component, isPrivate, ...rest }) => (
    <Route
        {...rest}
        render={matchProps => isPrivate && !sessionStorage.getItem("jwt") ? <Redirect to={{ pathname: "/login", state: { from: matchProps.location } }} /> : (
            <Layout>
                <Component {...matchProps} />
            </Layout>
        )}
    />
)
export default RouteWithLayout
