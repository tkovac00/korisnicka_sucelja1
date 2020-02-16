import React from "react"
import Layout from '../../components/Layout/layout'
import Head from '../../components/head'
import { MainContainer_Accessories } from '../../components'

const AccessoriesPage = () => (
 <Layout>
   <Head title="Accessories" />
   <div>
   <h1 style={{textAlign: 'center', marginTop: '-10px',opacity: '0.8'}}>Accessories</h1>
      <hr style={{border: '0.3px solid black',opacity: '0.8', marginTop: '-10px'}} />
      <MainContainer_Accessories />
   </div>
    </Layout> 
  )
  
  export default AccessoriesPage

  
 
