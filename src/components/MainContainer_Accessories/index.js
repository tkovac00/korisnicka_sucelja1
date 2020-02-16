import React from 'react'
import Card from '../Card2'
import styles from './styles.module.css'
import { Link } from 'gatsby'


const product = () => {
    return(
        <div className = {styles.MainContainer}>
        <Link to='Products/OneProduct'>
            <Card productName='Pink scarf' productPrice='18,00 $' source='https://i.pinimg.com/originals/c6/3f/47/c63f4720ede654aa0c618dfaab3c26fd.jpg' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Black sun hat' productPrice='25,00 $' source='https://cdn.shopify.com/s/files/1/2330/3481/products/20537180_1_1024x1024.jpg?v=1522731305' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Gold earrings' productPrice='70,00 $' source='https://www.youme-jewelry.com/tim/1000x1000/303/CV1545575141VC/315462-womens-earrings-womens-jewelry-yellow-gold-1.jpg' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Silver blue earrings' productPrice='45,00 $' source='https://hexyo.co.uk/wp-content/uploads/2017/11/57.png' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Grey cashmere scarf' productPrice='90,00 $' source='https://i.etsystatic.com/16367660/r/il/563a03/1776528420/il_570xN.1776528420_nife.jpg' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Black sunglasses' productPrice='40,00 $' source='https://i.ebayimg.com/images/g/6p0AAOSwpJRdrzPe/s-l400.jpg' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Silver heart necklace' productPrice='55,00 $' source='https://www.jewellerybox.co.uk/images/products/xlarge/CHZ-720-0659_Sterling_Silver_Floating_Heart_Pendant_on_Chain.jpg' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Brown sunglasses' productPrice='35,00 $' source='https://aromacraze.com/images/thumbs/0033497_prada-spr-09q-2au-6s1-brownbrown-by-prada-for-women-49-26-140-mm-sunglasses_550.jpeg' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Warm pink hat' productPrice='12,00 $' source='https://ae01.alicdn.com/kf/HTB152U_weuSBuNjSsziq6zq8pXaX/Fashion-Winter-Women-s-Hat-Scarf-Set-of-Hat-And-Scarf-For-Women-Girl-Warm-Beanies.jpg_640x640.jpg' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='White cashmere scarf' productPrice='110,00 $' source='https://www.pashminawear.com/484-large_default/off-white-cashmere-scarf-in-twill-weave.jpg' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Modern pink sunglasses' productPrice='26,00 $' source='https://www.claires.com/dw/image/v2/BBTK_PRD/on/demandware.static/-/Sites-master-catalog/default/dw64385f22/images/hi-res/83109_1.jpg?sw=734&sh=734&sm=fit' />
        </Link>
        <Link to='Products/OneProduct'>
            <Card productName='Gold necklace' productPrice='98,00 $' source='https://staticimg.titan.co.in/Tanishq/Catalog/5111392OBAAA00_2.jpg' />
        </Link>
        
 </div>

    )
}

export default product

