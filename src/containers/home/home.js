import { useState } from "react";
import styles from "./home.module.css"
import Hero from "./hero/hero";
import Sorter from "./itemsSection/sorter/sorter";
import Categories from "./itemsSection/categories/categories";
import PriceRange from "./itemsSection/priceRange/priceRange";
import Items from "./itemsSection/items/items";
import SideToolbarBtn from "./sideToolbar/sideToolbarBtn/sideToolbarBtn";
import PagintaionDiv from "../../components/paginationDiv/paginationDiv";
const Home = (props) => {
    const pageSize = 15

    const [allItems, setAllItems] = useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
    const [showItems, setShowItems] = useState(allItems.slice(0, pageSize));

    const onItemsChange = (start, end) => {
        setShowItems(allItems.slice(start, end))
    }

    

    return (
        <div className={styles.home}>
            <Hero/>
            <section className={styles.section}>
                <Sorter/>
                <div className={styles.container}>
                    <div className={styles.sidebar}>
                        <Categories maxHeight="515px"/>
                        <PriceRange/>
                    </div>
                    
                    <div className={styles.page_item_cont}>
                        <Items items={showItems}/>
                        <div className={styles.pagiation_cont}>
                            <PagintaionDiv all_items={allItems} onItemsChanged={onItemsChange} num_in_page={pageSize} page_num={1}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;