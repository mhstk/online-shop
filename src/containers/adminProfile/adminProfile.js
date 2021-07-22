import { useState } from "react";
import Tabs from "../../components/tabs/tabs"; 
import CategoriesList from "./categoriesList/categoriesList";
import ProductsList from "./productsList/productsList";
import AdminReciepts from "./adminReciepts/adminReciepts";
import styles from "./adminProfile.module.css";
const AdminProfile = () => {

    const [selectedTab, setSelectedTab] = useState(0)
    const adminName = "ادمین";

    const onTabClicked = (index) => {
        setSelectedTab(index);
    }

    const table = [
        ["کد پیگیری", "کالا", "قیمت پرداخت شده","نام خریدار", "آدرس ارسال شده"],
        ["SHOP102030",  "کریپر اصل منفجر نشده",  "۱۰،۰۰۰","هادی", "تهران، تهران، امیرکبیر" ],
        ["SHOP102030",  "کریپر اصل منفجر نشده",  "۱۰،۰۰۰","هادی", "تهران، تهران، امیرکبیر" ],
        ["SHOP102030",  "کریپر اصل منفجر نشده",  "۱۰،۰۰۰","هادی", "تهران، تهران، امیرکبیر" ],
        ["SHOP102030",  "کریپر اصل منفجر نشده",  "۱۰،۰۰۰","هادی", "تهران، تهران، امیرکبیر" ],
        ["SHOP102030",  "کریپر اصل منفجر نشده",  "۱۰،۰۰۰","هادی", "تهران، تهران، امیرکبیر" ],
        ["SHOP102030",  "کریپر اصل منفجر نشده",  "۱۰،۰۰۰","هادی", "تهران، تهران، امیرکبیر" ],

    ]

    

    


    return (
        <div className={styles.profile}>
            <div className={styles.headline}>
                <h5>
                    {adminName} عزیز، خوش آمدید
                </h5>
            </div>
            <Tabs className={styles.tabs} itemsList={["لیست کالاها" , "لیست دسته ها" , "رسید ها"]}
                totalWidth="450" activeIndex={selectedTab}
                onTabClicked={onTabClicked}
            />
            <div className={styles.content_container}>
                {(selectedTab===0) && <ProductsList/>}
                {(selectedTab===1) && <CategoriesList />}
                {(selectedTab===2) && <AdminReciepts table={table}/>}
            </div>
        </div>
    )
}

export default AdminProfile
