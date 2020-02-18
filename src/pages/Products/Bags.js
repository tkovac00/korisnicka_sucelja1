 
  import Layout from '../../components/Layout/layout';
  import Head from '../../components/head';
  import { MainContainer_Bags } from '../../components';
  import React, {Component} from "react";
  import { Bags } from '../../components';
  import { graphql } from "gatsby";
     
     export default ({ 
         data: {
             allBagsJson: { edges: bags }
         } 
     }) => {
         return (
             <>
             <Layout>
             <Bags bags = {bags}/>
             </Layout>
             </>
         );
     };
     
     export const query = graphql`{
       allBagsJson {
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
    
   
    
    
    
    
    
    
   
  