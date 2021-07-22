import React from 'react';
import styles from "./categories.module.css";

const Categories = (props) => {
    return (
        <div className={styles.categories} style={{maxHeight: props.maxHeight}}>
            <h3>دسته‌ بندی ‌ها</h3>
            <div className={styles.line}/>
            <ul>
                {(!props.cats || props.loading) ? "loading" : props.cats.map((cat, index) => {
                    return (
                        <li key={index}>
                            <input type="checkbox" id={cat.id} name={cat.name} onChange={
                                (e) => props.addCat(cat.id, e.target.checked)
                            }/>
                            <label htmlFor="vehicle1">{cat.name}</label>

                        </li>
                    );
                })}
            </ul>
        </div>
    )
};

export default Categories;