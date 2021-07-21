import styles from "./myButton.module.css"
const MyButton = ({className, text, onClick}) => {
    return (
        <>
            <button className={`${styles.mybtn} ${className}`} onClick={(e) => onClick(e)}>{text}</button>
        </>
    )
}

export default MyButton
