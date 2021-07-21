import MyTable from "../../../components/myTable/myTable";
import styles from './reciepts.module.css';

const Reciepts = ({table}) => {
    return (
        <div className={styles.receipts}>
            <div>
                <MyTable tableObj={table} className={styles.table} />
            </div>

        </div>
    )
}

export default Reciepts
