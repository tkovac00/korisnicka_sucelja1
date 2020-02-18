import React from "react";
import Register from '../components/Private/Register';
import Layout from "../components/Layout/layout"
import Head from "../components/head"


export default () => (
      <>
        <Layout>
          <Head title="Log in" />
          <div>
          <h1 style = {{textAlign: 'center', marginTop: '-10px', opacity: '0.8'}}>Register</h1>
          <hr style ={{border: '0.3px solid black', marginTop: '0px', opacity: '0.8'}}></hr>
          <Register></Register>
          </div>
        </Layout>
      </>
);