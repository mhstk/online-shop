import React from 'react';
import styles from "./hero.module.css";
import clock from "../../../assets/clock.png"
const Hero = (props) => {
    return (
        <div className={styles.hero}>
            <h1>در محصولات سایت جستجو کنید...</h1>
            <input type="text" placeholder="نام محصول خود را وارد کنید"/>
            <button>جستجو کنید</button>
            <img src={clock} alt="clock"/>
        </div>
    );
};

export default Hero;