import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePhotoType, ProfileType} from "../../redux/profile-reducer";
import {ProfileContainerPropsType} from "./ProfileContainer";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    photos:ProfilePhotoType
    saveUserPhoto:(img:File)=>void
    isOwner:boolean;
}
type MainProfilePropsType = ProfilePropsType & ProfileContainerPropsType
function Profile({profile,status,updateProfileStatus,photos,saveUserPhoto,isOwner}: MainProfilePropsType) {

    return (
        <div>
            <ProfileInfo
                profile={profile}
                status={status}
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
