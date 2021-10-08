import React, {useEffect} from 'react';
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {GetProfile, getProfileStatus} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";


const ProfileContainer = React.memo((props) => {

    const dispatch = useDispatch()
    let myId = useSelector<AppStateType, number | null>(state => state.auth.data.id)
    let {userId} = useParams<{ userId:string }>()
    const setToggle = useSelector<AppStateType, boolean>(state => state.profilePage.setToggle)
    const isLogged = useSelector<AppStateType, boolean>(state => state.auth.data.isAuth)

    useEffect(() => {
        if (isLogged) {
            if (!userId && myId != null) {
                dispatch(GetProfile(myId))
                dispatch(getProfileStatus(myId))
            } else {
                dispatch(GetProfile(Number(userId)))
                dispatch(getProfileStatus(Number(userId)))
            }
        }
    }, [userId, myId])
    // if(!isLogged){
    //     return <div> <Redirect to={'/login'}/> </div>
    // }
    return (
        <div>
            {!setToggle ? <Preloader/> :
                <Profile/>
            }
        </div>
    )
})

export default ProfileContainer