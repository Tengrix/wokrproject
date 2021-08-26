import s from "./Paginator.module.css";
import React from "react";
type PaginatorType = {
    onPageChanged: (page: number) => void
    totalUsersCount:number;
    pageCount:number;
    currentPage:number;
}
const Pagination = (props:PaginatorType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageCount)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return(
        <div>
            <div>
                {pages.map(el => {
                    return <span className={props.currentPage === el ? s.selectedPage : ''}
                                 onClick={() => props.onPageChanged(el)}>{el}</span>
                })}

            </div>
        </div>
    )
}
export default Pagination