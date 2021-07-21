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
            return (
                <tr key={index}>
                    {row.map((element, sec_index) => {
                        return (
                            <td key={sec_index}>{element}</td>
                        )
                    })}
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
