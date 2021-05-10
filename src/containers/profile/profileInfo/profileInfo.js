import InputCard from "../../../components/inputCard/inputCard";
import MyButton from "../../../components/myButton/myButton"; 

import styles from './profileInfo.module.css';

const ProfileInfo = ({profileName, lastName, address}) => {
    return (
        <form className={styles.profile_info}>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <InputCard className={styles.input_name}
                    text="نام" inputText={profileName} />
                <InputCard text="نام خانوادگی" inputText={lastName} />
            </div>
            <InputCard className={styles.long_input}
                text="رمز عبور" isPassword={true} />
            <InputCard text="آدرس" isLarge={true} inputText={address} />
            <MyButton className={styles.btn_edit} text="ویرایش اطلاعات" />
        </form>
    )
}

export default ProfileInfo;
