import InputCard from "../../components/inputCard/inputCard"
import MyButtom from "../../components/myButton/myButton"
import styles from "./login.module.css"

const Login = () => {
    return (
        <div className={styles.login}>
            <h5>حُجرة - ورود</h5>
            <InputCard className={styles.moreMargin} text="ایمیل" type="email"/>
            <InputCard className={styles.moreMargin} text="رمز عبور" type="password" minlength={6}/>
            <MyButtom className={styles.mybtn} text="ورود" />
            <div className={styles.redircet}><p>اگر دارای حساب کاربری نیستید، <a href="signup">ثبت نام</a> کنید</p></div>
        </div>
    )
}

export default Login
