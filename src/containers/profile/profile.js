import { useState } from "react"
import InputCard from "../../components/inputCard/inputCard";
import MyButton from "../../components/myButton/myButton";
import Tabs from "../../components/tabs/tabs"
import styles from "./profile.module.css"
const Profile = () => {

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

    const renderTableHeader = (headers) => {
        return headers.map((header, index) => {
            console.log(header);
            return (
                <th key={index}>{header}</th>
            )
        })
    }
    const renderTableRows = (rows) => {
        return rows.map((row, index) => {
            const { receiptId, product, paidPrice, sentAddress } = row
            console.log(row);
            return (
                <tr key={index}>
                    <td>{receiptId}</td>
                    <td>{product}</td>
                    <td>{paidPrice}</td>
                    <td>{sentAddress}</td>
                </tr>
            )
        })
    }


    return (
        <div className={styles.profile}>
            <div className={styles.headline}>
                <h5>
                    {name} عزیز، خوش آمدید |
                </h5>
                <pre> موجودی حساب شما: {accountBalance}</pre>
                <MyButton className={styles.btn_balance} text="افزایش موجودی" />
            </div>
            <Tabs className={styles.tabs} itemsList={["پروفایل", "رسید ها"]}
                totalWidth="280" activeIndex={selectedTab}
                onTabClicked={onTabClicked}
            />
            <div className={styles.content_container}>
                <form className={`${styles.profile_info}
                    ${(selectedTab === 0) && styles.active}`}>
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                        <InputCard text="نام" inputText={name} />
                        <InputCard text="نام خانوادگی" inputText={lastName} />
                    </div>
                    <InputCard className={styles.long_input}
                        text="رمز عبور" isPassword={true} />
                    <InputCard text="آدرس" isLarge={true} inputText={address} />
                    <MyButton className={styles.btn_edit} text="ویرایش اطلاعات" />
                </form>
                <div className={`${styles.receipts}
                ${(selectedTab === 1) && styles.active}`}>
                    <div>
                        <table className={styles.table}>
                            <thead>
                                {renderTableHeader(table[0])}

                            </thead>
                            <tbody>
                                {renderTableRows(table.slice(1, table.length))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile
