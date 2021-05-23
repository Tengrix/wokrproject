import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setProfile} from "../../redux/profile-reducer";
import { withRouter} from 'react-router'

type MapStateToPropsType = {
    profile:ProfileType | null
}
type MapStateDispatchToPropsType = {
    setProfile: (profile:ProfileType) => void;
}
export type ProfileContainerPropsType = MapStateToPropsType & MapStateDispatchToPropsType
class ProfileContainer extends React.Component <any, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 15
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
            .then(response=>{
                this.props.setProfile(response.data)


            })
    }
    render() {

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     setProfile={this.props.setProfile}
            />
        )
    }
}

let mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        profile:state.profilePage.profile
    }

}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{setProfile})(WithUrlDataContainerComponent);
