import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";


const Modal = props => {
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(

    <div className={`${styles.modal} ${props.show && styles.enter_done} `} onClick={props.onClose}>
        <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
            <div className={styles.modal_header}>
                <button onClick={props.onClose} className={styles.close_button}>
                    <FaTimes />
                </button>
            </div>
            <div className={styles.modal_body}>
                {props.success && <FaCheckCircle color="green" className={styles.modal_icon}/>}
                {props.error && <FaTimesCircle color="red" className={styles.modal_icon}/>}
                {props.children}
                </div>
            <div className={styles.modal_footer}>
            
            </div>
        </div>
    </div>
    ,
    document.getElementById("root")
  );
};

export default Modal;
