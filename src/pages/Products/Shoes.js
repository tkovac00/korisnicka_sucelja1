import React from "react"
import Layout from '../../components/Layout/layout'
import Head from '../../components/head'
import { MainContainerShoes } from '../../components'

const ShoesPage = () => (
 <Layout>
   <Head title="Clothes" />
   <div>
   <h1 style={{textAlign: 'center', marginTop: '-10px',opacity: '0.8'}}>Shoes</h1>
      <hr style={{border: '0.3px solid black',opacity: '0.8', marginTop: '-10px'}} />
      <MainContainerShoes />
   </div>
    </Layout> 
  )
  
  export default ShoesPage
 
