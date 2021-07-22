import InputCard from "../../components/inputCard/inputCard";
import MyButtom from "../../components/myButton/myButton";
import styles from "./signUp.module.css";
import Modal from "../../components/Modal/modal";
import { useState } from 'react';
import ResponseModal from "../responseModal/responseModal";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useAuth } from "../../hooks/useAuth";




const SignUp = () => {
    const history = useHistory();
    const {authToken, setAuthToken} = useAuth();

    const [show, setShow] = useState(false);

    const [modal_msg, setModal_msg] = useState("ثبت نام با مشکل مواجه شد!")
    const [modal_succ, setModal_succ] = useState(false)
    const [modal_err, setModal_err] = useState(true)

    const [firstnameInp, setFirstnameInp] = useState("")
    const [emailInp, setEmailInp] = useState("")
    const [lastnameInp, setlastnameInp] = useState("")
    const [passwordInp, setPasswordInp] = useState("")
    const [addressInp, setAddressInp] = useState("")


    const [firstnameErr, setFirstnameErr] = useState({ isError: false, errMsg: "" })
    const [lastnameErr, setLastnameErr] = useState({ isError: false, errMsg: "" })
    const [emailErr, setEmailErr] = useState({ isError: false, errMsg: "" })
    const [addressErr, setAddressErr] = useState({ isError: false, errMsg: "" })
    const [passwordErr, setPasswordErr] = useState({ isError: false, errMsg: "" })


    const handleFirstname = (e) => {
        if (e.target.value.trim() === "") {
            setFirstnameErr({ isError: true, errMsg: "پر کردن این فیلد الزامی است!" })
        } else if (e.target.value.trim().length > 255) {
            setFirstnameErr({ isError: true, errMsg: "ورودی از حد مجاز خارج شده است!" })
        } else {
            setFirstnameErr({ isError: false, errMsg: "" })
        }
        if (e.target.value.trim().length <= 255) {
            setFirstnameInp(e.target.value.trim())
        }
        e.preventDefault()
    }

    const handleLastname = (e) => {
        if (e.target.value.trim() === "") {
            setLastnameErr({ isError: true, errMsg: "پر کردن این فیلد الزامی است!" })
        } else if (e.target.value.trim().length > 255) {
            setLastnameErr({ isError: true, errMsg: "ورودی از حد مجاز خارج شده است!" })
        } else {
            setLastnameErr({ isError: false, errMsg: "" })
        }
        if (e.target.value.trim().length <= 255) {
            setlastnameInp(e.target.value.trim())
        }
        e.preventDefault()
    }

    const handleEmail = (e) => {
        if (e.target.value.trim() === "") {
            setEmailErr({ isError: true, errMsg: "پر کردن این فیلد الزامی است!" })
        } else if (!validateEmail(e.target.value.trim())) {
            setEmailErr({ isError: true, errMsg: "ایمیل صحیح وارد نشده است!" })
        } else if (e.target.value.trim().length > 255) {
            setEmailErr({ isError: true, errMsg: "ورودی از حد مجاز خارج شده است!" })
        }
        else {
            setEmailErr({ isError: false, errMsg: "" })
        }
        if (e.target.value.trim().length <= 255) {
            setEmailInp(e.target.value.trim())
        }
        e.preventDefault()
    }

    const handlePassword = (e) => {
        if (e.target.value === "") {
            setPasswordErr({ isError: true, errMsg: "پر کردن این فیلد الزامی است!" })
        } else if (!validatePassword(e.target.value)) {
            setPasswordErr({ isError: true, errMsg: " رمز عبور باید شامل حروف انگلیسی و عدد باشد و بیش از ۷ حرف باشد! " })
        } else if (e.target.value.length > 255) {
            setPasswordErr({ isError: true, errMsg: "ورودی از حد مجاز خارج شده است!" })
        }
        else {
            setPasswordErr({ isError: false, errMsg: "" })
        }
        if (e.target.value.length <= 255) {
            setPasswordInp(e.target.value)
        }
        e.preventDefault()
    }

    const handleAddress = (e) => {
        if (e.target.value === "") {
            setAddressErr({ isError: true, errMsg: "پر کردن این فیلد الزامی است!" })
        } else if (e.target.value.length > 1000) {
            setAddressErr({ isError: true, errMsg: "ورودی از حد مجاز خارج شده است!" })
        }
        else {
            setAddressErr({ isError: false, errMsg: "" })
        }
        if (e.target.value.length <= 1000) {
            setAddressInp(e.target.value)
        }
        e.preventDefault()
    }


    function checkFirstname(str) {
        return (str === "" || str.length > 255) ? false : true
    }

    function checkLastname(str) {
        return (str === "" || str.length > 255) ? false : true
    }

    function checkEmail(str) {
        return (str === "" || str.length > 255 || !validateEmail(str)) ? false : true
    }

    function checkPassword(str) {
        return (str === "" || str.length > 255 || !validatePassword(str)) ? false : true
    }

    function checkAddress(str) {
        return (str === "" || str.length > 255) ? false : true
    }






    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validatePassword(password) {
        if (password.length < 8) {
            return false
        }
        var re = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
        return re.test(password);
    }

    function handleSignupError(msg = "ثبت نام با مشکل مواجه شد!") {
        setModal_msg(msg);
        setModal_succ(false);
        setModal_err(true);
    }


    const onSignUpClicked = (e) => {
        e.stopPropagation()
        e.preventDefault()
        if (checkEmail(emailInp) && checkPassword(passwordInp) && checkAddress(addressInp) && checkFirstname(firstnameInp) && checkLastname(lastnameInp)) {
            axios.post("http://127.0.0.1:8000/user/create", {
                username: emailInp,
                password: passwordInp,
                first_name: firstnameInp,
                last_name: lastnameInp,
                address: addressInp,
            }, { headers: { 'Content-Type': 'application/json' } }).then((response) => {
                if (response.status === 201) {
                    setModal_msg("ثبت نام با موفقیت انجام شد!");
                    setModal_succ(true);
                    setModal_err(false);
                    setShow(true);
                    setTimeout(() => {
                        // history.replace('/login');
                        axios.post("http://127.0.0.1:8000/user/token", {
                            username: emailInp,
                            password: passwordInp
                        }, { headers: { 'Content-Type': 'application/json' } }).then((response) => {
                            if (response.status === 200) {
                                setAuthToken(response.data["token"])
                                history.replace('/');
                            } else {

                            }

                        }, (error) => {

                        });

                    }, 2000);
                } else {
                    console.log(response);
                    handleSignupError()
                    setShow(true)
                }

            }, (error) => {
                if (error.response.data["username"][0] === "user with this username already exists.") {
                    handleSignupError("کاربری با این ایمیل در سیستم موجود است!")
                    setShow(true)
                } else {
                    handleSignupError()
                    setShow(true)
                }
            });
        } else {

            handleSignupError("فیلد ها به درستی پر نشده است!")
            setShow(true)
        }
    }



    return (
        <div className={styles.signup}>
            <h5>حُجرة - ثبت نام</h5>
            <div>
                <div className={styles.column_container}>
                    <InputCard text="نام" onChange={handleFirstname} isError={firstnameErr.isError} err_msg={firstnameErr.errMsg} />
                    <InputCard text="ایمیل" type="email" onChange={handleEmail} isError={emailErr.isError} err_msg={emailErr.errMsg} />
                </div>
                <div className={styles.column_container}>
                    <InputCard text="نام خانوادگی" onChange={handleLastname} isError={lastnameErr.isError} err_msg={lastnameErr.errMsg} />
                    <InputCard text="رمز عبور" type="password" minlength={6}
                        onChange={handlePassword} isError={passwordErr.isError} err_msg={passwordErr.errMsg} />
                </div>
            </div>
            <InputCard text="آدرس" isLarge={true} onChange={handleAddress} isError={addressErr.isError} err_msg={addressErr.errMsg} />
            <MyButtom className={styles.mybtn} onClick={onSignUpClicked} text="ثبت نام" />
            <div className={styles.redircet}><p>اگر دارای حساب کاربری هستید، <a href="/login">ورود</a> کنید</p></div>
            <Modal onClose={() => setShow(false)} show={show}>
                <ResponseModal success={modal_succ} error={modal_err} msg={modal_msg} />
            </Modal>


        </div>
    )
}

export default SignUp
