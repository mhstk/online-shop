import { useState, useEffect } from "react";
import MyButton from "../../components/myButton/myButton";
import Tabs from "../../components/tabs/tabs";
import ProfileInfo from "./profileInfo/profileInfo";
import Reciepts from "./reciepts/reciepts";
import styles from "./profile.module.css";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";

const Profile = () => {
    const table_h = [["کد پیگیری", "کالا", "قیمت پرداخت شده", "آدرس ارسال شده"]];
    const { authToken, setAuthToken } = useAuth();
    const [selectedTab, setSelectedTab] = useState(0)
    const [profileName, setProfileName] = useState("نام")
    const [lastName, setLastName] = useState("نام خانوادگی")
    const [accountBalance, setAccountBalance] = useState("۰")
    const [address, setAddress] = useState("آدرس")
    const [orders, setOrders] = useState(table_h)
    const onTabClicked = (index) => {
        setSelectedTab(index);
    }

    useEffect(() => {
        if (authToken !== null) {
            axios.get("http://127.0.0.1:8000/user/me/", {
                headers: { 'Authorization': `Token ${authToken}` }
            }).then((response) => {
                if (response.status === 200) {
                    setProfileName(response.data.first_name);
                    setLastName(response.data.last_name);
                    setAddress(response.data.address);
                    setAccountBalance(response.data.credit);
                } else {
                    console.log(response);
                }

            }, (error) => {
                console.log(error.response);

            })

            axios.get("http://127.0.0.1:8000/api/order/", {
                headers: { 'Authorization': `Token ${authToken}` }
            }).then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    const orders = [...table_h, ...response.data.map((val, index) => {
                        return [val.code, val.item_name, val.price, val.address]
                    })]
                    console.log(orders);
                    console.log(table);
                    setOrders(orders)
                } else {
                    console.log(response);
                }

            }, (error) => {
                console.log(error.response);

            })
        }
    }, [authToken])


    const table = [
        ["کد پیگیری", "کالا", "قیمت پرداخت شده", "آدرس ارسال شده"],
        ["SHOP102030", "کریپر اصل منفجر نشده", "۱۰،۰۰۰", "تهران، تهران، امیرکبیر"],
        ["SHOP102030", "کریپر اصل منفجر نشده", "۱۰،۰۰۰", "تهران، تهران، امیرکبیر"],
        ["SHOP102030", "کریپر اصل منفجر نشده", "۱۰،۰۰۰", "تهران، تهران، امیرکبیر"],
        ["SHOP102030", "کریپر اصل منفجر نشده", "۱۰،۰۰۰", "تهران، تهران، امیرکبیر"],
        ["SHOP102030", "کریپر اصل منفجر نشده", "۱۰،۰۰۰", "تهران، تهران، امیرکبیر"],
        ["SHOP102030", "کریپر اصل منفجر نشده", "۱۰،۰۰۰", "تهران، تهران، امیرکبیر"]
    ]






    return (
        <div className={styles.profile}>
            <div className={styles.headline}>
                <h5>
                    {profileName} عزیز، خوش آمدید |
                </h5>
                <pre> موجودی حساب شما: {accountBalance}</pre>
                <MyButton className={styles.btn_balance} text="افزایش موجودی" />
            </div>
            <Tabs className={styles.tabs} itemsList={["پروفایل", "رسید ها"]}
                totalWidth="280" activeIndex={selectedTab}
                onTabClicked={onTabClicked}
            />
            <div className={styles.content_container}>
                {(selectedTab === 0) && <ProfileInfo profileName={profileName}
                    lastName={lastName} address={address} />}
                {(selectedTab === 1) && <Reciepts table={orders} />}
            </div>
        </div>
    )
}

export default Profile