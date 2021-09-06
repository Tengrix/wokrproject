import s from "./Paginator.module.css";
import React, {useState} from "react";
type PaginatorType = {
    onPageChanged: (page: number) => void
    totalItemsCount:number;
    pageCount:number;
    currentPage:number;
    portionSize:number
}
const Pagination = ({onPageChanged,totalItemsCount,pageCount,currentPage,portionSize}:PaginatorType) => {
    let pagesCount = Math.ceil(totalItemsCount / pageCount)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber-1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return(
        <div className={s.paginator}>
            <div>
                {portionNumber > 1 &&
                <button className={s.btn} onClick={()=> setPortionNumber(portionNumber-1)}> PREV</button>}
                {pages.filter(el=>el >= leftPortionPageNumber && el <= rightPortionPageNumber)
                    .map((el,i) => {
                    return <span key={i}>
                        <button className= {currentPage === el ? s.selectedPage : ''}
                                onClick={() =>onPageChanged(el)}>{el}</button>
                    </span>

                })}

                {portionCount > portionNumber &&
                <button className={s.btn} onClick={()=> setPortionNumber(portionNumber+1)}>NEXT</button>}
            </div>
        </div>
    )
}
export default Pagination