import React, {useState} from 'react';
import styles from "./sideMenu.module.css";

const SideMenu = (props) => {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    function handleTouchStart(e) {
        setTouchStart(e.targetTouches[0].clientX);
    }

    function handleTouchMove(e) {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    function handleTouchEnd() {
        if (touchStart - touchEnd > 150) {
            // do your stuff here for left swipe
            props.closeHandler();
        }
    }

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