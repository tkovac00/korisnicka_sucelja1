 
  import Layout from '../../components/Layout/layout';
  import Head from '../../components/head';
  import { MainContainer_Bags } from '../../components';
  import React, {Component} from "react";
  import { Shoes } from '../../components';
  import { graphql } from "gatsby";
     
     export default ({ 
         data: {
             allShoesJson: { edges: shoes }
         } 
     }) => {
         return (
             <>
             <Layout>
             <Shoes shoes = {shoes}/>
             </Layout>
             </>
         );
     };
     
     export const query = graphql`{
       allShoesJson {
           edges {
             node {
               id
               price
               link
               image {
                 src
               }
             }
           }
         }
       }
       
       `;
    
   
    
    
    
    
    
    
   
  