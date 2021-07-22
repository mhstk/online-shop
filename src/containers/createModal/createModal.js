import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { useState } from "react";
import styles from "./createModal.module.css";
import ResponseModal from "../responseModal/responseModal";
const CreateModal = (props) => {
    const [show, setShow] = useState(true)
    const [modal_succ, setModal_succ] = useState(false);
    const [modal_msg, setModal_msg] = useState("ایجاد محصول با مشکل مواجه شد!")
    const [modal_err, setModal_err] = useState(true);

    const [nameInp, setnameInp] = useState("")
    const [numberInp, setnumberInp] = useState(0)
    const [selected_category, setselected_category] = useState(1)
    const [price, setprice] = useState(0)


    const priceHandleOnChange = (e) => {
        e.preventDefault()
        setprice(e.target.value)
    }
    const nameHandleOnChange = (e) => {
        e.preventDefault()
        setnameInp(e.target.value)
    }
    const numberHandleOnChange = (e) => {
        e.preventDefault()
        setnumberInp(e.target.value)
    }
    const categoryHandleOnChange = (e) => {
        e.preventDefault()
        setselected_category(e.target.value)
    }

    const createOnClick = (e) => {
        e.preventDefault()
        console.log(nameInp, numberInp, selected_category, price);
    }


    return (
        <div className={styles.modal_body}>

            {show && 
            <ResponseModal success={modal_succ} error={modal_err} msg={modal_msg}/>
            }
            {/* <div className={styles.label_inp_cont}>
                <label className={styles.label}>کد کالا</label>
                <label className={styles.label}>{props.id}</label>
            </div> */}

            <div className={styles.label_inp_cont}>
                <label className={styles.label}>نام کالا</label>
                <input className={styles.inp} placeholder={nameInp} onChange={(e) => nameHandleOnChange(e)} ></input>
            </div>
            <div className={styles.label_inp_cont}>
                <label className={styles.label}>دسته بندی</label>
                {/* <select name="دسته بندی ها" className={styles.select}> */}
                <select name="دسته بندی ها" className={styles.select} onChange={e => categoryHandleOnChange(e)}>
                    {props.categories.map((val, index) => {
                        // key: index;
                        return(
                            <option key={val.id} className={styles.select_items} value={val.id} selected={val.id===selected_category}>{val.name}</option>
                        );
                    })}
                </select>
            </div>
            <div className={styles.label_inp_cont}>
                <label className={styles.label}>تعداد</label>
                <input type="number" className={styles.inp} placeholder={numberInp} onChange={(e) => numberHandleOnChange(e)}></input>
            </div>

            <div className={styles.label_inp_cont}>
                <label className={styles.label}>قیمت</label>
                <input type="number" className={styles.inp} onChange={(e) => priceHandleOnChange(e)} placeholder={price}></input>
            </div>


            <button className={styles.btn} onClick={e => createOnClick(e)}>ثبت تغییرات</button>
        </div>
    );
}

export default CreateModal;