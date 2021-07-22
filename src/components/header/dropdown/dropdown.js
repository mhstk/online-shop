import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import styles from "./dropdown.module.css";
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Dropdown = (props) => {
    const { authToken, setAuthToken } = useAuth();
    const history = useHistory();
    const handleLogout = (e) => {
        setAuthToken("")
    }
    const [name, setName] = useState("")

    useEffect(() => {
        loadName()
        // return () => {
        //     cleanup
        // }
    }, [authToken])

    const loadName = () => {
        if (authToken !== null) {
            axios.get("http://127.0.0.1:8000/user/me/", {
                headers: { 'Authorization': `Token ${authToken}` }
            }).then((response) => {
                if (response.status === 200) {
                    setName(response.data.first_name);
                } else {
                    console.log(response);
                    setAuthToken("")
                    // handleSignupError()
                    // setShow(true)
                }

            }, (error) => {
                console.log(error.response);
                setAuthToken("")
                // if (error.response.data["username"][0]==="user with this username already exists."){
                //     handleSignupError("کاربری با این ایمیل در سیستم موجود است!")
                //     setShow(true)
                // }else{
                //     handleSignupError()
                //     setShow(true)
                // }
            });
        }
    }

    const handleLogin = (e) => {
        if (authToken === null) {
            history.push('/login');
        } else {
            history.push('/profile');
        }
    }


    return (
        <div className={styles.dropdown}>
            <button
                onClick={handleLogin} className={styles.dropbtn}>{authToken === null ? "ورود" : name}</button>
            {/* <div className={styles.filler}/> */}
            {authToken !== null &&
                <div className={styles.dropdownContent}>
                    <a href="/profile">پروفایل</a>
                    <a href="/" onClick={handleLogout}>خروج از حساب</a>
                </div>
            }
        </div>
    );
};

export default Dropdown;