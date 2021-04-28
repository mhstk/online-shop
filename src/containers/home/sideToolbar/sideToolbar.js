import React, {useState} from 'react';
import styles from "./sideToolbar.module.css";
import Sorter from "../itemsSection/sorter/sorter";
import Categories from "../itemsSection/categories/categories";
import DoubleSlider from "../itemsSection/priceRange/doubleSlider/doubleSlider";
import PriceRange from "../itemsSection/priceRange/priceRange";
import useSwipeLeft from "../../../hooks/useSwipeLeft";
const SideToolbar = (props) => {
    const {handleTouchStart,handleTouchMove,handleTouchEnd} = useSwipeLeft(props.closeHandler);
    return (
        <div className={styles.sidenav} ref={props.sideToolbarRef}
             onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <button className={styles.closebtn} onClick={props.closeHandler}>&times;</button>
            <Sorter/>
            <Categories maxHeight="300px"/>
            <PriceRange/>
        </div>
    );

};

export default SideToolbar;