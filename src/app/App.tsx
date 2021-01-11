import React, { lazy, useContext } from "react";

import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "../framework/ProtectedRoute";
import rootContext from "../context/root/rootContext";
import "react-block-ui/style.css";
import { Navbar, BlockUI } from "../ui/index";

const Login = lazy(() => import("../pages/login/Login"));
const Register = lazy(() => import("../pages/register/Register"));
const BusinessRegister = lazy(() =>
  import("../pages/business-register/BusinessRegister")
);
const AdminPanel = lazy(() => import("../pages/admin-panel/AdminPanel"));

const App = () => {
  const rootState = useContext(rootContext);

  const publicRoutes = [
    {
      path: "/",
      component: (
        <div style={{ margin: "15rem", fontWeight: "bold" }}>Landing page</div>
      ),
    },
    { path: "/login", component: <Login /> },
    { path: "/register", component: <Register /> },
  ];

  const protectedRoutes = [
    { path: "/business-register", component: <BusinessRegister /> },
    { path: "/admin-panel", component: <AdminPanel /> },
  ];

  return (
    <>
      <BlockUI blocking={rootState?.loading} />
      <Navbar />

      <Switch>
        {publicRoutes.map((route) => {
          return (
            <Route key={route.path} exact path={route.path}>
              {route.component}
            </Route>
          );
        })}

        {protectedRoutes.map((route) => {
          return (
            <ProtectedRoute
              key={route.path}
              exact
              component={route.component}
              path={route.path}
            />
          );
        })}
      </Switch>
    </>
  );
};

export default App;
