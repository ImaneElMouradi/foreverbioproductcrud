import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isLoginAdmin } from "../utils/isLogin";

const PrivateRouteAdmin = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !isLoginAdmin() ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

export default PrivateRouteAdmin;
