import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import styles from "./responseModal.module.css";
const ResponseModal = (props) => {
    console.log(",,,,,,,",props.msg)
    return (
        <div className={styles.modal_body}>
            {props.success && <FaCheckCircle color="green" className={styles.modal_icon}/>}
            {props.error && <FaTimesCircle color="red" className={styles.modal_icon}/>}
            <p>{props.msg}</p>
        </div>
    );
}

export default ResponseModal