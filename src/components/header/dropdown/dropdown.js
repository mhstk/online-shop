import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import styles from "./dropdown.module.css";
const Dropdown = (props) => {
    const {authToken} = useAuth();
    return (
        <div className={styles.dropdown}>
            {/* {authToken==="" ? "ورود" : } */}
            <button className={styles.dropbtn}>هادی</button>
            {/* <div className={styles.filler}/> */}
            <div className={styles.dropdownContent}>
                <a href="/profile">پروفایل</a>
                <a href="#">خروج از حساب</a>
            </div>
        </div>
    );
};

export default Dropdown;