import React from 'react';
import styles from "./header.module.css"
import Logo from "./logo/logo";
import NavBarItem from "./navBarItem/navBarItem";
import Dropdown from "./dropdown/dropdown";
import SideMenuBtn from "./sideMenuBtn/sideMenuBtn";
import {useRef} from "react"
import SideMenu from "./sideMenu/sideMenu";

const Header = (props) => {
    const sideMenu = useRef(null);
    const closeHandler = () => {
        sideMenu.current.style.width = 0;
    };

    const openHandler = () => {
        sideMenu.current.style.width = "100vw";
    };
    return (
        <header className={styles.header}>
            <SideMenu closeHandler={closeHandler} sidemenuRef={sideMenu}/>
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
            <SideMenuBtn handler={openHandler}/>
        </header>
    );
};

export default Header;