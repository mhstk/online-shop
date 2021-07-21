import InputCard from "../../components/inputCard/inputCard"
import MyButtom from "../../components/myButton/myButton"
import styles from "./login.module.css"
import { useState } from "react"
import Modal from "../../components/Modal/modal"
import ResponseModal from "../responseModal/responseModal"
import {useAuth} from "../../hooks/useAuth"
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Login = ({props}) => {

    const history = useHistory();
    const [show, setShow] = useState(false);
    const [modal_msg, setModal_msg] = useState("ورود با مشکل مواجه شد!")
    const [modal_succ, setModal_succ] = useState(false)
    const [modal_err, setModal_err] = useState(true)

    const [emailInp, setEmailInp] = useState("")
    const [passwordInp, setPasswordInp] = useState("")


    const [emailErr, setEmailErr] = useState({isError: false, errMsg:""})
    const [passwordErr, setPasswordErr] = useState({isError: false, errMsg:""})

    const authContext = useAuth();


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

    function handleLoginError(msg="ورود با مشکل مواجه شد!") {
        setModal_msg(msg);
        setModal_succ(false);
        setModal_err(true);
    }

    


    const onLoginClicked = (e) => {
        e.stopPropagation()
        e.preventDefault()
        console.log(emailInp);
        console.log(passwordInp);
        if (checkEmail(emailInp) && checkPassword(passwordInp)) {
            axios.post("http://127.0.0.1:8000/user/token", {
                username: emailInp,
                password: passwordInp
            },{headers: {'Content-Type' : 'application/json'}}).then((response) => {
                if (response.status === 200) {
                    authContext.setAuthToken(response.data["token"])
                    setModal_msg("ورود با موفقیت انجام شد!");
                    setModal_succ(true);
                    setModal_err(false);
                    setShow(true);
                    setTimeout(() => {
                        history.replace('/');
                    }, 2000);
                } else {
                    handleLoginError()
                    setShow(true)
                }

            }, (error) => {
                handleLoginError()
                setShow(true)
            });
        }else{
            
            handleLoginError("فیلد ها به درستی پر نشده است!")
            setShow(true)
        }
    }


    return (
        <div className={styles.login}>
            <h5>حُجرة - ورود</h5>
            <InputCard className={styles.moreMargin} text="ایمیل" type="email" onChange={handleEmail} isError={emailErr.isError} err_msg={emailErr.errMsg}/>
            <InputCard className={styles.moreMargin} text="رمز عبور" type="password" minlength={6} onChange={handlePassword} isError={passwordErr.isError} err_msg={passwordErr.errMsg}/>
            <MyButtom className={styles.mybtn} text="ورود" onClick={onLoginClicked}/>
            <div className={styles.redircet}><p>اگر دارای حساب کاربری نیستید، <a href="signup">ثبت نام</a> کنید</p></div>
            <Modal onClose={() => setShow(false)} show={show}>
                <ResponseModal success={modal_succ} error={modal_err} msg={modal_msg}/>
            </Modal>
            
            
        </div>
    )
        
}

export default Login
