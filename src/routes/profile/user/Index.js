import React, { Suspense, lazy } from "react";
import { Switch, Redirect } from "react-router-dom";
import RouteWithLayout from "../../RouteWithLayout";

const HomePage = lazy(() =>
    import("../../../atomic/pages/profile/user/home/Index")
);
const Login = lazy(() => import("../../../atomic/pages/auth/Login"));
const DefaultLayout = lazy(() => import("../../layouts/Default/Index"));
const LoginLayout = lazy(() => import("../../layouts/Login/Index"));

const UserRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <RouteWithLayout
                component={HomePage}
                exact={true}
                isPrivate={true}
                layout={DefaultLayout}
                path="/"
            />

            <RouteWithLayout
                component={Login}
                isPrivate={false}
                layout={LoginLayout}
                path="/login"
            />

            <Redirect to="/not-found" />
        </Switch>
    </Suspense>
);
export default UserRouter;
