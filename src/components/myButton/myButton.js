import styles from "./myButton.module.css"
const MyButton = ({className, text}) => {
    return (
        <>
            <button className={`${styles.mybtn} ${className}`}>{text}</button>
        </>
    )
}

export default MyButton
