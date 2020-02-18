import React, {Component} from "react";
import Layout from "../components/Layout/layout"
import Head from "../components/head"
import { Favourites } from '../components'
import { graphql } from "gatsby";

   
     export default ({ 
         data: {
             allFavouritesJson: { edges: favourites }
         } 
     }) => {
         return (
             <>
             <Layout>
             <Favourites favourites = {favourites}/>
             </Layout>
             </>
         );
     };
     
     export const query = graphql`{
       allFavouritesJson {
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
    
   
    
    
    
    
    
    
   
  
  