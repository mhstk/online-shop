import React, {useState} from 'react';
import styles from "./paginationDiv.module.css"



const PaginationDiv = ({all_items, onItemsChanged, num_in_page, page_num}) => {

    const [currPage, setCurrPage] = useState(page_num)
    const endPage = Math.ceil(all_items.length / num_in_page)

    const range = (start, end) => {
        let length = end - start + 1;
        return Array.from({ length }, (_, idx) => idx + start);
    };


    const goPage = (newPage) => {
        console.log("newPage " + newPage);
        if (newPage >= 1 && newPage <= endPage && currPage !== newPage){
            var start = (newPage-1)*num_in_page;
            var end = Math.min((newPage-1)*num_in_page+num_in_page, all_items.length );
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            });
            onItemsChanged(start, end)
            setCurrPage(newPage)
            
        } 
    }

    


    return (
        <div>
            <ul className={styles.page_list}>
                {(currPage !== 1) && <li><button className={styles.page_btn} onClick={() => goPage(currPage-1)}>قبلی</button></li>}
                {range(1,endPage).map((val) => {
                    return(
                        <li><button className={`${styles.page_btn} ${currPage === val && styles.selected}`} onClick={() => goPage(val)}>{val}</button></li>
                    )
                })}
                {(currPage !== endPage) && <li><button className={styles.page_btn} onClick={() => goPage(currPage+1)}>بعدی</button></li>}
            </ul>
        </div>
    )
    
};

export default PaginationDiv;