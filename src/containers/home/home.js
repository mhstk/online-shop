import React, {useState, useEffect} from "react";
import styles from "./home.module.css"
import Hero from "./hero/hero";
import Sorter from "./itemsSection/sorter/sorter";
import Categories from "./itemsSection/categories/categories";
import PriceRange from "./itemsSection/priceRange/priceRange";
import Items from "./itemsSection/items/items";
import SideToolbarBtn from "./sideToolbar/sideToolbarBtn/sideToolbarBtn";
import PagintaionDiv from "../../components/paginationDiv/paginationDiv";
import {useAuth} from "../../hooks/useAuth";
import axios from "axios";

const Home = (props) => {
    const pageSize = 15;

    const [allItems, setAllItems] = useState([]);
    const [showItems, setShowItems] = useState(allItems.slice(0, pageSize));
    const [loadingItem, setLoadingItem] = useState(false);

    const [cats, setCats] = useState([]);
    const [loadingCat, setLoadingCat] = useState(false);
    const {authToken} = useAuth();
    const onItemsChange = (start, end) => {
        setShowItems(allItems.slice(start, end))
    };
    const [sortParam, setSortParam] = useState("");
    const [searchParam, setSearchParam] = useState("");
    const [catParam, setCatParam] = useState([]);
    useEffect(() => {
        setLoadingCat(true);
        axios.get("http://127.0.0.1:8000/api/category/", {
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Token ${authToken}`
            }
        }).then((response) => {
            setLoadingCat(false)
            if (response.status === 200) {
                setCats(response.data);
            } else {
                console.error(response.statusText)
            }

        }, (error) => {
            setLoadingCat(false)
            console.error(error)
        })
    }, []);

    useEffect(() => {
        setLoadingItem(true);
        axios.get("http://127.0.0.1:8000/api/item/", {
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Token ${authToken}`
            },
            params: {
                cat: catParam.join(","),
                search: searchParam,
                sort: sortParam
            }
        }).then((response) => {
            setLoadingItem(false)
            if (response.status === 200) {
                response.data.forEach((item) => {
                        let catName;
                        for (let cat of cats) {
                            if (item.category === cat.id) {
                                catName = cat.name;
                                break;
                            }
                        }
                        item["catName"] = catName
                    }
                );
                setAllItems(response.data);
                setShowItems(response.data.slice(0, pageSize))

            } else {
                console.error(response.statusText)
            }

        }, (error) => {
            setLoadingItem(false)
            console.error(error)

        })
    }, [catParam, searchParam, sortParam]);

    const addCatParam = (id, add) => {
        if (add) {
            if (!catParam.includes(id)) {
                const newCatParam = [...catParam];
                newCatParam.push(id)
                setCatParam(newCatParam)
            }
        } else {
            if (catParam.includes(id)) {
                setCatParam(catParam.filter((value => value !== id)))
            }
        }
    };
    return (

        <div className={styles.home}>
            <Hero setSearch={setSearchParam}/>
            <section className={styles.section} id="products">
                <Sorter setSort={setSortParam}/>
                <div className={styles.container}>
                    <div className={styles.sidebar}>
                        <Categories cats={cats} maxHeight="515px" loading={loadingCat} addCat={addCatParam}/>
                        <PriceRange/>
                    </div>

                    <div className={styles.page_item_cont}>
                        <Items items={showItems} loading={loadingItem}/>
                        <div className={styles.pagiation_cont}>
                            <PagintaionDiv all_items={allItems} onItemsChanged={onItemsChange} num_in_page={pageSize}
                                           page_num={1}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;