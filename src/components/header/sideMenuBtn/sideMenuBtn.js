import React from 'react';
import styles from "./sideMenuBtn.module.css";
const SideMenuBtn = (props) => {
    return (
        <div className={styles.button} onClick={props.handler}>
            <div/>
            <div/>
            <div/>
        </div>
    );
};

export default SideMenuBtn;