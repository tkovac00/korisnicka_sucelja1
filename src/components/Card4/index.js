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
                    <ul className={styles.prvi}>
                        <li style={{ display: 'inline-block', textDecoration: 'none', float: 'left'}}>{productName} &nbsp;<b>{productPrice}</b></li>
                        <li style={{ display: 'inline-block', textDecoration: 'none', float: 'right'}}><b></b></li>               
                    </ul>
                    </div>
                    <div className={styles.drugi}>
                    <p  className={styles.vel} style={{ display: 'inline-block', paddingTop: '20px'}}>Size:&nbsp; </p> 
                            <select id="size" style={{width: '20%'}}>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                    &nbsp;
                    <p  style={{ display: 'inline-block',paddingRight:'5px'}}>Quantity: </p> 
                            <input type="number" className={styles.treci} name="quantity"  defaultValue="1" min="1" style={{width: '15%'}}></input>
                            
                            </div>
                <div>
                <button className={styles.button2}>Remove</button>
                </div>
            </div>
            
        </div>                
    </div>
);