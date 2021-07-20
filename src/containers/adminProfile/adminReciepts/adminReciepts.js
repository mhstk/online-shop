import MyTable from "../../../components/myTable/myTable";
import InputCard from "../../../components/inputCard/inputCard"

import styles from './adminReciepts.module.css';
const AdminReciepts = ({ table }) => {
    return (
        <div className = {styles.container}>

            <InputCard text="کد پیگیری" className={styles.input}/>
            <div className={styles.receipts}>
                <div>
                    <MyTable tableObj={table} className={styles.table} />
                </div>
            </div>
        </div>
    )
}

export default AdminReciepts
