import CardAdmin from "../../../utils/cardAdmin/cardAdmin"
import creeper from "../../../assets/creeper.png"
import styles from "./productsList.module.css"
import MyButton from "../../../components/myButton/myButton"
import Modal from "../../../components/Modal/modal"
import EditModal from "../../editModal/editModal"
import { useEffect, useState } from "react"
import CreateModal from "../../createModal/createModal"
import axios from "axios"
import { useAuth } from "../../../hooks/useAuth"



const ProductsList = (props) => {

    const [show, setShow] = useState(false)
    const [showNew, setShowNew] = useState(false)
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const {authToken, setAuthToken} = useAuth();

    useEffect(() =>{
        axios.get("http://127.0.0.1:8000/api/category/", {
            headers: { 'Authorization': `Token ${authToken}` }
        }).then((response) => {
            if (response.status === 200) {
                // console.log(response.data);
                setCategories(response.data)
                // console.log(categories);
                const test = categories.find(obj => {
                    return obj.id === 1
                })
                // console.log("name" in test ? test.name : test)
            } else {
                console.log(response);
            }

        }, (error) => {
            console.log(error.response);
            
        }) 

        axios.get("http://127.0.0.1:8000/api/item/", {
            headers: { 'Authorization': `Token ${authToken}` }
        }).then((response) => {
            if (response.status === 200) {
                // console.log(response.data);
                setProducts(response.data)
            } else {
                console.log(response);
            }

        }, (error) => {
            console.log(error.response);
            
        }) 
    }, [authToken])

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
                    const category = categories.find(obj => {
                        return obj.id === e.category
                    })
                    return (
                        <CardAdmin
                        key={index}
                        image={creeper}
                        title={e.name}
                        category={category && "name" in category ? category.name : ""}
                        price={e.price}
                        button={"ویرایش"}
                        onClick={onEditClicked}
                        available={e.available}
                        sold={e.sold}
                        />
                    )
                })}
            </div>
            <Modal onClose={() => setShow(false)} show={show}>
                <EditModal categories={categories} selected_category={0} id="3252546"/>
            </Modal>
            <Modal onClose={() => setShowNew(false)} show={showNew}>
                <CreateModal categories={categories} id=""/>
            </Modal>
            
        </div>
    )
}

export default ProductsList;
