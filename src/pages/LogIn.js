import React from "react";
import Layout from "../components/Layout/layout"
import Head from "../components/head"
import { PrivateRoute } from "../components";
import { Router } from "@reach/router";
import Login from "../components/Private/Login";
import Dashboard from "../components/Private/pages/Dashboard.js";
import {
  handleLogin,
  handleLogout,
  isLoggedIn
} from "../services/auth/auth.js";
import { navigate } from "gatsby";
import styles from "../styles/pages/private.module.css";
const Logout = () => (
   <a
    href="/"
    onClick={event => {
      event.preventDefault();
      handleLogout();
      navigate("/login");
    }}
    className = {styles.button}
  >
    Logout
  </a>
);

export default () => (
  <>
    <Layout>
      <Head title="Log in" />
      <div>
      <h1 style = {{textAlign: 'center', marginTop: '-10px', opacity: '0.8'}}>Log in</h1>
      <hr style ={{border: '0.3px solid black', marginTop: '0px', opacity: '0.8'}}></hr>
    {isLoggedIn() ? 
      <Logout />
     : (
      <>
        
        <Login private="/private/dashboard" handleLogin={handleLogin} />
      </>
    )}
    <Router>
      <PrivateRoute
        path="/private/dashboard"
        render={Dashboard}
        redirect={"/login"}
      />  
    </Router>
    </div>
    </Layout>
  </>
);








//   import React from "react"
// import Layout from "../components/Layout/layout"
// import Head from "../components/head"

// const LogInPage = () => (
//  <Layout>
//    <Head title="Log in" />
//    <div>
//       <h1 style = {{textAlign: 'center', marginTop: '-10px', opacity: '0.8'}}>Log in</h1>
//       <hr style ={{border: '0.3px solid black', marginTop: '-10px', opacity: '0.8'}}></hr>
//    </div>
//      </Layout>
//   )
  
//   export default LogInPage
 
  