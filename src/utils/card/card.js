import React from 'react';
import styles from "./card.module.css";
const Card = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.image} alt="product image"/>
            <h2>{props.title}</h2>
            <p className={styles.category}>{props.category}</p>
            <div className={styles.line}/>
            <div className={styles.bottom}>
                <p>{props.price} تومان</p>
                <button onClick={(e) => props.onClick(e, props.id)}>{props.button}</button>
            </div>
        </div>
    );
};

export default Card;