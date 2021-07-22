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
    const [newCatName, setnewCatName] = useState("")

    const updateCats = () => {
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
    }

    useEffect(() => {
        updateCats()
    }, [authToken])


    const handleRemove = (e) => {
        console.log(e.target.dataset.id);
        e.preventDefault()
        if (authToken !== null) {
            axios.delete(`http://127.0.0.1:8000/api/category/${e.target.dataset.id}/`, {
                headers: { 'Authorization': `Token ${authToken}`}
            }).then((response) => {
                if (response.status === 204) {
                    console.log(response.data);
                    // setProducts(response.data)
                    updateCats()
                } else {
                    // console.log(response);

                }

            }, (error) => {
                // console.log(error.response);

            })
        }
        updateCats()

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

    const handleNewCat = (e) => {
        e.preventDefault()
        if (authToken !== null) {
            axios.post(`http://127.0.0.1:8000/api/category/`, {
                name: newCatName,
            }, {
                headers: { 'Authorization': `Token ${authToken}`, 'Content-Type': 'application/json' }
            }).then((response) => {
                if (response.status === 201) {
                    console.log(response.data);
                    // setProducts(response.data)
                    updateCats()
                } else {
                    // console.log(response);

                }

            }, (error) => {
                // console.log(error.response);

            })
        }
        setnewCatName("")
        updateCats()
    }

    const inpOnChange = e => {
        setnewCatName(e.target.value)
        console.log(newCatName);
    }

    return (
        <div className={styles.container}>
            <MyButton className={styles.btn_new} onClick={newCategoryClicked} text="+ ایجاد دسته بندی جدید"/>
            {(showNewCategory) && 
                <div className={styles.container_new_cat}>
                    <InputCard className={styles.input_new_cat} onChange={e => inpOnChange(e)} text="دسته بندی"/>
                    <MyButton className={styles.btn_new_cat} onClick={e => handleNewCat(e)} text="اضافه کردن"/>
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
