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
            <Card productName='Purple bag for girls' productPrice='50,00 $' source='https://cdn.shoplightspeed.com/shops/615866/files/10075729/monnalisa-monnalisa-girls-purse.jpg' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Shining bag' productPrice='90,00 $' source='https://mywishcard.com/s/i2/af/8/470x0_rKDcS9YbSRhKCxZVr7n1PdfZTiCcdxmv___jpg____4_4792f7b1.jpg' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Roll neck jumper' productPrice='22,00 $' source='https://www.stormfashion.co.uk/wp-content/uploads/2019/11/Set-Oversized-Roll-Neck-Sweatshirt-In-Rose-front-250x250.jpg' />
        </Link>      
 </div>

    )
}

export default product

