import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect, useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    GetProfile,
    getProfileStatus,
    ProfilePhotoType,
    ProfileType, saveUserPhoto,
    updateProfileStatus
} from "../../redux/profile-reducer";
import {compose} from 'redux'
import {withRouter} from "react-router";
import {RouteComponentProps, useParams} from "react-router-dom";

type MapStateToPropsType = {
    photos: ProfilePhotoType
    profile: ProfileType | null;
    status: string;
    isAuth: boolean;
    authorizedUserId: number | null;
}
type MapStateDispatchToPropsType = {
    GetProfile: (userId: number) => void;
    getProfileStatus: (userId: number) => void;
    updateProfileStatus: (status: string) => void;
    saveUserPhoto: (img: File) => void
}
type PathParamsType = {
    userId: string
}
export type ProfileContainerPropsType = MapStateToPropsType & MapStateDispatchToPropsType
export type PropsType = ProfileContainerPropsType & RouteComponentProps<PathParamsType>

const ProfileContainer = (props: PropsType) => {
    let myId = useSelector<AppStateType, number | null>(state => state.auth.data.id)
    let id = parseInt(props.match.params.userId)
    useEffect(() => {
        if (!id && myId != null) {
            props.GetProfile(myId)
        } else {
            props.GetProfile(id)
        }
    }, [id, myId])
    return (
        <Profile {...props}
                 profile={props.profile}
                 GetProfile={props.GetProfile}
                 status={props.status}
                 getProfileStatus={props.getProfileStatus}
                 updateProfileStatus={props.updateProfileStatus}
                 isAuth={props.isAuth}
                 authorizedUserId={props.authorizedUserId}
                 photos={props.photos}
                 saveUserPhoto={props.saveUserPhoto}
                 isOwner={!id}
        />
    )
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.data.isAuth,
        authorizedUserId: state.auth.data.id,
        photos: state.profilePage.profile.photos
    }
}
export default compose<React.ComponentType>(connect(mapStateToProps,
        {GetProfile, getProfileStatus, updateProfileStatus, saveUserPhoto}),
    withRouter) //withAuthRedirectComponent
    (ProfileContainer)