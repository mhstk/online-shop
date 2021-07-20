import InputCard from "../../components/inputCard/inputCard"
import MyButtom from "../../components/myButton/myButton"
import styles from "./signUp.module.css"

const SignUp = () => {
    return (
        <div className={styles.signup}>
            <h5>حُجرة - ثبت نام</h5>
            <div>
                <div className={styles.column_container}>
                    <InputCard text="نام" />
                    <InputCard text="ایمیل" type="email"/>
                </div>
                <div className={styles.column_container}>
                    <InputCard text="نام خانوادگی" />
                    <InputCard text="رمز عبور" type="password" minlength={6} />
                </div>
            </div>
            <InputCard text="آدرس" isLarge={true} />
            <MyButtom className={styles.mybtn} text="ثبت نام" />
            <div className={styles.redircet}><p>اگر دارای حساب کاربری هستید، <a href="/login">ورود</a> کنید</p></div>
        </div>
    )
}

export default SignUp
