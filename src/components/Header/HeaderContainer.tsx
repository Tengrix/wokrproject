import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {
    AuthLogOut,
    FollowOrUnfollow,
    setAuthUserData,
    setToggleFetching,
    setUserDataType
} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type mapDispatchToProps = {
    setAuthUserData: (data: setUserDataType) => void;
    setToggleFetching: (isFetching: boolean) => void;
    FollowOrUnfollow:() => void;
    AuthLogOut:() => number;
}
export type HeaderContainerTypeProps = mapStateToPropsType & mapDispatchToProps
class HeaderContainer extends React.Component<any, any>{
    componentDidMount() {
        this.props.FollowOrUnfollow()
    }

    render() {
        return <Header {...this.props}
                       login={this.props.login}
                       isAuth={this.props.isAuth}
                       setAuthUserData={this.props.setAuthUserData}
                       setToggleFetching={this.props.setToggleFetching}
                       FollowOrUnfollow={this.props.FollowOrUnfollow}
                       AuthLogOut={this.props.AuthLogOut}
        />
    }
}
let mapStateToProps = (state:AppStateType): mapStateToPropsType => {
    return{
        isAuth: state.auth.data.isAuth,
        login: state.auth.data.login,
    }
}
export default connect(mapStateToProps,{setAuthUserData,setToggleFetching,FollowOrUnfollow,AuthLogOut}) (HeaderContainer)