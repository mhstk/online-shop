import React, {useState} from 'react';
import styles from "./items.module.css";
import Card from "../../../../utils/card/card";
import creeper from "../../../../assets/creeper.png"
import SideToolbarBtn from "../../sideToolbar/sideToolbarBtn/sideToolbarBtn";

const Items = (props) => {


    return (
        <div className={styles.items}>
            <SideToolbarBtn/>
            {props.items.map((c) => {
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