import React, {useRef} from 'react';
import styles from "./sorter.module.css";

const Sorter = (props) => {
    const soldRef = useRef(null);
    const dateRef = useRef(null);
    const priceRef = useRef(null);

    const clickHandler = (ref, value) => {
        [soldRef, dateRef, priceRef].forEach((r) =>
            r.current.classList.remove(styles.active))
        ref.current.classList.add(styles.active)
        props.setSort(value)
    }

    return (
        <div className={styles.sorter}>
            <p>مرتب‌سازی بر اساس:</p>
            <button ref={dateRef} className={styles.active} onClick={() => clickHandler(dateRef, "date")}>زمان</button>
            <button ref={soldRef} onClick={() => clickHandler(soldRef, "sold")}>بیشترین فروش</button>
            <button ref={priceRef} onClick={() => clickHandler(priceRef, "price")}>قیمت</button>
        </div>
    )
};

export default Sorter;