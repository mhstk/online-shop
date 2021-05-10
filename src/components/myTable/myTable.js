import styles from './myTable.module.css'
const MyTable = ({ className, tableObj }) => {

    const renderTableHeader = (headers) => {
        return headers.map((header, index) => {
            console.log(header);
            return (
                <th key={index}>{header}</th>
            )
        })
    }
    const renderTableRows = (rows) => {
        return rows.map((row, index) => {
            const { receiptId, product, paidPrice, sentAddress } = row
            console.log(row);
            return (
                <tr key={index}>
                    <td>{receiptId}</td>
                    <td>{product}</td>
                    <td>{paidPrice}</td>
                    <td>{sentAddress}</td>
                </tr>
            )
        })
    }

    return (
        <table className={`${styles.table} ${className}`}>
            <thead>
                {renderTableHeader(tableObj[0])}

            </thead>
            <tbody>
                {renderTableRows(tableObj.slice(1, tableObj.length))}
            </tbody>
        </table>
    )
}

export default MyTable
