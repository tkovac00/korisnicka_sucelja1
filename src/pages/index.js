import React from "react"
import Layout from "../components/Layout/layout"
import "../components/body.css"
import Image from "../components/image"
import Head from "../components/head"
//import {graphql, useStaticQuery} from "gatsby"
//import Img from "gatsby-image"
//import HomeGallery from "../components/home-page/home-gallery"
//import HomeService from"../components/home-page/home-service"
//import "../components/layout.css"
import { MainContainer } from '../components'




const HomePage = () => {
 
  return(
      
    <Layout>
      <Head title="Home"/>
      <div style={{width: '1000px',height: '400px',marginLeft: 'auto',marginRight: 'auto',paddingBottom: '20px'}}>
      <Image style={{ width: '1000px',height: '400px'}}> </Image>
    </div> 

    <div style={{width: '750px', marginLeft: 'auto', marginRight:'auto',display: 'flex',flexDirection: 'column',
    paddingTop: '20px'}}><p>Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
        an unknown printer took a galley of type and scrambled it to make a type specimen book. ItLorem Ipsum is simply dummy text
         of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and scrambled it to make a type specimen book. It</p> </div>    
    
    <MainContainer />
   
    </Layout>
  )
}

export default HomePage








/*


import React from "react";
import { MainContainer } from '../components';



 export default () => {
    return ( 
            
            <MainContainer />
        
    );
 };
  

const data = useStaticQuery(graphql` 
  query   {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)
<h1 style={{textAlign: 'center'}}>{data.site.siteMetadata.title}</h1>
    /*  
  const upit = useStaticQuery(graphql`
  query  {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "slideshow" }
      }
    ) {
      edges {
        node {
          ... on File {
            childImageSharp {
              original {
                src
              }
            }
          }
        }
      }
    }
  }
`)  
   */ 
    
   
 
  