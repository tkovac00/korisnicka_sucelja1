import React from "react";
import styles from "./styles.module.css";

export default({productName, source}) => (
    <div className = { styles.Card }>
            <img className = { styles.Photo } src={source} alt='' />
            <h2>{productName}</h2>
    </div>
);