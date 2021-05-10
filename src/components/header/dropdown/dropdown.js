import React from 'react';
import styles from "./dropdown.module.css";
const Dropdown = (props) => {
    return (
        <div className={styles.dropdown}>
            <button className={styles.dropbtn}>هادی</button>
            {/* <div className={styles.filler}/> */}
            <div className={styles.dropdownContent}>
                <a href="#">پروفایل</a>
                <a href="#">خروج از حساب</a>
            </div>
        </div>
    );
};

export default Dropdown;