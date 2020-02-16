import React from "react";
import styles from "./styles.module.css";
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"

export default({productName, productPrice, source}) => (
    <div className = { styles.Card }>     
        <div className = {styles.upperRow}>
            <div className = {styles.leftColumn}>
                <Link to='Products/OneProduct'><img className = { styles.Photo } src={source} alt='' /></Link>  
            </div>
             
            <div className = {styles.rightColumn}>
                <div>
                    <ul style={{display: 'inline-block', width: '60%'}}>
                        <li style={{ display: 'inline-block', textDecoration: 'none', float: 'left'}}>{productName}</li>
                        <li style={{ display: 'inline-block', textDecoration: 'none', float: 'right'}}><b>{productPrice}</b></li>               
                    </ul>
                    </div>
                    <label for="size" style={{ display: 'inline-block', paddingTop: '20px', width: '8%',marginInlineStart:'8%'}}>Size: </label> 
                            <select id="size">
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                    <div class="quantity" style={{ display: 'inline-block', paddingTop: '20px',marginInlineStart: '5%'}}>
                        
                            <input type="number" id="quantity" name="quantity"  defaultValue="1" min="1" style={{width: '30%'}}></input>

                </div>
            </div>
        </div>                
    </div>
);