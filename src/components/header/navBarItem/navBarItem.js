import React from 'react';
import styles from "./navBarItem.module.css"
const NavBarItem = (props) => {
    return (
        <li ><a className={styles.navBarItem} href={props.href}>{props.text}</a></li>
    );
};

export default NavBarItem;