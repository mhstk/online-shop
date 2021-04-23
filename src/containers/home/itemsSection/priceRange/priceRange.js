import React from 'react';
import styles from "./priceRange.module.css";
const PriceRange = (props) => {
    return (
        <div className={styles.priceRange}>
            <h3> تنظیم قیمت کالا</h3>
            <div className={styles.line}/>
            <p>محل قرارگیری ازون یاروها</p>
        </div>
    );
};

export default PriceRange;