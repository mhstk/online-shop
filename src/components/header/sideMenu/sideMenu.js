import React, {useState} from 'react';
import styles from "./sideMenu.module.css";
import useSwipeLeft from "../../../hooks/useSwipeLeft";

const SideMenu = (props) => {
    const {handleTouchStart, handleTouchMove, handleTouchEnd} = useSwipeLeft(props.closeHandler);
    return (
        <div className={styles.sidenav} ref={props.sidemenuRef}
             onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <button className={styles.closebtn} onClick={props.closeHandler}>&times;</button>
            <a href="#">صفحه اول</a>
            <a href="#">تماس با ما</a>
            <a href="#">پشتیبانی</a>
            <a href="#">محصولات</a>
            <a href="#">پروفایل</a>
            <a href="#">خروج</a>
        </div>
    )
};

export default SideMenu;