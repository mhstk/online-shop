import InputCard from "../../components/inputCard/inputCard";
import MyButtom from "../../components/myButton/myButton";
import styles from "./signUp.module.css";
import Modal from "../../components/Modal/modal";
import {useState} from 'react';
import ResponseModal from "../responseModal/responseModal";



const SignUp = () => {

    const [show, setShow] = useState(false);

    const [modal_msg, setModal_msg] = useState("ثبت نام با مشکل مواجه شد!")
    const [modal_succ, setModal_succ] = useState(false)
    const [modal_err, setModal_err] = useState(true)

    const [firstnameInp, setFirstnameInp] = useState("")
    const [emailInp, setEmailInp] = useState("")
    const [lastnameInp, setlastnameInp] = useState("")
    const [passwordInp, setPasswordInp] = useState("")
    const [addressInp, setAddressInp] = useState("")


    const [firstnameErr, setFirstnameErr] = useState({isError: false, errMsg:""})
    const [lastnameErr, setLastnameErr] = useState({isError: false, errMsg:""})
    const [emailErr, setEmailErr] = useState({isError: false, errMsg:""})
    const [addressErr, setAddressErr] = useState({isError: false, errMsg:""})
    const [passwordErr, setPasswordErr] = useState({isError: false, errMsg:""})


    const handleFirstname = (e) => {
        if (e.target.value.trim() === ""){
            setFirstnameErr({isError:true, errMsg:"پر کردن این فیلد الزامی است!"})
        }else if (e.target.value.trim().length > 255){
            setFirstnameErr({isError:true, errMsg:"ورودی از حد مجاز خارج شده است!"})
        }else{
            setFirstnameErr({isError:false, errMsg:""})
        }
        if (e.target.value.trim().length <= 255){
            setFirstnameInp(e.target.value.trim())
        }
        e.preventDefault()
    }

    const handleLastname = (e) => {
        if (e.target.value.trim() === ""){
            setLastnameErr({isError:true, errMsg:"پر کردن این فیلد الزامی است!"})
        }else if (e.target.value.trim().length > 255){
            setLastnameErr({isError:true, errMsg:"ورودی از حد مجاز خارج شده است!"})
        }else{
            setLastnameErr({isError:false, errMsg:""})
        }
        if (e.target.value.trim().length <= 255){
            setlastnameInp(e.target.value.trim())
        }
        e.preventDefault()
    }

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

    const handleAddress = (e) => {
        if (e.target.value === ""){
            setAddressErr({isError:true, errMsg:"پر کردن این فیلد الزامی است!"})
        }else if (e.target.value.length > 1000){
            setAddressErr({isError:true, errMsg:"ورودی از حد مجاز خارج شده است!"})
        }
        else{
            setAddressErr({isError:false, errMsg:""})
        }
        if (e.target.value.length <= 1000){
            setAddressInp(e.target.value)
        }
        e.preventDefault()
    }


    function checkFirstname(str){
        return (str === "" || str.length > 255) ? false : true
    }

    function checkLastname(str){
        return (str === "" || str.length > 255) ? false : true
    }

    function checkEmail(str){
        return (str === "" || str.length > 255 || !validateEmail(str)) ? false : true
    }

    function checkPassword(str){
        return (str === "" || str.length > 255 || !validatePassword(str)) ? false : true
    }

    function checkAddress(str){
        return (str === "" || str.length > 255) ? false : true
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


    const onSignUpClicked = (e) => {
        setShow(true)
        e.preventDefault()
        e.stopPropagation()
    }



    return (
        <div className={styles.signup}>
            <h5>حُجرة - ثبت نام</h5>
            <div>
                <div className={styles.column_container}>
                    <InputCard text="نام" onChange={handleFirstname} isError={firstnameErr.isError} err_msg={firstnameErr.errMsg}/>
                    <InputCard text="ایمیل" type="email" onChange={handleEmail} isError={emailErr.isError} err_msg={emailErr.errMsg}/>
                </div>
                <div className={styles.column_container}>
                    <InputCard text="نام خانوادگی" onChange={handleLastname} isError={lastnameErr.isError} err_msg={lastnameErr.errMsg}/>
                    <InputCard text="رمز عبور" type="password" minlength={6} 
                        onChange={handlePassword} isError={passwordErr.isError} err_msg={passwordErr.errMsg} />
                </div>
            </div>
            <InputCard text="آدرس" isLarge={true} onChange={handleAddress} isError={addressErr.isError} err_msg={addressErr.errMsg}/>
            <MyButtom className={styles.mybtn} onClick={onSignUpClicked} text="ثبت نام" />
            <div className={styles.redircet}><p>اگر دارای حساب کاربری هستید، <a href="/login">ورود</a> کنید</p></div>
            <Modal onClose={() => setShow(false)} show={show}>
                <ResponseModal success={modal_succ} error={modal_err} msg={modal_msg}/>
            </Modal>
            
        
        </div>
    )
}

export default SignUp
