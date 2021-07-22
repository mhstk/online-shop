import React, {useState} from 'react';
import styles from "./items.module.css";
import Card from "../../../../utils/card/card";
import creeper from "../../../../assets/creeper.png"
import SideToolbarBtn from "../../sideToolbar/sideToolbarBtn/sideToolbarBtn";
import Modal from '../../../../components/Modal/modal';
import BuyModal from '../../../buyModal/buyModal';
import {useAuth} from '../../../../hooks/useAuth';

const Items = (props) => {
    const [show, setShow] = useState(false)
    const {authToken} = useAuth()
    const [buyItem, setBuyItem] = useState({});
    const onBuyClicked = (item) => {
        setShow(true)
        setBuyItem(item)
    }

    return (
        <div className={styles.items}>
            <SideToolbarBtn/>
            {props.loading ? "loading" :
                props.items.map((item, index) => {
                    return (
                        <Card
                            id={item.id}
                            image={creeper}
                            title={item.name}
                            category={item.catName}
                            price={item.price}
                            button={"خرید محصول"}
                            onClick={() => onBuyClicked(item)}
                            key={item.id}
                        />)

                })
            }
            <Modal onClose={() => setShow(false)} show={show}>
                <BuyModal closeModal={() => setShow(false)} id={buyItem.id} p_name={buyItem.name}
                          p_price={buyItem.price} show={show}/>
            </Modal>
        </div>
    );
};

export default Items;