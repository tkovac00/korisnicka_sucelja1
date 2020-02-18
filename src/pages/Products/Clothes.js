import React, {Component} from "react";
import Layout from '../../components/Layout/layout'
import { MainContainer2 } from '../../components';
import { Clothes } from '../../components';
import { graphql } from "gatsby";

export default ({ 
    data: {
        allClothesJson: { edges: clothes }
    } 
}) => {
    return (
        <>
        <Layout>
        <Clothes clothes = {clothes}/>
        </Layout>
        </>
    );
};

export const query = graphql`{
  allClothesJson {
      edges {
        node {
          id
          price
          image {
            src
          }
        }
      }
    }
  }
  
  `;



  
  
  
 
  
  
  
  
  
  
 
