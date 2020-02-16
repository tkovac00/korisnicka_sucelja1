import React from 'react'
import Card from '../Card4'
import styles from './styles.module.css'
import { Link } from 'gatsby'

const product = () => {
    return( 
        
        <div className = {styles.MainContainer}>
           
            <Card productName='Oversized jumper' productPrice='25,00 $' source='https://www.epopeia.org/image/cache/data/category_4/oversize_turtleneck_knitted_womens_sweater_pullovers_long_batwing_sleeve_winter_solid_women_sweaters_2019_loose_basic_jumper_womens_clothing-400x400.jpg' />
            <Card productName='Coat with belt' productPrice='70,00 $' source='https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/421055/item/goods_32_421055.jpg?width=250' /> 
            <Card productName='Yellow jumper' productPrice='19,00 $' source='https://cdn.laredoute.com/products/680by680/3/1/8/3181ba737a1c486d2b18a0fb5f6eb2e0.jpg' />
         </div>
         

    )
}

export default product

