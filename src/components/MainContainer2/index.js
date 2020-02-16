import React from 'react'
import Card from '../Card2'
import styles from './styles.module.css'
import { Link } from 'gatsby'



const product = () => {
    return(
        <div className = {styles.MainContainer}>
        <Link to='Products/OneProduct'>
            <Card productName='Oversized jumper' productPrice='25,00 $' source='https://www.epopeia.org/image/cache/data/category_4/oversize_turtleneck_knitted_womens_sweater_pullovers_long_batwing_sleeve_winter_solid_women_sweaters_2019_loose_basic_jumper_womens_clothing-400x400.jpg' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Coat with belt' productPrice='70,00 $' source='https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/421055/item/goods_32_421055.jpg?width=250' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Yellow jumper' productPrice='19,00 $' source='https://cdn.laredoute.com/products/680by680/3/1/8/3181ba737a1c486d2b18a0fb5f6eb2e0.jpg' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Roll neck jumper' productPrice='22,00 $' source='https://www.stormfashion.co.uk/wp-content/uploads/2019/11/Set-Oversized-Roll-Neck-Sweatshirt-In-Rose-front-250x250.jpg' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Bomber jacket' productPrice='33,00 $' source='https://cdn.shopify.com/s/files/1/0008/8116/4339/products/perfect-bomber-black-1_250x.jpg?v=1571352071' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Floral dress' productPrice='17,00 $' source='https://ae01.alicdn.com/kf/UTB8ZO2FvODEXKJk43Oqq6Az3XXaZ.jpg' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Leggings' productPrice='20,00 $' source='https://contents.mediadecathlon.com/p1705298/k$db286aa46dafc9745152988c15f2de0c/women-s-high-waist-fitness-leggings-black.jpg?&f=250x250' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Coctail dress' productPrice='35,00 $' source='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYyq_FGUhg7-oCkxQDd44c_08D_c0uiAPtf7JWxvB1Xi6DQBrG' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Puff sleeve jumper' productPrice='21,00 $' source='https://www.urbankissed.com/images/thumbnails/250/250/detailed/14/c48825d8_e081.jpg' />
        </Link>
        
 </div>
    )
}

export default product;

