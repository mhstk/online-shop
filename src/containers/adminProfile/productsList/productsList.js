import Card from "../../../utils/card/card"
import creeper from "../../../assets/creeper.png"
import styles from "./productsList.module.css"
import MyButton from "../../../components/myButton/myButton"
import Modal from "../../../components/Modal/modal"
import EditModal from "../../editModal/editModal"
import { useState } from "react"
import CreateModal from "../../createModal/createModal"

const ProductsList = ({ products }) => {

    const [show, setShow] = useState(false)
    const [showNew, setShowNew] = useState(false)

    const onEditClicked = (e, id) => {
        e.stopPropagation()
        e.preventDefault()
        console.log("clicked "+ id);
        setShow(true)
    }

    const onCreateClicked = (e) => {
        e.stopPropagation()
        e.preventDefault()
        setShowNew(true)

    }

    return (
        <div className={styles.productsList}>
            <MyButton className={styles.btn_new} onClick={onCreateClicked} text="+ ایجاد محصول جدید"/>
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
            <Modal onClose={() => setShowNew(false)} show={showNew}>
                <CreateModal categories={["sss", "Dddd"]} selected_category={1} id=""/>
            </Modal>
            
        </div>
    )
}

export default ProductsList;
