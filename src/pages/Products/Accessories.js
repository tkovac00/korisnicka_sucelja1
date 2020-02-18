import { MainContainer_Bags } from '../../components';
import React, {Component} from "react";
import { Accessories } from '../../components';
import { graphql } from "gatsby";
import Layout from '../../components/Layout/layout'
import Head from '../../components/head'


      export default ({ 
          data: {
              allAccessoriesJson: { edges: accessories }
          } 
      }) => {
          return (
              <>
              <Layout>
              <Accessories accessories = {accessories}/>
              </Layout>
              </>
          );
      };
      
      export const query = graphql`{
        allAccessoriesJson {
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
