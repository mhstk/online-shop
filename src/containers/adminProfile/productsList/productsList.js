import Card from "../../../utils/card/card"
import creeper from "../../../assets/creeper.png"
import styles from "./productsList.module.css"
import MyButton from "../../../components/myButton/myButton"
const ProductsList = ({ products }) => {
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
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default ProductsList;
