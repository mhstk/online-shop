import MyTable from "../../../components/myTable/myTable";
import MyButton from "../../../components/myButton/myButton";
import { useState, useEffect } from "react";
import styles from './categoriesList.module.css';
import InputCard from "../../../components/inputCard/inputCard";
import { useAuth } from "../../../hooks/useAuth";
import axios from "axios";

const CategoriesList = () => {

    const [showNewCategory, toggleShowNewCategory] = useState(false)

    const remove_cat = <button className={`${styles.category_btns} ${styles.remove_cat}`}>حذف</button>
    const edit_cat = <button className={`${styles.category_btns} ${styles.remove_cat}`}>ویرایش</button>
    const table_h = [["نام دسته بندی", "عملیات"]]
    const [categories, setcategories] = useState(table_h)
    const { authToken, setAuthToken } = useAuth();

    useEffect(() => {
        if (authToken !== null) {


            axios.get("http://127.0.0.1:8000/api/category/", {
                headers: { 'Authorization': `Token ${authToken}` }
            }).then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    let test_categories = response.data.map(val => {
                        let remove_cat_btn = <button data-id={val.id} onClick={e => handleRemove(e)} className={`${styles.category_btns} ${styles.remove_cat}`}>حذف</button>
                        let edit_cat_btn = <button data-id={val.id} onClick={e => handleEdit(e)} className={`${styles.category_btns} ${styles.remove_cat}`}>ویرایش</button>
                        let span_of = null;
                        if (val.id === 1){

                            span_of = <span className={styles.category_btns_container}>_</span>
                        }else{

                            span_of = <span className={styles.category_btns_container}>{edit_cat_btn} / {remove_cat_btn} </span>
                        }
                        return [val.name, span_of]
                    
                    })
                    setcategories([...table_h, ...test_categories])

                } else {
                    console.log(response);
                }

            }, (error) => {
                console.log(error.response);

            })
        }
    }, [authToken])


    const handleRemove = (e) => {
        console.log(e.target.dataset.id);

    }

    const handleEdit = e => {
        console.log(e.target.dataset.id);

    }


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
                    <MyTable tableObj={categories} className={styles.table} />
                </div>
            </div>
        </div>
    )

}

export default CategoriesList
