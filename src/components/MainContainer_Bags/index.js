import React from 'react'
import Card from '../Card2'
import styles from './styles.module.css'
import { Link } from 'gatsby'


const product = () => {
    return(
        <div className = {styles.MainContainer}>
        <Link to='Products/OneProduct'>
            <Card productName='Black handbag' productPrice='30,00 $' source='https://cdn.shopify.com/s/files/1/0264/0393/0164/products/product-image-781614916_250x.jpg?v=1570469905' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Purple bag for girls' productPrice='50,00 $' source='https://cdn.shoplightspeed.com/shops/615866/files/10075729/monnalisa-monnalisa-girls-purse.jpg' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Crossbody white bag' productPrice='30,00 $' source='https://m.media-amazon.com/images/I/51HmK5f4CfL._SR500,500_.jpg' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Crossbody-handbag' productPrice='25,00 $' source='https://5.imimg.com/data5/LT/EY/MY-3020503/ladies-hand-bags2-500x500.jpg' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Shining bag' productPrice='90,00 $' source='https://mywishcard.com/s/i2/af/8/470x0_rKDcS9YbSRhKCxZVr7n1PdfZTiCcdxmv___jpg____4_4792f7b1.jpg' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Leather black bag' productPrice='60,00 $' source='data:image/jpeg;base64,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' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Crossbody black bag' productPrice='45,00 $' source='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSogqfZdCG_kC4VvksKm58OVDWG1FzG5wyyyhdyPXKkvdz6MEgE' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Caramel bag' productPrice='40,00 $' source='https://www.floro.me/wp-content/uploads/2018/05/FHB-119-brown.jpg' />
        </Link>
        <Link to='Products/OneProduct'>
        <Card productName='Modern crossbody bag' productPrice='150,00 $' source='https://shop.r10s.jp/auc-horita78/cabinet/goq012/37489_1.jpg' />
        </Link>
        
        
 </div>

    )
}

export default product

