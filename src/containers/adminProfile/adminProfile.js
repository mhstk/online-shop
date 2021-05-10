import { useState } from "react";
import InputCard from "../../components/inputCard/inputCard";
import MyButton from "../../components/myButton/myButton";
import Tabs from "../../components/tabs/tabs"; 
import MyTable from "../../components/myTable/myTable";
import styles from "./adminProfile.module.css";
const AdminProfile = () => {

    const [selectedTab, setSelectedTab] = useState(0)
    const [name, setName] = useState("هادی")
    const [lastName, setLastName] = useState("طباطبایی")
    const [accountBalance, setAccountBalance] = useState("۱۰،۰۰۰")
    const [address, setAddress] = useState("تهران، تهران، امیرکبیر")
    const onTabClicked = (index) => {
        setSelectedTab(index);
    }

    const table = [
        ["کد پیگیری", "کالا", "قیمت پرداخت شده", "آدرس ارسال شده"],
        { receiptId: "SHOP102030", product: "کریپر اصل منفجر نشده",
        paidPrice: "۱۰،۰۰۰", sentAddress: "تهران، تهران، امیرکبیر" },
        { receiptId: "SHOP102030", product: "کریپر اصل منفجر نشده",
        paidPrice: "۱۰،۰۰۰", sentAddress: "تهران، تهران، امیرکبیر" },
        { receiptId: "SHOP102030", product: "کریپر اصل منفجر نشده",
        paidPrice: "۱۰،۰۰۰", sentAddress: "تهران، تهران، امیرکبیر" },
        { receiptId: "SHOP102030", product: "کریپر اصل منفجر نشده",
        paidPrice: "۱۰،۰۰۰", sentAddress: "تهران، تهران، امیرکبیر" },
    ]

    


    return (
        <div className={styles.profile}>
            <div className={styles.headline}>
                <h5>
                    {name} عزیز، خوش آمدید |
                </h5>
                <pre> موجودی حساب شما: {accountBalance}</pre>
                <MyButton className={styles.btn_balance} text="افزایش موجودی" />
            </div>
            <Tabs className={styles.tabs} itemsList={["لیست کالاها" , "لیست دسته ها" , "رسید ها"]}
                totalWidth="450" activeIndex={selectedTab}
                onTabClicked={onTabClicked}
            />
            <div className={styles.content_container}>
                <div className={`${styles.productLists} 
                    ${(selectedTab===1) && styles.active}`}>
                    DD
                </div>
                <div className={`${styles.receipts}
                    ${(selectedTab === 2) && styles.active}`}>
                    <div>
                        <MyTable tableObj={table} className={styles.table}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminProfile
