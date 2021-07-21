import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import styles from "./dropdown.module.css";
import { useHistory } from 'react-router-dom';

const Dropdown = (props) => {
    const {authToken, setAuthToken} = useAuth();
    const history = useHistory();
    const handleLogout = (e) => {
        setAuthToken("")
    }

    const handleLogin = (e) => {
        if (authToken === null){
            history.push('/login');
        }else{
            history.push('/profile');
        }
    }

    
    return (
        <div className={styles.dropdown}>
            <button
            onClick={handleLogin} className={styles.dropbtn}>{authToken===null ? "ورود" : "هادی"}</button>
            {/* <div className={styles.filler}/> */}
            {authToken!==null && 
                <div className={styles.dropdownContent}>
                    <a href="/profile">پروفایل</a>
                    <a href="/" onClick={handleLogout}>خروج از حساب</a>
                </div>
            }
        </div>
    );
};

export default Dropdown;