import {FaCheckCircle} from "react-icons/fa";
import {FaTimesCircle} from "react-icons/fa";
import React, {useState, useEffect} from "react";
import styles from "./buyModal.module.css";
import ResponseModal from "../responseModal/responseModal";
import {useHistory} from 'react-router-dom';
import axios from "axios";
import {useAuth} from "../../hooks/useAuth";

const BuyModal = (props) => {
    const [show, setShow] = useState(false)
    const [msg, setMsg] = useState("");
    const [modal_succ, setModal_succ] = useState(true);
    const [modal_err, setModal_err] = useState(false);
    const [button, setButton] = useState("buy");
    const [count, setCount] = useState(1);
    const history = useHistory();
    const {authToken} = useAuth()

    useEffect(() => {
        if (!authToken) {
            setShow(true);
            setButton("login");
            setModal_err(true);
            setModal_succ(false)
        }
    }, [authToken]);


    const buyHandler = (count, id) => {
        axios.post("http://127.0.0.1:8000/api/item/" + id + '/buy/', {
            count: count
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${authToken}`
            }
        }).then((response) => {
            setShow(true)
            if (response.status === 200) {
                setMsg("خرید با موفقیت انجام شد!");
            }

        }, (error) => {
            setShow(true)
            if (error.response.status === 404) {
                setMsg("موجود نیست!");
                setButton("exit")
                setModal_err(true);
                setModal_succ(false)
            } else if (error.response.status === 426) {
                setMsg("اعتبار کافی نیست!");
                setButton("credit")
                setModal_err(true);
                setModal_succ(false)
            }
        })

    };
    useEffect(() => {
        setShow(false)
        setButton("buy")
        setModal_succ(true)
        setModal_err(false)
    }, [props.show]);

    return (
        <div className={styles.modal_body}>

            {show && <ResponseModal success={modal_succ} error={modal_err} msg={msg}/>}
            {/*<div className={styles.label_inp_cont}>*/}
            {/*    <label className={styles.label}>کد کالا</label>*/}
            {/*    <label className={styles.label}>{props.id}</label>*/}
            {/*</div>*/}

            <div className={styles.label_inp_cont}>
                <label className={styles.label}>نام کالا</label>
                <label className={styles.label}>{props.p_name}</label>
            </div>

            <div className={styles.label_inp_cont}>
                <label className={styles.label}>قیمت</label>
                <label className={styles.label}>{props.p_price}</label>
            </div>

            <div className={styles.label_inp_cont}>
                <label className={styles.label}>تعداد</label>
                <input value={count} type="number" className={styles.inp} onChange={(e) => {
                    setCount(e.target.value)
                }}/>
            </div>

            <div className={styles.label_inp_cont}>
                <label className={styles.label}>قیمت کل</label>
                <label className={styles.label}>{props.p_price * count}</label>
            </div>

            {button === "buy" && <button onClick={() => {
                buyHandler(count, props.id)
            }} className={styles.btn}>خرید کالا</button>}
            {button === "login" && <button onClick={() => {
                history.push("/login")
            }} className={styles.btn}>ورود</button>}
            {button === "exit" && <button onClick={() => {
                props.closeModal()
            }} className={styles.btn}>خروج</button>}
            {button === "credit" && <button onClick={() => {
                history.push("/profile")
            }} className={styles.btn}>افزایش اعتبار</button>}

        </div>
    );
}

export default BuyModal