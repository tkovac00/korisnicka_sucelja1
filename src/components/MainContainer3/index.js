import React from 'react'
import Card from '../Card3'
import styles from './styles.module.css'


const product = () => {
    return(
        <div className = {styles.MainContainer}>
            <Card productName='Oversized jumper' productPrice='25,00 $' source='https://www.epopeia.org/image/cache/data/category_4/oversize_turtleneck_knitted_womens_sweater_pullovers_long_batwing_sleeve_winter_solid_women_sweaters_2019_loose_basic_jumper_womens_clothing-400x400.jpg' />
         </div>
         

    )
}

export default product

