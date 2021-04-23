import React from 'react';
import styles from "./sorter.module.css";

const Sorter = (props) => {
    return (
        <div className={styles.sorter}>
            <p>مرتب‌سازی بر اساس:</p>
            <button className={styles.active}>بیشترین فروش</button>
            <button >قیمت</button>
        </div>
    )
};

export default Sorter;