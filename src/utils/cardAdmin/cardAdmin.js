import React from 'react';
import styles from "./cardAdmin.module.css";
const CardAdmin = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.badge_cont}>
                <p className={styles.badge}>{props.sold}</p>
            </div>
            <img src={props.image} alt="product image"/>
            <h2>{props.title}</h2>
            <p className={styles.category}>{props.category}</p>
            <p className={styles.category}>باقی مانده: {props.available}</p>
            <div className={styles.line}/>
            <div className={styles.bottom}>
                <p>{props.price} تومان</p>
                <button onClick={(e) => props.onClick(e, props.id)}>{props.button}</button>
            </div>
        </div>
    );
};

export default CardAdmin;