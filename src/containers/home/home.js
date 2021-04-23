import React from 'react';
import styles from "./home.module.css"
import Hero from "./hero/hero";
import Sorter from "./itemsSection/sorter/sorter";
import Categories from "./itemsSection/categories/categories";
const Home = (props) => {
    return (
        <div className={styles.home}>
            <Hero/>
            <section className={styles.section}>
                <Sorter/>
                <div className={styles.container}>
                    <div className={styles.sidebar}>
                        <Categories/>
                    </div>
                    <div className={styles.items}>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;