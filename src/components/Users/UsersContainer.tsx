import React from 'react'
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

type usersPagePropsType = {
    title:string;
}
const UsersPage = (props:usersPagePropsType) => {

    const isFetching = useSelector<AppStateType,boolean>(state => state.usersPage.isFetching)

    return <div>
        {isFetching ? <Preloader/> : null}
        <Users
            title={props.title}
        />

    </div>
}
export default UsersPage;
