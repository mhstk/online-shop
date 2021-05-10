import styles from "./tabs.module.css";
const Tabs = ({ className, itemsList, totalWidth, onTabClicked, activeIndex = 0 }) => {

    let itemWidth = (totalWidth / itemsList.length).toString() + "px";
    return (
        <div >
            <ul className={`${styles.tabContainer} ${className}`}>
                {itemsList.map((e, index) => {
                    return <li className={`${styles.item} 
                        ${(index === activeIndex) && styles.active}
                        `}
                        key={index}
                        style={{ width: `${itemWidth}` }}
                        onClick={(e) => {onTabClicked(index)}}
                        >{e}</li>
                    // return <button className={styles.item} key={index}
                    // style={{width:`${itemWidth}`}} disabled>{e}</button>
                })}
            </ul>
        </div>
    )
}

export default Tabs;
