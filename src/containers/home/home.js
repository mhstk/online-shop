import React from 'react';
import styles from "./home.module.css"
import Hero from "./hero/hero";
import Sorter from "./itemsSection/sorter/sorter";
const Home = (props) => {
    return (
        <div className={styles.home}>
            <Hero/>
            <section className={styles.section}>
                <Sorter/>
            </section>
        </div>
    );
};

export default Home;