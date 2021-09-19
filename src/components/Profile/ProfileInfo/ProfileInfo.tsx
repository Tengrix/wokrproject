import React, {ChangeEvent} from 'react'
import s from './ProfileInfo.module.css'
import {ProfilePhotoType, ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import userPhoto from './../../../Pics/51f6fb256629fc755b8870c801092942.png'
import ProfileData from "./ProfileData";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

type ProfileInfoType = {
    profile: ProfileType | null
    status: string;
    updateProfileStatus: (status: string) => void;
    photos: ProfilePhotoType
    saveUserPhoto: (img: File) => void
    isOwner:boolean;
}

function ProfileInfo(props: ProfileInfoType) {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.data.isAuth)
    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.saveUserPhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.photos.large || userPhoto} alt="profile pic"/>
                    {props.isOwner&&<input type="file" disabled={!isAuth} onChange={onMainPhotoSelected}/>}
                    <ProfileStatus status={props.status}
                                   updateProfileStatus={props.updateProfileStatus}
                                   isOwner={props.isOwner}
                                   isAuth={isAuth}

                    />
                </div>
                <ProfileData isOwner={props.isOwner}
                             profile={props.profile}
                             isAuth={isAuth}
                />
            </div>
        </div>
    )
}

export default ProfileInfo