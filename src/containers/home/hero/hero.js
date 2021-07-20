import React, {useState} from 'react';
import styles from "./hero.module.css";
import clock_img from "../../../assets/clock.png"
import ocean_img from "../../../assets/ocean.jpg"
import drop_img from "../../../assets/drop.jpg"
import useInterval from '../../../hooks/useInterval';
const Hero = (props) => {

    const sliders = [
        <div className={styles.hero_back}>
                <img src={clock_img} alt="clock"/>
            </div>,
        <div className={styles.hero_back}><img style={{width:"100%", height:"100%", objectFit: "cover"}} src={ocean_img} alt="ocean"/></div>
        ,
        <div className={styles.hero_back}><img style={{width:"100%", height:"100%", objectFit: "cover"}} src={drop_img} alt="drop"/></div>




    ]


    const [sliderIndex, setSliderIndex] = useState(0)

    useInterval(
        () => {
          // Your custom logic here
          setSliderIndex((sliderIndex+1) % sliders.length)
        },
        // Delay in milliseconds or null to stop it
        10000,
    )



    return (
        <div className={styles.hero}>
            <h1>در محصولات سایت جستجو کنید...</h1>
            <input type="text" placeholder="نام محصول خود را وارد کنید"/>
            <button>جستجو کنید</button>
            {sliders[sliderIndex]}
        </div>
    );
};

export default Hero;