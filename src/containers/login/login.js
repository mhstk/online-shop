import InputCard from "../../components/inputCard/inputCard"
import MyButtom from "../../components/myButton/myButton"
import styles from "./login.module.css"
import { useState } from "react"
import Modal from "../../components/Modal/modal"
import ResponseModal from "../responseModal/responseModal"
import EditModal from "../editModal/editModal"
import BuyModal from "../buyModal/buyModal"

const Login = () => {

    const [show, setShow] = useState(false);
    const [modal_msg, setModal_msg] = useState("ورود با مشکل مواجه شد!")
    const [modal_succ, setModal_succ] = useState(false)
    const [modal_err, setModal_err] = useState(true)

    const [emailInp, setEmailInp] = useState("")
    const [passwordInp, setPasswordInp] = useState("")


    const [emailErr, setEmailErr] = useState({isError: false, errMsg:""})
    const [passwordErr, setPasswordErr] = useState({isError: false, errMsg:""})


    const handleEmail = (e) => {
        if (e.target.value.trim() === ""){
            setEmailErr({isError:true, errMsg:"پر کردن این فیلد الزامی است!"})
        }else if (!validateEmail(e.target.value.trim())){
            setEmailErr({isError:true, errMsg:"ایمیل صحیح وارد نشده است!"})
        }else if (e.target.value.trim().length > 255){
            setEmailErr({isError:true, errMsg:"ورودی از حد مجاز خارج شده است!"})
        }
        else{
            setEmailErr({isError:false, errMsg:""})
        }
        if (e.target.value.trim().length <= 255){
            setEmailInp(e.target.value.trim())
        }
        e.preventDefault()
    }

    const handlePassword = (e) => {
        if (e.target.value === ""){
            setPasswordErr({isError:true, errMsg:"پر کردن این فیلد الزامی است!"})
        }else if (!validatePassword(e.target.value)){
            setPasswordErr({isError:true, errMsg:" رمز عبور باید شامل حروف انگلیسی و عدد باشد و بیش از ۷ حرف باشد! "})
        }else if (e.target.value.length > 255){
            setPasswordErr({isError:true, errMsg:"ورودی از حد مجاز خارج شده است!"})
        }
        else{
            setPasswordErr({isError:false, errMsg:""})
        }
        if (e.target.value.length <= 255){
            setPasswordInp(e.target.value)
        }
        e.preventDefault()
    }



    function checkEmail(str){
        return (str === "" || str.length > 255 || !validateEmail(str)) ? false : true
    }

    function checkPassword(str){
        return (str === "" || str.length > 255 || !validatePassword(str)) ? false : true
    }




    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validatePassword(password) {
        if (password.length < 8){
            return false
        }
        var re = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
        return re.test(password);
    }


    const onLoginClicked = (e) => {
        setShow(true)
        e.stopPropagation()
        e.preventDefault()
    }


    return (
        <div className={styles.login}>
            <h5>حُجرة - ورود</h5>
            <InputCard className={styles.moreMargin} text="ایمیل" type="email" onChange={handleEmail} isError={emailErr.isError} err_msg={emailErr.errMsg}/>
            <InputCard className={styles.moreMargin} text="رمز عبور" type="password" minlength={6} onChange={handlePassword} isError={passwordErr.isError} err_msg={passwordErr.errMsg}/>
            <MyButtom className={styles.mybtn} text="ورود" onClick={onLoginClicked}/>
            <div className={styles.redircet}><p>اگر دارای حساب کاربری نیستید، <a href="signup">ثبت نام</a> کنید</p></div>
            {/* <Modal onClose={() => setShow(false)} show={show}>
                <ResponseModal success={modal_succ} error={modal_err} msg={modal_msg}/>
            </Modal> */}
            
            
        </div>
    )
        
}

export default Login
