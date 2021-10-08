import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profileInitialStateType, saveUserPhoto, updateProfileStatus} from "../../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

const Profile = React.memo(() => {
    const dispatch = useDispatch()
    const {status,profile,isOwner} = useSelector<AppStateType,profileInitialStateType>(state => state.profilePage)
    const updateStatus = (status:string) => {
        dispatch(updateProfileStatus(status))
    }
    const savePhoto = (img:File) =>{
        dispatch(saveUserPhoto(img))
    }
    return (
        <div>
            <ProfileInfo
                status={status}
                profile={profile}
                updateProfileStatus={updateStatus}
                photos={profile.photos}
                saveUserPhoto={savePhoto}
                isOwner={isOwner}
            />
        </div>
    );
})

export default Profile;
