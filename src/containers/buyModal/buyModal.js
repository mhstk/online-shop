import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { useState } from "react";
import styles from "./buyModal.module.css";
import ResponseModal from "../responseModal/responseModal";
const BuyModal = (props) => {
    const [show, setShow] = useState(true)
    const modal_succ = true;
    const modal_err = false;
    const modal_msg = "خرید با موفقیت انجام شد!"

    return (
        <div className={styles.modal_body}>

            {show && 
            <ResponseModal success={modal_succ} error={modal_err} msg={modal_msg}/>
            }
            <div className={styles.label_inp_cont}>
                <lable className={styles.label}>کد کالا</lable>
                <lable className={styles.label}>{props.id}</lable>
            </div>

            <div className={styles.label_inp_cont}>
                <lable className={styles.label}>نام کالا</lable>
                <lable className={styles.label}>{props.p_name}</lable>
            </div>

            <div className={styles.label_inp_cont}>
                <lable className={styles.label}>قیمت</lable>
                <lable className={styles.label}>{props.p_price}</lable>
            </div>

            <div className={styles.label_inp_cont}>
                <lable className={styles.label}>تعداد</lable>
                <input type="number" className={styles.inp}></input>
            </div>

            <div className={styles.label_inp_cont}>
                <lable className={styles.label}>قیمت کل</lable>
                <lable className={styles.label}>{props.p_price*5}</lable>
            </div>


            <button className={styles.btn}>خرید کالا</button>
        </div>
    );
}

export default BuyModal