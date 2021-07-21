import styles from "./inputCard.module.css";
import {useState} from "react";
const InputCard = ({className, text, onChange, isLarge, inputText, type, minlength, err_msg, isError=false}) => {
    const ERR_MSG = "این فیلد دارای ارور می باشد!"

    const [inpText, setInpText] = useState("")

    function isCorrect(text){
        return text !== undefined && text.length > 0 && !isError ? true : false;
    }

    const handleOnChange = (e) => {
        setInpText(e.target.value)
        if (e.target.value.trim() === ""){
            setInpText("")
        }
        console.log(inpText);
        onChange(e)
    }

    return (
        <div className={styles.inp_err_cont}>
            <div className={`${styles.container} 
                ${isLarge && styles.large_container} ${className} 
                ${isError && styles.error}
                ${isCorrect(inpText) && styles.correct}`}>
                <div className={styles.label} ><p>{text}</p></div>
                {isLarge? 
                    <textarea rows="3" onChange={(e) => handleOnChange(e)}
                    placeholder={inputText ? inputText : `${text} خود را وارد نمایید`} value={inpText}
                    >
                    </textarea>
                :

                    <input type={type} minlength={minlength} onChange={(e) => handleOnChange(e)}
                        placeholder={inputText ? inputText : `${text} خود را وارد نمایید`} value={inpText}
                    />
                }
                
            </div>
            {isError && <p>{err_msg === undefined ? ERR_MSG : err_msg}</p>}
        </div>
    )
}

export default InputCard;