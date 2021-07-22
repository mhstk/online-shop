import InputCard from "../../../components/inputCard/inputCard";
import MyButton from "../../../components/myButton/myButton"; 
import { useState, useEffect } from "react";
import Modal from "../../../components/Modal/modal";
import styles from './profileInfo.module.css';
import ResponseModal from "../../responseModal/responseModal";

const ProfileInfo = ({profileName, lastName, address}) => {

    const [show, setShow] = useState(false);

    const [modal_msg, setModal_msg] = useState("ویرایش با مشکل مواجه شد!")
    const [modal_succ, setModal_succ] = useState(false)
    const [modal_err, setModal_err] = useState(true)

    const [firstnameInp, setFirstnameInp] = useState(profileName)
    const [lastnameInp, setlastnameInp] = useState(lastName)
    const [passwordInp, setPasswordInp] = useState("رمز عبور")
    const [addressInp, setAddressInp] = useState(address)


    const [firstnameErr, setFirstnameErr] = useState({isError: false, errMsg:""})
    const [lastnameErr, setLastnameErr] = useState({isError: false, errMsg:""})
    const [addressErr, setAddressErr] = useState({isError: false, errMsg:""})
    const [passwordErr, setPasswordErr] = useState({isError: false, errMsg:""})

    useEffect(() => {
        setFirstnameInp(profileName)
        setlastnameInp(lastName)
        setAddressInp(address)
    }, [profileName, lastName, address])


    const handleFirstname = (e) => {
        if (e.target.value.trim() === ""){
            // setFirstnameErr({isError:true, errMsg:"پر کردن این فیلد الزامی است!"})
            setFirstnameInp(profileName)
            setFirstnameErr({isError:false, errMsg:""})
            e.preventDefault();
            return 
        }else if (e.target.value.trim().length > 255){
            setFirstnameErr({isError:true, errMsg:"ورودی از حد مجاز خارج شده است!"})
        }else{
            setFirstnameErr({isError:false, errMsg:""})
        }
        if (e.target.value.trim().length <= 255){
            setFirstnameInp(e.target.value.trim())
        }
        e.preventDefault();
    }

    const handleLastname = (e) => {
        if (e.target.value.trim() === ""){
            // setLastnameErr({isError:true, errMsg:"پر کردن این فیلد الزامی است!"})
            setlastnameInp(lastName)
            setLastnameErr({isError:false, errMsg:""})
            e.preventDefault();
            return 
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


    const handlePassword = (e) => {
        if (e.target.value === ""){
            // setPasswordErr({isError:true, errMsg:"پر کردن این فیلد الزامی است!"})
            setPasswordInp("رمز عبور")
            setPasswordErr({isError:false, errMsg:""})
            e.preventDefault();
            return 
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
            // setAddressErr({isError:true, errMsg:"پر کردن این فیلد الزامی است!"})
            setAddressInp(address)
            setAddressErr({isError:false, errMsg:""})
            e.preventDefault();
            return 
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

    function checkPassword(str){
        return (str === "" || str.length > 255 || !validatePassword(str)) ? false : true
    }

    function checkAddress(str){
        return (str === "" || str.length > 255) ? false : true
    }



    function validatePassword(password) {
        if (password.length < 8){
            return false
        }
        var re = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
        return re.test(password);
    }


    const onSubmitClicked = (e) => {
        setShow(true)
        e.preventDefault()
        e.stopPropagation()
    }

    console.log("ine " + firstnameInp + " fff " + profileName);
    return (
        <form className={styles.profile_info}>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <InputCard className={styles.input_name}
                    text="نام" type="text" inputText={firstnameInp} onChange={handleFirstname} isError={firstnameErr.isError} err_msg={firstnameErr.errMsg} />
                <InputCard text="نام خانوادگی" type="text" inputText={lastnameInp} onChange={handleLastname} isError={lastnameErr.isError} err_msg={lastnameErr.errMsg} />
            </div>
            <InputCard className={styles.long_input}
                text="رمز عبور" type="password" minLength={6} inputText={passwordInp} onChange={handlePassword} isError={passwordErr.isError} err_msg={passwordErr.errMsg} />
            <InputCard text="آدرس" type="text" isLarge={true} inputText={addressInp} onChange={handleAddress} isError={addressErr.isError} err_msg={addressErr.errMsg}/>
            <MyButton className={styles.btn_edit} text="ویرایش اطلاعات" onClick={onSubmitClicked}/>
            <Modal onClose={() => setShow(false)} show={show}>
                <ResponseModal success={modal_succ} error={modal_err} msg={modal_msg}/>
            </Modal>
        </form>
    )
}

export default ProfileInfo;
