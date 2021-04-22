import React from 'react';
import styles from "./header.module.css"
import Logo from "./logo/logo";
import NavBarItem from "./navBarItem/navBarItem";
import Dropdown from "./dropdown/dropdown";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <nav className={styles.header__navBar}>
                <ul>
                    <Logo/>
                    <NavBarItem text="صفحه اول"/>
                    <NavBarItem text="تماس با ما"/>
                    <NavBarItem text="پشتیبانی"/>
                    <NavBarItem text="محصولات"/>

                </ul>
            </nav>
            <Dropdown/>
        </header>
    );
};

export default Header;