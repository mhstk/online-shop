import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import styles from "./editModal.module.css";
import ResponseModal from "../responseModal/responseModal";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";



const EditModal = (props) => {
    const { authToken } = useAuth();
    const [show, setShow] = useState(false)
    const [modal_succ, setModal_succ] = useState(false);
    const [modal_msg, setModal_msg] = useState("تغییرات با مشکل مواجه شد!")
    const [modal_err, setModal_err] = useState(true);

    const [nameInp, setnameInp] = useState(props.name)
    const [numberInp, setnumberInp] = useState(props.available)
    const [selected_category, setselected_category] = useState(props.category_id)
    const [price, setprice] = useState(props.price)

    useEffect(() => {
        setnameInp(props.name);
        setprice(props.price)
        setselected_category(props.category_id)
        setnumberInp(props.available)
    }, [props])


    const priceHandleOnChange = (e) => {
        e.preventDefault()
        setprice(e.target.value)
        console.log(e.target.value);
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
        setModal_msg("تغییرات با مشکل مواجه شد!")
        setModal_succ(false);
        setModal_err(true);
        setShow(true);
    }

    const editOnClick = (e) => {
        e.preventDefault()
        console.log(nameInp, numberInp, selected_category, price);
        if (authToken !== null) {
            axios.patch(`http://127.0.0.1:8000/api/item/${props.id}/`, {
                name: nameInp,
                category: selected_category,
                price: price,
                available: numberInp
            }, {
                headers: { 'Authorization': `Token ${authToken}`, 'Content-Type': 'application/json' }
            }).then((response) => {
                if (response.status === 200) {
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

        // props.updateItems();
    }


    const removeOnClick = (e) => {
        e.preventDefault()
        console.log(nameInp, numberInp, selected_category, price);
        if (authToken !== null) {
            axios.delete(`http://127.0.0.1:8000/api/item/${props.id}/`, {
                headers: { 'Authorization': `Token ${authToken}`}
            }).then((response) => {
                console.log(response.status);
                if (response.status === 204) {
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

        // props.updateItems();
    }

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
                <input className={styles.inp} value={nameInp} onChange={e => nameHandleOnChange(e)}></input>
            </div>
            <div className={styles.label_inp_cont}>
                <label className={styles.label}>دسته بندی</label>
                <select name="دسته بندی ها" className={styles.select} value={selected_category} onChange={e => categoryHandleOnChange(e)}>
                    {props.categories.map((val, index) => {
                        // key: index;
                        return (
                            <option key={val.id} className={styles.select_items} value={val.id} >{val.name}</option>
                        );
                    })}
                </select>
            </div>
            <div className={styles.label_inp_cont}>
                <label className={styles.label}>تعداد</label>
                <input type="number" className={styles.inp} value={numberInp} onChange={e => numberHandleOnChange(e)}></input>
            </div>

            <div className={styles.label_inp_cont}>
                <label className={styles.label}>قیمت</label>
                <input type="number" className={styles.inp} value={price} onChange={e => priceHandleOnChange(e)}></input>
            </div>


            <button className={styles.btn} onClick={e => editOnClick(e)}>ثبت تغییرات</button>
            <button className={styles.rm_btn} onClick={e => removeOnClick(e)}>حذف</button>
        </div>
    );
}

export default EditModal