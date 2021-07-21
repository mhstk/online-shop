import React, {useState} from 'react';
import styles from "./items.module.css";
import Card from "../../../../utils/card/card";
import creeper from "../../../../assets/creeper.png"
import SideToolbarBtn from "../../sideToolbar/sideToolbarBtn/sideToolbarBtn";
import Modal from '../../../../components/Modal/modal';
import BuyModal from '../../../buyModal/buyModal';
import { useAuth } from '../../../../hooks/useAuth';

const Items = (props) => {
    const [show, setShow] = useState(false)
    const {authToken} = useAuth()

    const onBuyClicked = (e, id) => {
        console.log(authToken);
        console.log("clicked "+ id);
        setShow(true)
    }


    return (
        <div className={styles.items}>
            <SideToolbarBtn/>
            {props.items.map((c, index) => {
                return (
                    <Card
                        id={index}
                        image={creeper}
                        title="کریپر اصل منفجرنشده"
                        category={"دسته بندی یک"}
                        price={"10,000"}
                        button={"خرید محصول"}
                        onClick={onBuyClicked}
                        key={index}
                    />)

            })}
            <Modal onClose={() => setShow(false)} show={show}>
                <BuyModal id="3252546" p_name="خیار" p_price={10000}/>
            </Modal>
        </div>
    );
};

export default Items;