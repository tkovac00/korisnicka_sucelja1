import React from "react";
import { navigate } from "gatsby";
import { isLoggedIn } from '../../services/auth/auth';

const PrivateRoute = ({ render: Component, redirect, ...rest }) => {
  if (!isLoggedIn()) {
    redirect && navigate(redirect);
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;