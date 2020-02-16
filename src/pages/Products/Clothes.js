import React, {Component} from "react";
import Layout from '../../components/Layout/layout';
import Head from '../../components/head';
import { MainContainer2 } from '../../components';

const ClothesPage = () => (
 <Layout>
   <Head title="Clothes"/>
    <div>
      <h1 style = {{textAlign: 'center', marginTop: '-10px', opacity: '0.8'}}>Clothes</h1>
      <hr style ={{border: '0.3px solid black', marginTop: '-10px', opacity: '0.8'}}></hr>
      <MainContainer2 />
    </div>
  </Layout> 
)
  
export default ClothesPage



  
  
  
 
  
  
  
  
  
  
 
