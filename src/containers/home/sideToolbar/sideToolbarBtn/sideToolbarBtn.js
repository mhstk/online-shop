import React, {useRef} from 'react';
import styles from "./sideToolbarBtn.module.css";
import filters from "../../../../assets/filters.png";
import SideToolbar from "../sideToolbar";
import SideMenu from "../../../../components/header/sideMenu/sideMenu";

const SideToolbarBtn = (props) => {
    const sideMenu = useRef(null);
    const closeHandler = () => {
        sideMenu.current.style.width = 0;

    };

    const openHandler = () => {
        sideMenu.current.style.width = "100vw";
    };
    return (
        <div className={styles.container}>
            <SideToolbar closeHandler={closeHandler} sideToolbarRef={sideMenu}/>
            <button onClick={openHandler}>
                <img src={filters} alt="filters"/>
                فیلترها
            </button>
        </div>
    );
};

export default SideToolbarBtn;