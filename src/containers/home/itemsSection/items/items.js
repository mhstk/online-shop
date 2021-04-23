import React from 'react';
import styles from "./items.module.css";
import Card from "../../../../utils/card/card";
import creeper from "../../../../assets/creeper.png"

const Items = (props) => {
    const l = [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
    ];
    return (
        <div className={styles.items}>
            {l.map((c) => {
                return (
                    <Card
                        image={creeper}
                        title="کریپر اصل منفجرنشده"
                        category={"دسته بندی یک"}
                        price={"10,000"}
                        button={"خرید محصول"}
                    />)

            })}
        </div>
    );
};

export default Items;