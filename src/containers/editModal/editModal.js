import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { useState } from "react";
import styles from "./editModal.module.css";
import ResponseModal from "../responseModal/responseModal";
const EditModal = (props) => {
    const [show, setShow] = useState(true)
    const modal_succ = true;
    const modal_err = false;
    const modal_msg = "تغییرات با موفقیت ثبت شد!"

    return (
        <div className={styles.modal_body}>

            {show &&
                <ResponseModal success={modal_succ} error={modal_err} msg={modal_msg} />
            }
            <div className={styles.label_inp_cont}>
                <label className={styles.label}>کد کالا</label>
                <label className={styles.label}>{props.id}</label>
            </div>

            <div className={styles.label_inp_cont}>
                <label className={styles.label}>نام کالا</label>
                <input className={styles.inp}></input>
            </div>
            <div className={styles.label_inp_cont}>
                <label className={styles.label}>دسته بندی</label>
                <select name="دسته بندی ها" className={styles.select}>
                    {props.categories.map((val, index) => {
                        // key: index;
                        return (
                            <option key={val.id} className={styles.select_items} value={val.id} selected={val.id === props.selected_category}>{val.name}</option>
                        );
                    })}
                </select>
            </div>
            <div className={styles.label_inp_cont}>
                <label className={styles.label}>تعداد</label>
                <input type="number" className={styles.inp}></input>
            </div>

            <div className={styles.label_inp_cont}>
                <label className={styles.label}>قیمت</label>
                <input type="number" className={styles.inp}></input>
            </div>


            <button className={styles.btn}>ثبت تغییرات</button>
        </div>
    );
}

export default EditModal