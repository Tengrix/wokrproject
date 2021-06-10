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

function Profile(props: MainProfilePropsType) {
    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                // pic={'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'}
                status={props.status}
                updateProfileStatus={props.updateProfileStatus}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
