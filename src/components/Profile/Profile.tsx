import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";
import {ProfileContainerPropsType} from "./ProfileContainer";

type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateProfileStatus:(status:string) => void;
}
type MainProfilePropsType = ProfilePropsType & ProfileContainerPropsType

function Profile({profile,status,updateProfileStatus}: MainProfilePropsType) {
    return (
        <div>
            <ProfileInfo
                profile={profile}
                status={status}
                updateProfileStatus={updateProfileStatus}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
