import React, {useEffect} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {getProfileStatus, ProfilePhotoType, ProfileType} from "../../redux/profile-reducer";
import {ProfileContainerPropsType} from "./ProfileContainer";
import {useDispatch, useSelector} from "react-redux";
import {RouteComponentProps} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

type ProfilePropsType = {
    profile: ProfileType | null
    photos:ProfilePhotoType
    saveUserPhoto:(img:File)=>void
    isOwner:boolean;
    status:string
}
type PathParamsType = {
    userId: string
}

type MainProfilePropsType = ProfilePropsType & ProfileContainerPropsType & RouteComponentProps<PathParamsType>
function Profile({profile,updateProfileStatus,photos,saveUserPhoto,status,isOwner,match}: MainProfilePropsType) {
    const dispatch = useDispatch()
    let myId = useSelector<AppStateType, number | null>(state => state.auth.data.id)
    let id = parseInt(match.params.userId)
    useEffect(() => {
        if (!id && myId !=null) {
            dispatch(getProfileStatus(myId))
        } else {
            dispatch(getProfileStatus(id))        }
    }, [id, myId])
    return (
        <div>
            <ProfileInfo
                status={status}
                profile={profile}
                updateProfileStatus={updateProfileStatus}
                photos={photos}
                saveUserPhoto={saveUserPhoto}
                isOwner={isOwner}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
