


import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import AdminProfile from "../adminProfile/adminProfile";
import Profile from "../profile/profile";
import { useHistory } from "react-router-dom";



const ProfileRed = () => {

    const { authToken, setAuthToken } = useAuth();
    const [isStaff, setisStaff] = useState(false);
    const history = useHistory();


    useEffect(() => {
        if (authToken !== null) {
            axios.get("http://127.0.0.1:8000/user/me/", {
                headers: { 'Authorization': `Token ${authToken}` }
            }).then((response) => {
                if (response.status === 200) {
                    setisStaff(response.data.is_staff)
                } else {
                    console.log(response);
                }

            }, (error) => {
                console.log(error.response);


            })

        }else{
            history.replace("/login")
        }
    }, [authToken])






    return (
        <>
            {isStaff ? <AdminProfile /> : <Profile />}
        </>
    )
}

export default ProfileRed
