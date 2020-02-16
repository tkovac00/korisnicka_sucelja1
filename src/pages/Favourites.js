import React from "react"
import Layout from "../components/Layout/layout"
import Head from "../components/head"
import { MainContainer_Favourites } from '../components'

const FavouritesPage = () => (
 <Layout>
   <Head title="Favourites" />
   <div>
   <h1 style={{textAlign: 'center', marginTop: '-10px',opacity: '0.8'}}>Favourites</h1>
      <hr style={{border: '0.3px solid black',opacity: '0.8', marginTop: '-10px'}} />

      <MainContainer_Favourites />
   </div>
    </Layout> 
  )
  
  export default FavouritesPage
 
  