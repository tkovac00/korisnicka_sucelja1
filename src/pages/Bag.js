import React from "react"
import Layout from "../components/Layout/layout"
import Head from "../components/head"
import { MainContainer4 } from "../components"


const BagPage = () => (
 <Layout>
   <Head title="Bag" />
   <div>
   <h1 style={{textAlign: 'center', marginTop: '0px',opacity: '0.8'}}>Bag</h1>
      <hr style={{border: '0.3px solid black',opacity: '0.8', marginTop: '0px'}} />
      <MainContainer4 />

  </div>
  <ul style={{height: '20%',textAlign: 'center',width: '60%',marginInlineStart: '5%',display: 'inline-block',backgroundColor: '#d1aded'}}>
  <h3 style={{textAlign: 'center',cursor:'pointer'}}><b>TOTAL: 25,00 $</b></h3>
  </ul>
          </Layout>  
  )
  
  export default BagPage


   
  
 
  