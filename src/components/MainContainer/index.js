import React from 'react'
import Card from '../Card'
import styles from './styles.module.css'
import { Link } from 'gatsby'


const products = () => {
    return(
         <div className = {styles.MainContainer}>
             <Link to='Products/Clothes' style={{opacity: '0.8'}}>
                 <Card productName='CLOTHES' source='https://images.dresshead.com/images/top/Pink%20Tops/5955118/5955118.jpg' />
             </Link>
             <Link to='Products/Shoes' style={{opacity: '0.8'}}>
                 <Card productName='SHOES' source='https://www.dhresource.com/0x0/f2/albu/g5/M01/F5/B3/rBVaJFjWJrOAQ3_sAADEUds8SKY024.jpg' />
             </Link>
             <Link to='Products/Bags'>
                 <Card productName='BAGS' source='https://cf.shopee.ph/file/7c6366a53e9a1f8ab066d630b60245f2' />
             </Link>
             <Link to='Products/Accessories' style={{opacity: '0.9'}}>
                 <Card productName='ACCESSORIES' source='https://i1.adis.ws/i/lucky/20190606_accessories_image4' />
             </Link>
      </div>

    )
}

export default products

