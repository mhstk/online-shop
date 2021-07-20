import MyTable from "../../../components/myTable/myTable";
import MyButton from "../../../components/myButton/myButton";
import { useState } from "react";




import styles from './categoriesList.module.css';
import InputCard from "../../../components/inputCard/inputCard";
const CategoriesList = () => {

    const [showNewCategory, toggleShowNewCategory] = useState(false)

    const remove_cat = <button className={`${styles.category_btns} ${styles.remove_cat}`}>حذف</button>
    const edit_cat = <button className={`${styles.category_btns} ${styles.remove_cat}`}>ویرایش</button>

    const categories_table = [
        ["نام دسته بندی", "عملیات"],
        ["دسته بندی" , <span className={styles.category_btns_container}>{edit_cat} / {remove_cat} </span>],
        ["دسته بندی" , <span className={styles.category_btns_container}>{edit_cat} / {remove_cat} </span>],
        ["دسته بندی" , <span className={styles.category_btns_container}>{edit_cat} / {remove_cat} </span>],
        ["دسته بندی" , <span className={styles.category_btns_container}>{edit_cat} / {remove_cat} </span>],
    ]

    const newCategoryClicked = () => {
        toggleShowNewCategory(!showNewCategory)
    }

    return (
        <div className={styles.container}>
            <MyButton className={styles.btn_new} onClick={newCategoryClicked} text="+ ایجاد دسته بندی جدید"/>
            {(showNewCategory) && 
                <div className={styles.container_new_cat}>
                    <InputCard className={styles.input_new_cat}  text="دسته بندی"/>
                    <MyButton className={styles.btn_new_cat} text="اضافه کردن"/>
                </div>}
            <div className={styles.categories}>
                <div>
                    <MyTable tableObj={categories_table} className={styles.table} />
                </div>
            </div>
        </div>
    )

}

export default CategoriesList
