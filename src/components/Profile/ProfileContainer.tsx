import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {GetProfile, getProfileStatus, ProfileType, updateProfileStatus} from "../../redux/profile-reducer";
import {compose} from 'redux'
import {withRouter} from "react-router";

type MapStateToPropsType = {
    profile: ProfileType | null;
    status: string;
    isAuth:boolean;
    authorizedUserId:number | null;
}
type MapStateDispatchToPropsType = {
    GetProfile: (userId: number) => void;
    getProfileStatus: (userId: number) => void;
    updateProfileStatus: (status: string) => void;
}
export type ProfileContainerPropsType = MapStateToPropsType & MapStateDispatchToPropsType

class ProfileContainer extends React.Component <any, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.GetProfile(userId)
        this.props.getProfileStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     GetProfile={this.props.GetProfile}
                     status={this.props.status}
                     getProfileStatus={this.props.getProfileStatus}
                     updateProfileStatus={this.props.updateProfileStatus}
                     isAuth={this.props.isAuth}
                     authorizedUserId={this.props.authorizedUserId}
            />
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth:state.auth.data.isAuth,
        authorizedUserId: state.auth.data.id
    }
}
export default compose<React.ComponentType>(connect(mapStateToProps,
    {GetProfile, getProfileStatus, updateProfileStatus}),
    withRouter) //withAuthRedirectComponent
    (ProfileContainer)