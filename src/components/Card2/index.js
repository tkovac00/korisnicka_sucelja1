import React from "react";
import styles from "./styles.module.css";


export default({productName, productPrice, source}) => (
    <div className = { styles.Card }>
            <img className = { styles.Photo } src={source} alt='' />
            <ul class="menu">
                <li style={{ display: `inline-block`,textDecoration: 'none', float: 'left'}}>{productName}</li>
                <li style={{ display: `inline-block`,textDecoration: 'none', float: 'right'}}><b>{productPrice}</b></li>
            </ul>
    </div>
);