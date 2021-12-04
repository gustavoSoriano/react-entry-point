import React, { Suspense, lazy } from "react";
import { Switch, Redirect } from "react-router-dom";
import RouteWithLayout from "../../RouteWithLayout";

const HomePage = lazy(() =>
    import("../../../atomic/pages/profile/admin/home/Index")
);
const Login = lazy(() => import("../../../atomic/pages/auth/Login"));
const DefaultLayout = lazy(() => import("../../layouts/Default/Index"));

const AdminRouter = () => (
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
                exact={false}
                isPrivate={false}
                layout={DefaultLayout}
                path="/login"
            />

            <Redirect to="/not-found" />
        </Switch>
    </Suspense>
);
export default AdminRouter;
