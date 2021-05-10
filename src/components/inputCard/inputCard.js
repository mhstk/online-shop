import styles from "./inputCard.module.css";
const InputCard = ({className, text, isPassword, isLarge, inputText}) => {
    return (
        <div className={`${styles.container} 
        ${isLarge && styles.large_container} ${className}`}>
            <div className={styles.label} ><p>{text}</p></div>
            {isLarge? 
                <textarea rows="3"
                placeholder={inputText ? inputText : `${text} خود را وارد نمایید`}
                >
                </textarea>
            :

                <input type={isPassword ? "password" : "text"} 
                    placeholder={inputText ? inputText : `${text} خود را وارد نمایید`}
                />
            }
            
        </div>
    )
}

export default InputCard;