import InputCard from "../../components/inputCard/inputCard"
import MyButtom from "../../components/myButton/myButton"
import styles from "./signUp.module.css"

const SignUp = () => {
    return (
        <div className={styles.signup}>
            <h5>فروشگاه - ثبت نام</h5>
            <div>
                <div className={styles.column_container}>
                    <InputCard text="نام" />
                    <InputCard text="ایمیل" />
                </div>
                <div className={styles.column_container}>
                    <InputCard text="نام خانوادگی" />
                    <InputCard text="رمز عبور" isPassword={true} />
                </div>
            </div>
            <InputCard text="آدرس" isLarge={true} />
            <MyButtom className={styles.mybtn} text="ثبت نام" />
            <div className={styles.redircet}><p>اگر دارای حساب کاربری هستید، <a>ورود</a> کنید</p></div>
        </div>
    )
}

export default SignUp
