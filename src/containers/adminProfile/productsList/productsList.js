import Card from "../../../utils/card/card"
import creeper from "../../../assets/creeper.png"
import styles from "./productsList.module.css"
import MyButton from "../../../components/myButton/myButton"
import Modal from "../../../components/Modal/modal"
import EditModal from "../../editModal/editModal"
import { useState } from "react"

const ProductsList = ({ products }) => {

    const [show, setShow] = useState(false)

    const onEditClicked = (e, id) => {
        console.log("clicked "+ id);
        setShow(true)
    }

    return (
        <div className={styles.productsList}>
            <MyButton className={styles.btn_new} text="+ ایجاد محصول جدید"/>
            <div className={styles.items}>

                {products.map((e, index) => {
                    return (
                        <Card
                        key={index}
                        image={creeper}
                        title="کریپر اصل منفجرنشده"
                        category={"دسته بندی یک"}
                        price={"10,000"}
                        button={"خرید محصول"}
                        onClick={onEditClicked}
                        />
                    )
                })}
            </div>
            <Modal onClose={() => setShow(false)} show={show}>
                <EditModal categories={["sss", "Dddd"]} selected_category={1} id="3252546"/>
            </Modal>
        </div>
    )
}

export default ProductsList;
