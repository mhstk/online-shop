import InputCard from "../../components/inputCard/inputCard"
import MyButtom from "../../components/myButton/myButton"
import styles from "./login.module.css"

const Login = () => {
    return (
        <div className={styles.login}>
            <h5>فروشگاه - ورود</h5>
            <InputCard className={styles.moreMargin} text="ایمیل"/>
            <InputCard className={styles.moreMargin} text="رمز عبور" isPassword={true}/>
            <MyButtom className={styles.mybtn} text="ورود" />
            <div className={styles.redircet}><p>اگر دارای حساب کاربری نیستید، <a>ثبت نام</a> کنید</p></div>
        </div>
    )
}

export default Login
