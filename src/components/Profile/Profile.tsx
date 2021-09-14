import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePhotoType, ProfileType} from "../../redux/profile-reducer";
import {ProfileContainerPropsType} from "./ProfileContainer";

type ProfilePropsType = {
    profile: ProfileType | null
    photos:ProfilePhotoType
    saveUserPhoto:(img:File)=>void
    isOwner:boolean;
    status:string
}

type MainProfilePropsType = ProfilePropsType & ProfileContainerPropsType
function Profile({profile,updateProfileStatus,photos,saveUserPhoto,status,isOwner}: MainProfilePropsType) {

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
