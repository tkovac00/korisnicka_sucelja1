import React from 'react'
import Card from '../Card2'
import styles from './styles.module.css'
import { Link } from 'gatsby'


const products = () => {
    return(
         <div className = {styles.MainContainer}>
             <Link to='Products/OneProduct'>
                 <Card productName='Heeled sandals in gold' productPrice='68,00 $' source='https://di2ponv0v5otw.cloudfront.net/posts/2019/04/06/5ca8562bb3e91782f71c1e66/m_5ca85633248f7a013e468aac.jpg' />
             </Link>
             <Link to='Products/OneProduct'>
                 <Card productName='Black heels' productPrice='50,00 $' source='https://schuh.sirv.com/11/1117307060/1117307060-01-01.jpg?scale.option=fill&scale.width=1600&quality=60' />
             </Link>
             <Link to='Products/OneProduct'>
                 <Card productName='Boots with bow' productPrice='190,00 $' source='https://i8.amplience.net/i/office/2682220042_md1.jpg?$newhighres$' />
             </Link>
             <Link to='Products/OneProduct'>
                 <Card productName='White leather sneakers' productPrice='62,00 $' source='https://cdn.shopify.com/s/files/1/0238/2821/products/Womens-193-Royale-Blanco-3RMW-Product-102.jpg?v=1563992609' />
             </Link>
             <Link to='Products/OneProduct'>
                 <Card productName='Heeled boots' productPrice='37,00 $' source='https://anninc.scene7.com/is/image/LO/511804_2222?$pdp2x$' />
             </Link>
             <Link to='Products/OneProduct'>
                 <Card productName='Air max sneakers' productPrice='85,00 $' source='https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_156841_bl&qlt=92&w=363&h=363&v=1' />
             </Link>
             <Link to='Products/OneProduct'>
                 <Card productName='Slippers' productPrice='15,00 $' source='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR82KeTswzBBcOu9wWo69uBYAtUAAF0cHwhxFxNva57YSGxuBN' />
             </Link>
             <Link to='Products/OneProduct'>
                 <Card productName='Running sneakers' productPrice='40,00 $' source='https://tshop.r10s.com/f65/173/6ba7/590d/f0c7/0070/b235/1109ea839c0242ac110002.jpg' />
             </Link>
             <Link to='Products/OneProduct'>
                 <Card productName='Sandals' productPrice='23,00 $' source='https://809fcedc4a4c2e0e3a54-0908f7c4d20fa14a53c9b6a1907a24c5.lmsin.net/1000007740743-Green-1000007740743_01-345.jpg' />
             </Link>
             
      </div>
    )
}

export default products

