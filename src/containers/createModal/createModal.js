import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { useState } from "react";
import styles from "./createModal.module.css";
import ResponseModal from "../responseModal/responseModal";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";

const CreateModal = (props) => {
    const {authToken} = useAuth();
    const [show, setShow] = useState(false)
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

    const handleError = () => {
        setModal_msg("ایجاد محصول با مشکل مواجه شد!")
        setModal_succ(false);
        setModal_err(true);
        setShow(true);
        setnameInp("");
        setnumberInp(0);
        setprice(0);
        setselected_category(0);
    }

    const createOnClick = (e) => {
        e.preventDefault()
        console.log(nameInp, numberInp, selected_category, price);
        if (authToken !== null) {
            axios.post(`http://127.0.0.1:8000/api/item/`, {
                name: nameInp,
                category: selected_category,
                price: price,
                available: numberInp,
                sold:0
            }, {
                headers: { 'Authorization': `Token ${authToken}`, 'Content-Type': 'application/json' }
            }).then((response) => {
                if (response.status === 201) {
                    console.log(response.data);
                    // setProducts(response.data)
                    setModal_msg("تغییرات با موفقیت ثبت شد!")
                    setModal_succ(true);
                    setModal_err(false);
                    setShow(true);
                    
                    setTimeout(() => {
                        setShow(false);
                        props.updateItems()
                    }, 2000);
                } else {
                    // console.log(response);
                    handleError()
                    setTimeout(() => {
                        setShow(false);
                        props.updateItems()
                    }, 2000);
                }

            }, (error) => {
                // console.log(error.response);
                handleError()
                setTimeout(() => {
                    setShow(false);
                    props.updateItems()
                }, 2000);

            })
        }
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
                <input className={styles.inp} value={nameInp} onChange={(e) => nameHandleOnChange(e)} ></input>
            </div>
            <div className={styles.label_inp_cont}>
                <label className={styles.label}>دسته بندی</label>
                {/* <select name="دسته بندی ها" className={styles.select}> */}
                <select name="دسته بندی ها" className={styles.select} value={selected_category} onChange={e => categoryHandleOnChange(e)} value={selected_category}>
                    {props.categories.map((val, index) => {
                        // key: index;
                        return(
                            <option key={val.id} className={styles.select_items} value={val.id}>{val.name}</option>
                        );
                    })}
                </select>
            </div>
            <div className={styles.label_inp_cont}>
                <label className={styles.label}>تعداد</label>
                <input type="number" value={numberInp} className={styles.inp} placeholder={numberInp} onChange={(e) => numberHandleOnChange(e)}></input>
            </div>

            <div className={styles.label_inp_cont}>
                <label className={styles.label}>قیمت</label>
                <input type="number" value={price} className={styles.inp} onChange={(e) => priceHandleOnChange(e)} placeholder={price}></input>
            </div>


            <button className={styles.btn} onClick={e => createOnClick(e)}>ثبت تغییرات</button>
        </div>
    );
}

export default CreateModal;