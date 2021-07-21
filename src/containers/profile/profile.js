import { useState } from "react";
import MyButton from "../../components/myButton/myButton";
import Tabs from "../../components/tabs/tabs"; 
import ProfileInfo from "./profileInfo/profileInfo";
import Reciepts from "./reciepts/reciepts";
import styles from "./profile.module.css";
const Profile = () => {

    const [selectedTab, setSelectedTab] = useState(0)
    const [profileName, setProfileName] = useState("هادی")
    const [lastName, setLastName] = useState("طباطبایی")
    const [accountBalance, setAccountBalance] = useState("۱۰،۰۰۰")
    const [address, setAddress] = useState("تهران، تهران، امیرکبیر")
    const onTabClicked = (index) => {
        setSelectedTab(index);
    }

    const table = [
        ["کد پیگیری", "کالا", "قیمت پرداخت شده", "آدرس ارسال شده"],
        ["SHOP102030",  "کریپر اصل منفجر نشده",  "۱۰،۰۰۰", "تهران، تهران، امیرکبیر" ],
        ["SHOP102030",  "کریپر اصل منفجر نشده",  "۱۰،۰۰۰", "تهران، تهران، امیرکبیر" ],
        ["SHOP102030",  "کریپر اصل منفجر نشده",  "۱۰،۰۰۰", "تهران، تهران، امیرکبیر" ],
        ["SHOP102030",  "کریپر اصل منفجر نشده",  "۱۰،۰۰۰", "تهران، تهران، امیرکبیر" ],
        ["SHOP102030",  "کریپر اصل منفجر نشده",  "۱۰،۰۰۰", "تهران، تهران، امیرکبیر" ],
        ["SHOP102030",  "کریپر اصل منفجر نشده",  "۱۰،۰۰۰", "تهران، تهران، امیرکبیر" ] 
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
                {(selectedTab===0) && <ProfileInfo profileName={profileName} 
                    lastName={lastName} address={address}/>}
                {(selectedTab===1) && <Reciepts table={table}/>}
            </div>
        </div>
    )
}

export default Profile
