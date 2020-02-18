import React from "react";
import styles from "./styles.module.css";


export default({productName, productPrice, source}) => (
    <div className = { styles.Card }>
            <img className = { styles.Photo } src={source} alt='' />
            <ul className={styles.menu}>
            <li  style={{ display: 'inline-block', textDecoration: 'none', alignSelf: 'center'}}>{productName} &nbsp; &nbsp; <b>{productPrice}</b></li>
            </ul>
    </div>
);