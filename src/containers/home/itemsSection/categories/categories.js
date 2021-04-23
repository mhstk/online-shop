import React from 'react';
import styles from "./categories.module.css";

const Categories = (props) => {
    const l = [
        "دسته بندی 1",
        "دسته بندی 1",
        "دسته بندی 1",
        "دسته بندی 1",
        "دسته بندی 1",
        "دسته بندی 1",
        "دسته بندی 1"
    ];
    return (
        <div className={styles.categories}>
            <h2>دسته‌ بندی ‌ها</h2>
            <div className={styles.line}/>
            <ul>
                {l.map((cat,index) => {
                    return (
                        <li>
                            <input type="checkbox" id={index} name={cat}/>
                            <label htmlFor="vehicle1">{cat}</label>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default Categories;