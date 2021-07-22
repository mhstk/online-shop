import MyTable from "../../../components/myTable/myTable";
import InputCard from "../../../components/inputCard/inputCard"
import styles from './adminReciepts.module.css';
import { useAuth } from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminReciepts = ({ table }) => {
    const table_h = [["کد پیگیری", "کالا", "قیمت پرداخت شده", "آدرس ارسال شده"]];
    const { authToken, setAuthToken } = useAuth();
    const [orders, setOrders] = useState(table_h)
    const [showOrders, setshowOrders] = useState(orders)


    useEffect(() => {
        if (authToken !== null) {

            axios.get("http://127.0.0.1:8000/api/order/", {
                headers: { 'Authorization': `Token ${authToken}` }
            }).then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    const orders = [...table_h, ...response.data.map((val, index) => {
                        return [val.code, "", val.price, val.address]
                    })]
                    setOrders(orders)
                    setshowOrders(orders)
                } else {
                    console.log(response);
                }

            }, (error) => {
                console.log(error.response);

            })
        }
    }, [authToken])



    const searchOnChange = e => {
        e.preventDefault();
        console.log(e.target.value);
        const newOrders = [...table_h , ...orders.slice(1,orders.length).filter(obj => {
            return obj[0].startsWith(e.target.value)
        })]
        setshowOrders(newOrders);
    }

    return (
        <div className={styles.container}>

            <InputCard text="کد پیگیری" className={styles.input} onChange={e => searchOnChange(e)} />
            <div className={styles.receipts}>
                <div>
                    <MyTable tableObj={showOrders} className={styles.table} />
                </div>
            </div>
        </div>
    )
}

export default AdminReciepts
